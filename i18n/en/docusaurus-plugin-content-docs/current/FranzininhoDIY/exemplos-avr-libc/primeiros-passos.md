---
id: primeiros-passos
title: Getting Started
slug: /franzininho-diy/exemplos-avr-libc/primeiros-passos
description: Getting started with Franzininho DIY programming using AVR Libc
---

This material aims to show the first steps for programming microcontrollers using C language with a hardware-oriented approach. A series of examples (with detailed explanations about the ATtiny85 architecture) will be presented for programming the Franzininho DIY using [AVR Libc](https://nongnu.org/avr-libc/).

It is important to have the [Franzininho DIY pinout](https://github.com/Franzininho/imagens-franzininho/blob/main/franzininho_diy/Pinagem-completa-Franzininho-DIY-V2RV2.png) to make the connections as described in the examples.

![Franzininho DIY pinout](img/0x00/Pinagem-Franzininho-DIY-V2RV2.png)

## Required Tools

You will not need a specific compiler or IDE to compile the examples presented. However, it is important to have the following tools installed on your machine:

- GCC AVR
- avr libc
- binutils-avr
- make

### Installing Required Tools (Linux):
```shell
sudo apt install gcc-avr
sudo apt install avr-libc
sudo apt install binutils-avr
sudo apt install make
```

The Franzininho board must have the Micronucleus bootloader (the official bootloader for the Franzininho DIY).

### Linux Compilation

```shell
cd ../exemplos-avr-libc/exemplos/01-hello
make all
```

### Arduino IDE

You can also reproduce all the examples presented directly in the Arduino IDE (without using the Arduino framework). This will make the tool installation and configuration process easier, as well as the upload.

### ![wokwi_logo](img/0x00/wokwi-logo.png) Wokwi

You can also use the [Wokwi Online Simulator](https://wokwi.com/arduino/new?template=franzininho) to reproduce the projects presented in this series.

### PICSimLab

If you don't have internet access or a good connection, another available option to reproduce the examples on your machine is the [PICSimLab](https://github.com/lcgamboa/picsimlab/releases) simulator, which supports the Franzininho DIY.

## Repositories and Support Materials

All examples will be hosted on the [Franzininho project github](https://github.com/Franzininho/exemplos-avr-libc/). It is important that you use the ATtiny85 datasheet as support material, as well as the [AVR Libc](https://nongnu.org/avr-libc/) documentation.

Enjoy this journey.

## Learn More
[Franzininho – An Arduino for everyone](https://www.embarcados.com.br/franzininho/)

| Author | [Fábio Souza](https://github.com/FBSeletronica) |
|--------|-------------|
| Date:  | 24/04/2021  |
