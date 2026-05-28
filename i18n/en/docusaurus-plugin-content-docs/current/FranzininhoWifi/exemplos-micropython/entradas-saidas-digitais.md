---
id: micropython-entradas-saidas-digitais
title: Digital Inputs and Outputs
slug: /franzininho-wifi/exemplos-micropython/entradas-saidas-digitais
description: Explore the digital inputs and outputs of the Franzininho WiFi with MicroPython. Control LEDs and buttons on the Franzininho WiFi LAB01.
author: Sthefania Fernandes
---

## Introduction

The Franzininho WiFi has pins that can operate in two modes: OUTPUT and INPUT. In addition, it is possible to use internal resistors on the pins configured as Pull-Up or Pull-Down for pins configured as inputs.

In this article, we will explore how to use MicroPython to control the I/O pins.

To do this, we will create code to manipulate the LEDs and buttons on the Franzininho WiFi LAB01 board, allowing the creation of custom and interactive features.

## Required Resources

To start working with GPIOs, it is essential to have the Franzininho WiFi LAB01 board pinout available, as it will allow you to identify both the names and functions associated with each pin.

Table 1 – Franzininho WiFi LAB01 pin mapping

| Pin  | Resource     |
|------|--------------|
| IO1  | LDR          |
| IO2  | BT6          |
| IO3  | BT5          |
| IO4  | BT4          |
| IO5  | BT3          |
| IO6  | BT2          |
| IO7  | BT1          |
| IO8  | OLED_SDA     |
| IO9  | OLED_SCL     |
| IO10 | TFT_DC       |
| IO11 | TFT_RES      |
| IO12 | BLUE LED     |
| IO13 | GREEN LED    |
| IO14 | RED LED      |
| IO15 | DHT11        |
| IO17 | BUZZER       |
| IO35 | TFT_SDA      |
| IO36 | TFT_SCL      |

In this exercise we will use the RGB LED and buttons of the [Franzininho WiFi LAB01](https://docs.franzininho.com.br/docs/franzininho-wifi-lab01), as highlighted in the figure below:

Figure 1 – Summary of board resources
![digital inputs and outputs of the Franzininho WiFi with MicroPython](img/entradas-saidas-digitais/1.png)

### MicroPython Modules

The [machine](https://docs.micropython.org/en/latest/library/machine.html) module contains specific functions related to the hardware of a particular board. Most functions in this module allow direct and unrestricted access to hardware blocks in a system, such as: pins, I2C, UART, SPI, ADC.

In MicroPython, as in Python, it is possible to import only part of a library instead of the entire library — a useful feature we will use frequently.

The **'utime'** library is a version of the 'time' library designed for microcontrollers. This library is useful for inserting the delays needed in many projects.

**Note:** If you forget and use `import time`, don't worry: MicroPython will automatically use the `utime` library in its place.

## Code

With the Franzininho WiFi connected to your computer, open Thonny and create a new file containing the following code:

To create the program that controls the RGB LED, we start with the statement `from machine import Pin`. This instructs MicroPython to import only the `Pin` function from the `machine` library, instead of importing the entire library. This way, we have access only to the functionality needed to control the board pins.

It is important to note that MicroPython is case-sensitive, which means that if you type `pin` the library will not be recognized — so pay attention to uppercase and lowercase letters.

Next, we name the LEDs and associate them with the board pins as output (`Pin.OUT`). Consulting the Franzininho WiFi LAB01 pin table, we identify that pin 12 is responsible for the blue color of the RGB LED, pin 13 for green, and pin 14 for red. With this, we assign all pins as outputs.

Similarly, we do the same with the buttons. Consulting the pin table, we identify that pin 7 corresponds to button 1, pin 6 to button 2, and pin 5 to button 3. It is important to remember that these devices operate with a pull-up configuration, and this information must be included in the program.

Finally, the main loop constantly monitors the state of the buttons to determine whether the LED should be on. There is a small 100-millisecond pause between each LED update in response to the button states. These delays are used to prevent button reading and LED changes from happening too quickly and being hard to notice.

If you don't have the Franzininho WiFi LAB01 to test the project, you can test the program using a circuit assembly on a breadboard.

Press the keys and verify that the LEDs light up according to the key pressed:

![Functioning](img/entradas-saidas-digitais/2.gif)

## Conclusion

In this article, we explained the basic operation of the Franzininho WiFi I/O pins using the Franzininho WiFi LAB01 application board. We explored the essential libraries and functions that allow us to configure these pins and access their logical states.

We encourage you to continue developing your programming and electronics skills, adapting the code and creating more complex projects. This will allow you to explore the full potential of the Franzininho WiFi LAB01 with MicroPython.

| Author | Sthefania Fernandes |
|--------|--------------|
| Date:  | 17/11/2023    |
