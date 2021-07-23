---
id: exemplos-avr-libc
title: Primeiros Passos
slug: /franzininho-diy/exemplos-avr-libc/exemplos-avr-libc
description: Primeiros passos para programação da Franzininho DIY usando usando a AVR Libc
---

Esse material tem o objetivo de mostrar os primeiros passos para programação de microcontroladores usando linguagem C e com abordagem mais próxima ao hardware. Serão apresentados uma série de exemplos (com explicação detalhadas sobre a Arquitetura do ATtiny85) para programação da Franzininho DIY usando a [AVR Libc](https://nongnu.org/avr-libc/).

É importante que você tenha o [pinout da Franzininho DIY](https://github.com/Franzininho/imagens-franzininho/blob/main/franzininho_diy/Pinagem-completa-Franzininho-DIY-V2RV2.png) para fazer as ligações conforme orientações nos exemplos.

![pinout Franzininho DIY](img/0x00/Pinagem-Franzininho-DIY-V2RV2.png)

## Ferramentas necessárias

Você não precisará de um compilador específico ou IDE para compilar os exemplos apresentados. Porém é importante que tenha as seguintes ferramentas instaladas na sua máquina:

- GCC AVR
- avr libc
- binutils-avr
- make

### Instalação das ferramentas necessárias (Linux):
```shell
sudo apt install gcc-avr
sudo apt install avr-libc
sudo apt install binutils-avr
sudo apt install make
```

A placa Franzininho deve estar com o bootloader Micronucleus( bootloader oficial para a Franzininho DIY).

### Compilação no Linux

```shell
cd ../exemplos-avr-libc/exemplos/01-hello
make all
```

### Arduino IDE

Você também poderá reproduzir todos os exemplos apresentados diretamente na IDE Arduino (sem usar o framework Arduino). Isso facilitará no processo de instalação e configuração das ferramentas e também no upload.

### ![wokwi_logo](img/0x00/wokwi-logo.png) Wokwi

Você também pode usar o [Simulador Online do Wokwi](https://wokwi.com/arduino/new?template=franzininho) para reproduzir os projetos apresentados nessa série.

### PICSimLab

Caso não tenha acesso a Internet ou uma boa conexão, uma outra opção disponível para reproduzir os exemplos na sua máquina é o simulador [PICSimLab](https://github.com/lcgamboa/picsimlab/releases) que possuí suporte ao Franzininho DIY.

## Repositórios e materiais de apoio

Todos os exemplos serão hospedados no [github do projeto Franzininho](https://github.com/Franzininho/exemplos-avr-libc/). É importante que você use o datasheet do Attiny85 como material de apoio, assim como a documentação da [AVR Libc](https://nongnu.org/avr-libc/)

Aproveite essa jornada.

## Saiba mais
[Franzininho – Um Arduino para todos](https://www.embarcados.com.br/franzininho/)

| Autor | [Fábio Souza](https://github.com/FBSeletronica) |
|-------|-------------|
| Data: | 24/04/2021  |
