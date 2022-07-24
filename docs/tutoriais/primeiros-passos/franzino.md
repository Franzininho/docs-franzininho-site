---
id: franzino
title: Primeiros passos com a Franzino
slug: tutoriais/primeiros-passos/franzino
description: Primeiros passos com a placa Franzino
---

Para fazer upload de códigos para a Franzino, primeiro é necessário ligar o conversor USB/Serial a placa, como exibido na figura abaixo:

![ligação Conversor USB/Seril](../../hardware/img/franzino-ligacao_conversor.jpg)

Selecione na IDE do Arduino a Placa Arduino UNO. Também selecione a porta seria que foi criada ao ser inserido o conversor USB/SERIAL no computador:

![configuração da IDE Arduino](img/franzino/congfigura-ide.png)

Pronto, agora é só fazer o upload dos seus códigos para a placa Franzino

Se você não possui um conversor USB/Serial você pode gravar a Franzino através de um Arduino. Para isso vamos configurar a placa Arduino UNO com programador.

Primeiro, escolha o exemplo ArduinoISP, conforme figura abaixo:

![](img/franzino/exemplo-arduinoisp.png)

Faça o upload para a placa Arduino UNO que será usada como programador.

Feito o UPLOAD, agora vamos as conexões do Arduino UNO na Franzino:

- Ligue o pino RESET da FRANZINO ao pino 10 do Arduino
- Ligue o pino 11 da FRANZINO ao pino 11 do Arduino
- Ligue o pino 12 da FRANZINO ao pino 12 do Arduino
- Ligue o pino 13 da FRANZINO ao pino 13 do Arduino
- Ligue o pino 5V da FRANZINO no pino 5V do Arduino
- Ligue o pino GND da FRANZINO ao GND do Arduino

![Ligação_arduino_franzino.png](img/franzino/franzino-uno.png)

## Configurando o avrdude ( se estiver usando o ATmega328 e não o ATmega328P)

A versão 0 da Franzino vem com o ATmega328-PU, dessa forma precisamos configurar o avrdude para gravar esse microcontrolador. Na pasta do arduino acesse:

C:\arduino-1.6.8\hardware\tools\avr\etc, abra o arquivo avrdude.conf

Procure a assinatura do ATMEGA328P:

![](img/franzino/assinatura-328.png)

Troque a assinatura por:

![](img/franzino/assinatura-328-atualizada.png)

Salve o arquivo.

:::tip
Após a gravação, volte a assinatura para o valor original: signature= 0x1e 0x95 0x0F;
:::

## Upload de Sketchs usando a Arduino UNO

Pronto, agora abra o programa que será gravado na Franzino. Para esse exemplo vamos usar o exemplo Blink, mas você poderá fazer esse procedimento para gravar suas aplicações;

![](img/franzino/exemplo-blink.png)

Agora vamos preparar para gravação. Configure o Programador como ArduinoISP:

![](img/franzino/arduinoisp.png)

Pronto, agora é só fazer o UPLOAD para a Franzino:

![](img/franzino/upload-isp.png)
