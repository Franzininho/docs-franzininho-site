---
id: franzininho-stm32c0
title: Franzininho C0 Board
slug: /franzininho-c0/franzininho-c0-board
description: The Franzininho C0 is an open hardware development board based on the STM32C0 microcontroller (ARM Cortex-M0+) from STMicroelectronics.
---

The Franzininho C0 is an open hardware development board based on the STM32C0 microcontroller — an ARM Cortex-M0+ from STMicroelectronics — created in Brazil. Its main purpose is to serve as a teaching, learning, and prototyping tool for students, makers, enthusiasts, and developers.

With a small breadboard-compatible form factor, it can be programmed using ST's official tools as well as the Arduino IDE.

![Franzininho C0](img/Franzininho_C0.png)

## Hardware features

- Microcontroller:
  - [STM32C011F6P6](https://www.st.com/en/microcontrollers-microprocessors/stm32c011f6.html) — ARM Cortex-M0+ @ 48 MHz
  - Flash: 32 KB
  - RAM: 6 KB
- ADC: 12-bit (13 channels + 2 internal)
- Communication: 1× I2C, 1× SPI, 2× USART
- RTC
- Timers/Counters: 8
- GPIO: 16 — breadboard-compatible
- USB/Serial converter
- Micro USB connector
- Operating voltage: 3.3 V
- Power supply:
  - 5 V via USB connector
  - 5 V and GND via pins
- General-purpose button: 1
- General-purpose LEDs: 2
- Buttons: 1× Reset, 1× Boot
- Breadboard-compatible
- Dimensions: 38.1 mm × 20.32 mm
- License: CERN Open Hardware Licence version 2

### Pinout

![Franzininho C0 Pinout](img/Pinout-Franzininho-C0.png)

### Onboard resource mapping

- Button: PA8
- LED1: PB6
- LED2: PB7
- RX: PA10
- TX: PA11

### Microcontroller pinout

![Franzininho C0 STM32C011F6P6 Pinout](img/pinout-stm32c11f6p6.png)

### Schematic

![Franzininho C0 Schematic](img/Franzininho_C0_Schematic.png)

## License

The Franzininho C0 is an open hardware project licensed under the **CERN Open Hardware Licence version 2**. Before reproducing or creating derivatives, review the license requirements to ensure compliance.

Repository: [Franzininho C0 on OSHWA Lab](https://oshwlab.com/fabiosouza/franzininho-stm32)

## Photos

![Franzininho C0 front and back](img/Franzininho_C0_back.jpg)

![Franzininho C0 on breadboards](img/Franzininho_C0_Protoboards.jpg)
