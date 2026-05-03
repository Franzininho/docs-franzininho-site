---
id: franzininho-wifi
title: Franzininho WiFi Board
slug: /franzininho-wifi/franzininho-wifi
description: Learn about all the features of the Brazilian Franzininho WiFi board. Based on the ESP32-S2, it supports beginners and experienced developers with Arduino, MicroPython, CircuitPython, ESP-IDF, and more.
---

The Franzininho WiFi is an open hardware development board created in Brazil, based on the ESP32-S2 module. Its goal is to make WiFi-connected electronics projects more accessible to makers, students, and developers.

The board supports multiple programming environments — from visual blocks to native C — making it suitable for both beginners and experienced professionals.

[Buy your Franzininho WiFi](https://www.robocore.net/wifi/franzininho-wifi)

![Franzininho WiFi board](img/franzininho-wifi-new.jpg)

## Features

The Franzininho WiFi includes the following features:

- **ESP32-S2 Module**
  - Xtensa® single-core 32-bit LX7 microcontroller, up to 240 MHz
  - 128 KB ROM, 320 KB SRAM, 16 KB RTC SRAM, 4 MB Flash
  - WiFi 802.11 b/g/n (no Bluetooth)
  - Interfaces: GPIO, SPI, LCD, UART, I2C, I2S, camera, IR, pulse counter, LED PWM, TWAI (CAN), USB 1.1 OTG, ADC, DAC, touch, internal temperature sensor
- **Pinout**
  - 40 pins in 2×20 headers, 2.54 mm pitch
  - 35 GPIOs
  - Breadboard-compatible
- 2 general-purpose LEDs
- Buttons: 1× Reset, 1× Boot
- USB: Micro USB connector — OTG 1.1 (no external USB-Serial chip)
- **Power**
  - 5 V via USB connector
  - 5 V and GND via pins
  - 3.3 V and GND via pins

## Pinout

![Franzininho WiFi Pinout](https://raw.githubusercontent.com/Franzininho/imagens-franzininho/main/franzininho-wifi/pinagem-franzininho-wifi.png)

## Programming environments

The Franzininho WiFi can be programmed with the following environments and frameworks:

| Environment | Level | Documentation |
| --- | --- | --- |
| Arduino | Beginner / Intermediate | [Arduino Examples](/docs/franzininho-wifi/exemplos-arduino/pisca-led) |
| CircuitPython | Beginner / Intermediate | [CircuitPython Examples](/docs/franzininho-wifi/exemplos-circuitpython/primeiros-passos) |
| MicroPython | Beginner / Intermediate | [MicroPython Examples](/docs/franzininho-wifi/exemplos-micropython/primeiros-passos) |
| ESP-IDF | Advanced | [ESP-IDF Examples](/docs/franzininho-wifi/exemplos-espidf/primeiros-passos) |
| Zephyr RTOS | Advanced | [Official documentation](https://docs.zephyrproject.org/) |
| NuttX RTOS | Advanced | [Official documentation](https://nuttx.apache.org/docs/latest/) |

> **Note:** The ESP32-S2 does not have Bluetooth. If your project requires Bluetooth, consider using a board based on the ESP32 or ESP32-S3.

## Simulation on Wokwi

[Wokwi](https://wokwi.com/) is a free online electronics simulator that supports the Franzininho WiFi. You can test projects without the physical board, with WiFi simulation, a virtual logic analyzer, and GDB debugging support.

![Franzininho WiFi on Wokwi](img/image-8.png.webp)

- [Open a new project on Wokwi](https://wokwi.com/projects/new/franzininho-wifi)
- [Getting started with Wokwi](/docs/franzininho-wifi/wokwi/primeiros-passos)
- [Wokwi documentation](https://docs.wokwi.com/pt-BR/)

## Fritzing component

[Fritzing](https://fritzing.org/) is an open-source tool for documenting electronic circuits. We provide a Franzininho WiFi component to make it easier to create wiring diagrams for your projects.

![Franzininho WiFi Fritzing component](img/image-9.png.webp)

[Download Fritzing component](https://github.com/Franzininho/franzininho-fritzing/tree/master/Franzininho-WiFi)

## License

The Franzininho WiFi is an open hardware project, licensed under the **CERN Open Hardware License**. The hardware project is available on GitHub:

[github.com/Franzininho/Franzininho-WiFi](https://github.com/Franzininho/Franzininho-WiFi)
