---
id: micropython-timers
title: Timers
slug: /franzininho-wifi/exemplos-micropython/timers
description: Discover how periodic and one-shot timers on the Franzininho WiFi can control and anticipate scenarios in embedded systems. Use them to blink LEDs, read sensors, etc.
author: Sthefania Fernandes
---

## Introduction

In embedded systems, the ability to control and anticipate a variety of scenarios is essential. In this context, timers play a fundamental role by offering precise control over the timing and order of events in various applications.

In this article, we will cover the control of two distinct types of timers: the periodic timer and the one-shot timer.

## Periodic Timer

The periodic timer is a resource used to generate interrupts or events at pre-defined time intervals. Its operation is simple: the timer starts counting from 0 up to the defined value, and when it reaches the configured period value, it generates an interrupt or triggers an event. After the interrupt, it restarts automatically.

This timer can be used to blink LEDs, read sensors, acquire data, among other applications.

## One-Shot Timer

The one-shot timer is a resource used to generate a single interrupt at a pre-defined time interval. Unlike the periodic timer, it fires only once and then stops until it is restarted in the code.

This timer can be used for button debouncing, scheduled delays, timing single tasks, among other applications.

## Required Resources

To start working with GPIOs, it is essential to have the board pinout available, as this will allow you to identify both the names and functions associated with each pin.

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

Table 1 – Franzininho WiFi Lab01 pin mapping

## Code

### LED Blink with Periodic Timer

With the Franzininho WiFi connected to your computer, open Thonny and create a new file containing the following code:
```python
from machine import Pin, Timer
import utime

ledR = Pin(14, Pin.OUT)  # defining pin 14 (red LED) as output
timer = Timer(0)  # defining timer

ledState = False

def toggleLed():
    global ledState
    ledState = not ledState
    ledR.value(ledState)

def tick(timer):  # defining callback function
    global ledR
    toggleLed()  # changes led state

timer.init(period=1000, mode=Timer.PERIODIC, callback=tick)
# configuring timer with 1Hz frequency in periodic mode
```

We start with `from machine import Pin, Timer` to be able to access the board pins and work with timers. The timer was configured using the `timer` variable, and the selected LED is the red one, connected to pin 14 of the Franzininho WiFi (as seen in the pinout table).

To configure the timer, we need to call the `init` function and fill in some parameters:

1. **period:** this parameter defines the time it will take for the timer to reach zero and generate an interrupt. We set it to 1000 (1Hz), which will make the timer last 1 second.
2. **mode:** this parameter defines the operating mode of the timer and can have one of the following values:
   1. `Timer.PERIODIC` — the mode we will use in this example
   2. `Timer.ONE_SHOT`
3. **callback:** this parameter allows specifying the callback function that will be executed when the timer reaches zero. This callback function is called as an interrupt, so it should be designed to be short and efficient. The callback function is `tick`.

The callback function, called tick, will be called every second, since that is the duration defined for the timer. Its role is to toggle the state of the red LED.

To control the state of the red LED, the `toggleLed` function was created. Initially, the variable `ledState`, which defines the LED state (on or off), is set to `False`, and each time `toggleLed` is called, it inverts the current state. The function is used inside the `tick` callback function, which will cause the red LED to alternate between on and off every second. This gives us a blinking LED.

Note that inside the functions the variables are set to `global`. This is done to ensure that the changes made inside the functions change the value of the variables outside them.

### Turning off LED using one-shot timer

With the Franzininho WiFi connected to your computer, open Thonny and create a new file containing the following code:
```python
from machine import Pin, Timer

ledR = Pin(14, Pin.OUT)  # defining pin 14 (red LED) as output
timer = Timer(0)

def turn_off(timer):  # defining callback function
    global ledR
    ledR.off()
    print("led turned off")

print("Starting the timer")
timer.init(period=3000, mode=Timer.ONE_SHOT, callback=turn_off)
ledR.on()
```

We start with `from machine import Pin, Timer` to be able to access the board pins and work with timers. The timer was configured using the `timer` variable, and the selected LED is the red one, connected to pin 14 of the Franzininho WiFi (as seen in the pinout table).

To configure the new timer, we need to change the following parameters:

1. **period:** we set it to 3000 (3Hz), which will make the timer last 3 seconds.
2. **mode:** `Timer.ONE_SHOT`
3. **callback:** the callback function is `turn_off`.

The callback function, called turn_off, will be called once after 3 seconds have passed, since that is the duration defined for the timer. Its purpose is to deactivate the red LED, which is initially on.

In this case, unlike the periodic timer, the LED will turn off after the defined time and will only turn on again if the `timer.init` function is called again.

| Author | Sthefania Fernandes |
|--------|--------------|
| Date:  | 15/12/2023    |
