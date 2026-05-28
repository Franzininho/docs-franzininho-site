---
id: circuitpython-primeiros-passos
title: Getting Started
slug: /franzininho-wifi/exemplos-circuitpython/primeiros-passos
description: Learn the first steps for using CircuitPython on the Franzininho WiFi
author: Diana Santos
---

This document is intended to help you configure the Franzininho WiFi board to be programmed using CircuitPython.

CircuitPython is a fork of the MicroPython project, created by the company Adafruit. Adafruit has been developing various libraries and resources for programming microcontrollers with Python. Learn more about the project at: [CircuitPython](https://circuitpython.org/).

Below are the steps for flashing CircuitPython onto the Franzininho WiFi and preparing the environment.

## What is CircuitPython?

CircuitPython is a programming language designed to simplify experimentation and learning of programming on low-cost microcontroller boards. This makes getting started easier than ever, without the need for any initial downloads on your computer. Once the board is configured, open any text editor and start editing the code.

CircuitPython brings Python to microcontrollers. You can learn more about the CircuitPython project here: [learn.adafruit.com/circuitpython](http://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython)

The Franzininho WiFi was [added to CircuitPython](https://circuitpython.org/downloads?q=franzininho) and all CircuitPython releases will be compiled for it. This was a very important step for the project and will enable development of applications with the ESP32-S2 using the Python language.

## Installation

Before starting the fun of programming the Franzininho WiFi with CircuitPython, we need to perform some configuration steps. In this step we will flash the CircuitPython firmware onto the Franzininho WiFi and prepare the environment for you to use your board.

:::info
If your board already has CircuitPython, you do not need to do this step. To check whether your board has CircuitPython, plug it into the computer and see if a storage device called CIRCUITPY is created. If not, follow the procedure below.
:::

At this point you will only need a computer with the operating system you are used to and the Franzininho WiFi board.

Let's get started!

## Flashing CircuitPython onto the Franzininho WiFi

<iframe width="809" height="455" src="https://www.youtube.com/embed/wU7wvfxmcS0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Flashing tool: [https://franzininho.github.io/webdfu-franzininho-wifi/dfu-util/](https://franzininho.github.io/webdfu-franzininho-wifi/dfu-util/)

| Author | [Fábio Souza](https://github.com/FBSeletronica) |
|--------|--------------|
| Date:  | 16/09/2021    |
