---
id: micropython-timers
title: Trabalhando com timers na Franzininho WiFi usando MicroPython
slug: /franzininho-wifi/exemplos-micropython/timers
description: Descubra como os timers periódicos e one-shot da Franzininho WiFi podem controlar e antecipar cenários nos sistemas embarcados. Use-os para piscar LEDs, ler sensores etc.
author: Sthefania Fernandes
---

## Introdução

Em sistemas embarcados, a capacidade de controlar e antecipar uma variedade de cenários é essencial. Nesse contexto, os temporizadores desempenham um papel fundamental, por oferecerem controle preciso sobre o tempo e a ordem de eventos em diversas aplicações.

Neste artigo, abordaremos o controle de dois tipos distintos de temporizadores, o timer periódico e o timer one-shot.

## Timer periódico

O temporizador periódico é um recurso utilizado para gerar interrupções ou eventos em intervalos pré-definidos de tempo. Seu funcionamento é simples, o temporizador irá iniciar sua contagem de 0 até o valor definido e, quando atinge o valor do período configurado, ele gera uma interrupção ou dispara um evento. Após a interrupção ele reinicia automaticamente.

Este timer pode ser utilizado para piscar LEDs, leitura de sensores, aquisição de dados, dentre outras aplicações.

## Timer one-shot

O temporizador one-shot é um recurso utilizado para gerar uma única interrupção em um intervalo pré-definido de tempo. Diferente do timer periódico, este irá disparar apenas uma vez e, em seguida, parar até que seja reiniciado no código.

Este timer pode ser utilizado no debouncing de botões, atrasos programados, temporizar tarefas únicas, dentre outras aplicações.

## Recursos necessários

Para iniciar o trabalho com os GPIOs, é essencial possuir o diagrama de pinos da placa à disposição, pois isso vai permitir que você identifique tanto os nomes quanto as funções associadas a cada um deles.

| Pino | Recurso      |
|------|--------------|
| IO1  | LDR          |
| IO2  | BT6          |
| IO3  | BT5          |
| IO4  | BT4          |
| IO5  | BT3          |
| IO6  | BT2          |
| IO7  | BT1          |
| IO8  | OLED_SDA     |
| IO9  | OLED_SCL     |
| IO10 | TFT_DC       |
| IO11 | TFT_RES      |
| IO12 | LED AZUL     |
| IO13 | LED VERDE    |
| IO14 | LED VERMELHO |
| IO15 | DHT11        |
| IO17 | BUZZER       |
| IO35 | TFT_SDA      |
| IO36 | TFT_SCL      |

Tabela 1 – Franzininho WiFi Lab01 mapeamento de pinos

## Código

### Blink LED com Timer Periódico

Com a Franzininho WiFi conectada ao seu computador, abra o Thonny e crie um novo arquivo contendo o código a seguir:
```python
from machine import Pin, Timer
import utime

ledR= Pin(14,Pin.OUT) #definindo o pino 14 (LED vermelho) como saída
temporizador = Timer(0) #definindo timer

ledState = False

def toogleLed ():
    global ledState
    ledState = not ledState
    ledR.value(ledState)

def tempo (timer): #definindo função callback
    global ledR
    toogleLed() # muda estado do led

temporizador.init(period = 1000, mode = Timer.PERIODIC, callback = tempo) 
#configurando timer com frequência de 1Hz e no modo periódico
```

Vamos começar com `from machine import Pin, Timer`. Para poder ser acessado os pinos da placa e trabalhar com os timers. O timer foi configurado utilizando a variável `temporizador`, e o LED selecionado foi o de cor vermelha, que está conectado ao pino 14 da Franzininho WiFi (como verificado na tabela de pinagem).

Para configurar o timer é preciso chamar a função `init` e preencher alguns parâmetros:

1.  **period**: esse parâmetro define o tempo que levará para o temporizador atingir zero e gerar uma interrupção. Vamos definir como 1000 (1Hz), isso fará com que o temporizador dure 1 segundo.
2.  **mode**: esse parâmetro define o modo de funcionamento do temporizador e pode ter um dos seguintes valores:
    1.  `Timer.PERIODIC` – modo que usaremos neste exemplo
    2.  `Timer.ONE_SHOT`
3.  **callback**: esse parâmetro permite especificar a função de callback que será executada quando o temporizador atingir zero. Essa função de callback é chamada como uma interrupção, então ela deve ser projetada para ser curta e eficiente. A função de callback é “`tempo`”.

A função de callback, chamada de tempo, será chamada a cada segundo, pois essa foi a duração definida para o temporizador. Seu papel é alterar o status do LED vermelho.

Para controlar o estado do LED vermelho foi criada a função `toogle_led`. Inicialmente, a variável `led_state`, que define o estado no LED (on ou off), é definida como `false` e, a cada vez que a função `toggle_led` é chamada, ela inverte o estado atual. A função é usada dentro da função callback `tempo`, isso fará com que a cada segundo o LED vermelho seja alternado entre ligado e desligado. Assim, temos um blink LED.

Note que dentro das funções as variáveis são alteradas para `global`, isso é feito para garantir que as modificações feitas dentro das funções alterem o valor das variáveis fora delas.

### Desativar LED utilizando timer one-shot

Com a Franzininho WiFi conectada ao seu computador, abra o Thonny e crie um novo arquivo contendo o código a seguir:
```python
from machine import Pin, Timer

ledR= Pin(14,Pin.OUT) #definindo o pino 14 (LED vermelho) como saída
temporizador = Timer(0)

def desliga (timer): #definindo função callback
    global ledR
    ledR.off()
    print("led desligado")

print("Iniciando o timer")
temporizador.init(period = 3000, mode = Timer.ONE_SHOT, callback = desliga)
ledR.on()
```

Vamos começar com `from machine import Pin, Timer`. Para poder ser acessado os pinos da placa e trabalhar com os timers. O timer foi configurado utilizando a variável `temporizador`, e o LED selecionado foi o de cor vermelha, que está conectado ao pino 14 da Franzininho WiFi (como verificado na tabela de pinagem).

Para configurar o novo timer foi preciso alterar os seguintes parâmetros:

1.  **period**: vamos definir como 3000 (3Hz), isso fará com que o temporizador dure 3 segundos.
2.  **mode**: `Timer.ONE_SHOT`
3.  **callback**: a função de callback é “`desliga`”.

A função de callback, chamada de desliga, será chamada uma vez após passados 3 segundos, pois essa foi a duração definida para o temporizador. Sua finalidade é desativar o LED vermelho, que inicialmente está ligado.

Nesse caso, diferente do timer periódico, o LED irá desligar após o tempo definido e somente será aceso outra vez se a função `temporizador.init` for chamada novamente.

| Autor | Sthefania Fernandes|
|-------|--------------|
| Data: | 15/12/2023    |