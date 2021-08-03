---
id: picsimlab-intro
title: Franzininho DIY no PICSimLab
slug: /franzininho-diy/picsimlab/primeiros-passos
description: Nesse exemplos vamos ver como usar o PICSimLab para simular e depurar a Franzininho DIY
---

PICSimLab é um emulador em tempo real de placas de desenvolvimento com depurador MPLABX/avr-gdb integrado. O PICSimLab suporta alguns microcontroladores PIC e AVR (outros em breve). 

:::tip
Faça o Download do PICSimLab: https://github.com/lcgamboa/picsimlab/releases
::: 

A placa Franzininho DIY está disponível para simulação no PICSimLab,

Veja no video abaixo os passos para gravação e depuração da Franzininho DIY no PICSimLab:

<iframe width="100%" height="480" src="https://www.youtube.com/embed/OemWGwXNxE4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Timeline do video

- 00:00 Introdução
- 02:23 Arduino IDE (gravação)
- 05:45 Arduino IDE tinyDebug (mensagens pela serial virtual)
- 11:20 Sloeber IDE (eclipse) (gravação/depuração)
- 27:55 avr gcc e gdb no terminal (gravação/depuração) 
- 37:52 MPLABX IDE (gravação/depuração)

## Links
- Adicionar suporte da placa Franzininho na IDE Arduino (e Sloeber): https://raw.githubusercontent.com/lcgamboa/franzininho-arduino-package/master/package_franzininho_lcgamboa_index.json
- Exemplos AVR libc: https://github.com/Franzininho/exemplos-avr-libc
- Donwload do Sloeber IDE (Eclipse): https://eclipse.baeyens.it/

## Observação
- Para instalar o suporte ao GDB instalar o suporte ao "arduino megaAVR boards" no Sloeber (passo que deu errado no vídeo)
- O caminho do GDB dentro da pasta do Sloeber: **Sloeber/arduinoPlugin/packages/arduino/tools/avr-gcc/7.3.0-atmel3.6.1-arduino5/bin/avr-gdb**

## Downloads

Download do PICSimLab: https://github.com/lcgamboa/picsimlab/releases
Download do MPLABX: https://www.microchip.com/en-us/development-tools-tools-and-software/mplab-x-ide
Download do XC8:https://www.microchip.com/en-us/development-tools-tools-and-software/mplab-xc-compilers
