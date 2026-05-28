---
id: franzininho-wifi-dev-edition
title: Franzininho WiFi Dev Edition Board
slug: /franzininho-wifi/franzininho-wifi-dev-edition
description: Details about the Franzininho WiFi Developer Edition
---

:::caution Warning
This board was made as a prototype only. It is not in production.
:::

The Franzininho WiFi Developer Edition is a development board created to evaluate ESP32-S2 modules (Wroom and Wrover) and to develop the next generation of Franzininho boards. The Franzininho project was created to develop skills in electronics and programming through DIY activities and the maker culture in Brazil.

![Franzininho WiFi Developer Edition Front Board](img/placaFranzininhoWiFi.jpeg)

Since there are not many boards on the Brazilian market with ESP32-S2, we developed the Franzininho WiFi Developer Edition (in 2020) to serve as an ESP32-S2 development platform and to help us evaluate and validate applications with this SoC.

![Franzininho WiFi Developer Edition Board](img/front.jpeg)

## Features

- ESP32-S2 module (Wrover or Wroom):
  - Xtensa® single-core 32-bit LX7 microprocessor, up to 240 MHz
  - 128 KB ROM
  - 320 KB SRAM
  - 16 KB SRAM in RTC
  - 2 MB (8 Mbit) PSRAM (Only with Wrover Module)
  - WiFi 802.11 b/g/n
- Interfaces: GPIO, SPI, LCD, UART, I2C, I2S, Camera interface, IR, pulse counter, LED PWM, TWAI (compatible with ISO 11898-1), USB 1.1 OTG, ADC, DAC, touch sensor, temperature sensor.
- USB Type-A Male
- RGB LED (WS2812) (GPIO 18)
- 40 pins broken out to 2x20 2.54mm header pins (36 GPIO) - Breadboard Friendly
- Reset and DFU (BOOT0) buttons to get into the ROM bootloader (which is a USB serial port so you don't need a separate cable!)
- Serial debug pins (TX and RX, for checking the hardware serial debug console)
- JTAG pads for advanced debugging access
- 3.3 V Power On LED
- 3.3 V Regulator
- Power:
  - Micro USB port (default power supply)
  - 5V and GND header pins
  - 3V3 and GND header pins
- Dimensions: 72 mm x 30 mm
- Works with [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s2/get-started/index.html) or [CircuitPython](https://circuitpython.org/)

![Franzininho WiFi Developer Edition Back Board](img/back.jpeg)

## Pinout

![Pinout Franzininho WiFi Developer Edition Board](img/pinagem-franzininho-wifi.png)

## License

This project is open-source hardware and is available under the CERN Open Hardware License.

The Franzininho WiFi Developer Edition board is certified by OSHWA:
[UID BR000006](https://certification.oshwa.org/br000006.html)

![oshwa](img/OSHW_mark_BR000006.png)
