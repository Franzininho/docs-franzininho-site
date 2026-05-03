---
id: laboratorio-sistemas-iot
title: Embedded Systems and IoT Lab Board
slug: LaboratorioSistemasIot
description: The Embedded Systems and IoT Lab board is a PCB designed for teaching microcontroller programming, featuring a wide range of integrated peripherals for use with the Franzininho WiFi.
---

![Embedded Systems and IoT Lab Board](img/3d-lab.png)

The _Embedded Systems and IoT Lab_ board is a printed circuit board designed for teaching microcontroller programming. It includes a variety of peripherals that allow exploration of concepts related to microcontrolled boards. Peripheral connections are built into the board — activation is handled through jumper pins associated with each component.

This board was designed to be used with the Franzininho WiFi. Pin headers are provided for easy connection. However, it can also be used with other microcontrolled boards, such as the Arduino Uno, through an adapter.

In addition to the standard peripherals, the board includes extra connectors that allow the Franzininho WiFi's I/O ports to be used for external connections when the built-in peripherals are not sufficient.

[Access the PCB project on GitHub](https://github.com/Franzininho/laboratorio-SEIoT-Franzininho-Wifi)

## Available peripherals

- 4 diffused color LEDs
- 4 tactile switches 6×6 mm
- 1 4×4 matrix keypad (made of 6×6 mm tactile switches)
- 1 addressable RGB LED 5050
- 1 DHT11 sensor
- 1 common cathode 7-segment display
- 1 LDR 5 mm light sensor
- 1 joystick (thumb joystick)
- 1 common cathode RGB LED
- 1 potentiometer
- 1 piezo buzzer
- 1 OLED display 128×64 pixels
- 2 female 4-pin connectors for external sensors
- 2 Grove connectors for external sensors
- 1 NPN transistor

## Activating peripherals

Activation pins are pairs of male pins located in the traces between a component pin and the socket where that component connects to the microcontrolled board. To activate a peripheral, bridge the two male pins with a jumper, completing the circuit.

These pins use a hexadecimal-based coding system printed next to each activation pin. The first digit indicates the pin function and the second indicates its number. The table below shows the function codes:

| Letter | Meaning |
| :---: | :---: |
| 0 | GND |
| 3 | 3.3 V power |
| 5 | 5 V power |
| A | Pins connected to analog ports |
| B | Pins connected to the same ports as A |
| C | Special pins |
| D | Pins connected to digital ports |
| E | Pins connected to the same ports as D |

Because of this coding, activation pin numbers do not directly correspond to Franzininho WiFi pin numbers. The mapping between activation pins and Franzininho WiFi pins is printed on the PCB itself.

You can also use the `laboratorioFW` library, which maps Franzininho WiFi pins to activation pin codes, making the board even easier to use.

## Peripherals and activation pins

![Numbered lab board](img/lab-numerado.png)

| Peripheral | Activation Pins | Image code |
| :---: | :---: | :---: |
| Diffused LEDs | A0, A1, A2, A3 (depending on the chosen LED) | 1 |
| Buttons | A4 and 31, A5 and 32, A6 and 33, A7 and 34 (depending on the chosen button) | 7 |
| Buzzer | E2 | 6 |
| RGB LED | AC, AB, AA, 00 | 12 |
| Potentiometer | B8, 35 | 5 |
| Light sensor | A8, 36 | 10 |
| DHT11 temperature and humidity sensor | A9, 51 | 14 |
| 7-segment display | D0, D1, D2, D3, D4, D5, D6, D7, 01 | 8 |
| NPN transistor | E9 | 9 |
| OLED display | C0, C1, 30 | 2 |
| Matrix keypad | DA, DB, DC, DD, E6, E4, E3 | 3 |
| Servo motor connector | B5, 54, 02 | 11 |
| Addressable RGB LED | D9, 37 | 13 |
| Joystick module | D8, B1, B0, 38 | 4 |
| Female 4-pin connectors | (BA, BB, 3A) or (B3, B2, 54) depending on connector | 17 and 15 |
| Grove connectors | (B7, 39) or (52, B6) depending on connector | 16 and 18 |

:::info Note
The _Embedded Systems and IoT Lab_ board was developed as the final graduation project of [Letícia Pegoraro Garcez](https://github.com/LelePG).
:::
