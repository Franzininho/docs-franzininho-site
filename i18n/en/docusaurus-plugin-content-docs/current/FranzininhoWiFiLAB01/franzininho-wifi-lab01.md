---
id: franzininho-wifi-lab01
title: Franzininho WiFi LAB01
slug: /franzininho-wifi-lab01
description: Learn about all the features of the Franzininho WiFi LAB01, a complete platform for teaching and prototyping embedded systems and IoT applications.
---

The **Franzininho WiFi LAB01** is a development platform based on the [Franzininho WiFi](/docs/franzininho-wifi/franzininho-wifi), designed to simplify teaching, experimentation, and rapid prototyping of embedded systems and IoT applications.

With onboard sensors, displays, communication interfaces, and expansion connectors, the LAB01 eliminates the need for external wiring in most experiments — ideal for students, educators, and professionals who want to explore microcontrollers in a practical way.

![Franzininho WiFi LAB01 in use](img/Franzininho-wifi-lab01-app.jpeg)

![Franzininho WiFi LAB01](img/Franzininho-wifi-lab01-desenho.png)

## Features

![LAB01 features overview](img/Franzininho-wifi-lab01-recursos.png)

### Input and interaction

- 6 tactile push buttons
- DHT11 temperature and humidity sensor
- LDR ambient light sensor

### Visual and audio outputs

- RGB LED
- Buzzer

### Compatible displays

- Connector for IPS 240×240 ST7789 display
- Connector for OLED 0.96" SSD1306 display

### Expansion and communication

- 5 I2C ports for external sensors and modules
- 2 UART interfaces
- JTAG for advanced debugging
- 6 alligator clip connectors (touch and digital input)
- Access to all Franzininho WiFi I/Os
- Dedicated 5 V and GND power for external modules
- Jumpers to enable/disable onboard resources and free up pins

## Pin mapping

Pin mapping between the Franzininho WiFi and the LAB01 onboard resources:

| Pin  | Resource     |
| ---- | ------------ |
| IO1  | LDR          |
| IO2  | BT6          |
| IO3  | BT5          |
| IO4  | BT4          |
| IO5  | BT3          |
| IO6  | BT2          |
| IO7  | BT1          |
| IO8  | OLED SDA     |
| IO9  | OLED SCL     |
| IO10 | TFT DC       |
| IO11 | TFT RES      |
| IO12 | Blue LED     |
| IO13 | Green LED    |
| IO14 | Red LED      |
| IO15 | DHT11        |
| IO17 | Buzzer       |
| IO35 | TFT SDA      |
| IO36 | TFT SCL      |

If a pin is occupied by an onboard resource and you need it for another purpose, use the corresponding jumper to disable it.

![Jumpers for resource control](img/Franzininho-wifi-lab01-jumpers.png)

![Available expansion pins](img/Franzininho-wifi-lab01-expansoes.png)

![Example of expansion pins in use](img/Franzininho-wifi-lab01-expansion-pin.jpeg)

## JTAG debugging

The LAB01 includes a JTAG connector compatible with the [ESP-PROG](https://docs.espressif.com/projects/espressif-esp-dev-kits/en/latest/other/esp-prog/user_guide.html), enabling real-time firmware debugging: breakpoints, register and variable inspection, and precise execution tracking.

![LAB01 JTAG connector](img/Franzininho-wifi-lab01-jtag.png)

## Schematic

![Franzininho WiFi LAB01 schematic](img/Franzininho-wifi-lab01-esquematico.png)

## Programming environments

The LAB01 inherits all programming environments supported by the Franzininho WiFi:

| Environment | Level | Examples |
| --- | --- | --- |
| Arduino | Beginner / Intermediate | [GitHub](https://github.com/Franzininho/Franzininho-WiFI-LAB01-Arduino) |
| CircuitPython | Beginner / Intermediate | [GitHub](https://github.com/Franzininho/Franzininho-WiFI-LAB01-CircuitPython) |
| MicroPython | Beginner / Intermediate | [GitHub](https://github.com/Franzininho/Franzininho-WiFI-LAB01-Micropython) |
| ESP-IDF | Advanced | [GitHub](https://github.com/Franzininho/Franzininho-wifi-exemplos-esp-idf) |
| Zephyr RTOS | Advanced | [Official documentation](https://docs.zephyrproject.org/) |
| NuttX RTOS | Advanced | [Official documentation](https://nuttx.apache.org/docs/latest/) |
| BIPES | Beginner | [bipes.net.br](https://bipes.net.br/) |
| Rust | Advanced | — |

## Articles and tutorials

- [Franzininho WiFi – Arduino](https://embarcados.com.br/serie/franzininho-wifi-arduino/)
- [Franzininho WiFi: ESP-IDF](https://embarcados.com.br/serie/franzininho-wifi-esp-idf/)
- [Franzininho WiFi with MicroPython](https://embarcados.com.br/serie/franzininho-wifi-com-micropython/)
- [Franzininho WiFi – CircuitPython](https://embarcados.com.br/serie/franzininho-wifi-circuitpython/)
- [Franzininho WiFi with BIPES](https://embarcados.com.br/serie/franzininho-wifi-com-bipes/)
- [Franzininho WiFi Training](https://embarcados.com.br/treinamento-franzininho-wifi-videos-gravados/)
- [How to program the Franzininho WiFi: 6 options to choose from!](https://embarcados.com.br/como-programar-a-franzininho-wifi/)
- [Automating Embedded Development: GitHub Actions with Franzininho WiFi](https://embarcados.com.br/automatizando-o-desenvolvimento-embarcado-github-actions-com-franzininho-wifi/)
- [OTA Update with Franzininho WiFi](https://embarcados.com.br/atualizacao-ota-com-franzininho-wifi/)
- [Machine Learning on the Franzininho WiFi](https://embarcados.com.br/serie/machine-learning-na-franzininho-wifi/)
- [Programming the Franzininho WiFi with Zephyr RTOS](https://embarcados.com.br/programando-a-franzininho-wifi-com-zephyr-rtos/)
- [Franzininho WiFi: Exploring the LCD display with a custom library](https://embarcados.com.br/franzininho-wifi-display-lcd/)

## Where to buy

The Franzininho WiFi LAB01 is produced in special batches for courses and institutional projects. Contact us to check availability or reserve units for your institution's lab.

Contact: [fabio.souza@embarcados.com.br](mailto:fabio.souza@embarcados.com.br)

## License

The Franzininho WiFi LAB01 is an open source project licensed under the **CERN Open Hardware License**. The board design was created in EasyEDA and is available in the official repository:

[Project on OSHWA Lab](https://oshwlab.com/fabiosouza/shield-franzininho-wifi)
