---
id: 0x01_hello
title: 01 - Hello, World!
slug: /franzininho-diy/exemplos-avr-libc/0x01_hello
description: Nesse primeiros exemplo vamos dar os primeiros passos na programação da Franzininho DIY
authors: Fábio Souza
date: 24/04/2021
some_url: https://github.com/FBSeletronica
---

Nesse exemplo vamos dar os nossos primeiros passos na programação da Franzininho DIY usando a [AVR Libc](https://nongnu.org/avr-libc/).

Como de costume o nosso "Hello, World!" na eletrônica será um blink LED. Ao final desse experimento você terá uma estrutura mínima para desenvolver aplicações para o ATtiny85 em C.

Bora, colocar em prática!

## Recursos Necessários

- Placa Franzininho DIY(com Micronucleus)
- Computador com as ferramentas de software instaladas(link)

## Hello, World em linguagem C

Esse exemplo básico nos dará estrutura para todos nossos exemplos daqui pra frente. Como já mencionado, vamos usar a linguagem C em conjunto com a biblioteca AVR Libc. Para esse exemplo você só precisará da placa Franzininho DIY e as ferramentas de softwares.

O código exibe a estrutura mínima de um programa em linguagem C para microcontroladores. Se você tem dificuldades com a linguagem C, recomendo que confira os seguintes materiais:
- [Playlist Linguagem C](https://www.youtube.com/watch?v=l9ZdS8kph0A&list=PLqY1DITQ0sB_5yUBqhnm37J5PxsjrVPKT)
- [Slideshare](https://www.slideshare.net/FabioSouza9/resumo-linguagem-c-para-microcontroladores-pic-usando-mikroc)

Nesse momento é importante que você se atente a estrutura do código. Vamos usar alguns registradores para acionar o LED, mas não serão o foco da explicação. Confira os comentários no código a seguir:


### Código

```c
#include <avr/io.h>            // Biblioteca para acesso aos registradores do MCU
#include <util/delay.h>        // Biblioteca para funções de delay

#define F_CPU 16500000L        // Frequencia de clock que o mcu está trabalhando

/**
  Essa é a função principal onde é iniciada aplicação
*/
int main(void)
{
    DDRB |= (1 << PB1);        // Configura Pino PB1 como saída (Pino do LED)

    // O programar ficará nesse loop enquanto a placa estiver ligada
    while (1)
    {
        PORTB |= (1 << PB1);   // Liga LED
        _delay_ms(500);        // Aguarda 500 ms

        PORTB &= ~(1 << PB1);  // Desliga LED
        _delay_ms(500);        // Aguarda 500 ms
    }

    return (0);                // Necessário um retorno (pois a função retorna int) mesmo que a função nunca retornará
}
```

### Compilação e upload

para compilar o programa, acesse a pasta do exemplo e em seguida o comando  ```make```:

```
exemplos-avr-libc/exemplos/hello$ make
```

Já temos o makefile configurado na pasta, assim, será feita a compilação e em seguida aparecerá a mensagem para conectar a placa:

```shell
../../micronucleus/2.0a4/launcher  -cdigispark --timeout 60 -Uflash:w:main.hex:i
Running Digispark Uploader...
Plug in device now... (will timeout in 60 seconds)
> Please plug in the device (will time out in 60 seconds) ...
```

Conecte a placa no PC ou pressione o botão de RESET se ela já estiver conectada.

Será iniciado o upload.

### Resultados

Nesse exemplo o LED irá piscar em intervalos de 500 ms (on) e 500 ms (off).

No próximo exemplo vamos detalhar sobre os registradores de IO. Nesse momento, além da estrutura inicial é importante que você entenda como usar a função ```_delay_ms()```.

Essa função espera o tempo passado em milissegundos.

Altere o código para que o led fique 100 ms(on) e 1000 ms (off), veja o efeito.


## Conclusão

Nesse exemplo tivemos o primeiro contato com a programação em linguagem C para microcontroladores. Notamos que devemos incluir as bibliotecas externas através do ```#include``` e que o programa precisa necessariamente ter a função ```int main(void)```.

Dentro da função main temos um loop infinito onde os comandos se repetirão enquanto a placa estiver ligada.

| Autor | [Fábio Souza](https://github.com/FBSeletronica) |
|-------|-------------|
| Data: | 24/04/2021  |
