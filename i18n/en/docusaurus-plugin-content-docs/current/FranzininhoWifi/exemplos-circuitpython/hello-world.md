---
id: circuitpython-hello-world
title: Hello World!
slug: /franzininho-wifi/exemplos-circuitpython/hello-world
description: In this text we will make our Blink - LED blink with the Franzininho WiFi
author: Diana Santos
---

In this first example we will make a blink LED — our "Hello, World!" — with the Franzininho WiFi board programmed in CircuitPython. This warms us up to explore various applications with CircuitPython on the Franzininho WiFi.

## Required Materials
- 1 Franzininho WiFi board with CircuitPython
- 1 Breadboard
- 1 red 3 mm LED
- 1 330 Ω resistor
- Jumper wires

## Circuit
Our first circuit is very simple. Make the following assembly:

![franzininho-wifi-hello-world](img/hello-world/0x00-Hello_world.png)

## Code

Type the code below in the code.py file located in the CIRCUITPY directory and save the file.

Note: You will probably find another code in the code.py file. Delete it and insert the new code.

```python
""" Hello, World! (LED Blink) """
import board
import time
from digitalio import DigitalInOut, Direction

# Configuring the LED pin — the LED I configured is pin 4 = IO4
led = DigitalInOut(board.IO4)
led.direction = Direction.OUTPUT

# infinite loop - always running
while True:    
    led.value = True
    time.sleep(0.5)
    led.value = False
    time.sleep(0.5)
```

After finishing editing the file, save it.
After saving the file, the LED blinks at 0.5-second intervals (LED Blink).

## Code Analysis

To access the board pins we need to import the board module:

```python
import board
```
Since we need timing intervals, we import the time module:

```
import time
```

The LED was connected to pin 4 (IO4) of the Franzininho WiFi. Since the LED is an actuator, we need to configure the pin as a digital output. To do that, we need to import the following modules:

```
from digitalio import DigitalInOut, Direction
```

With the modules imported, we can access the digital pin configuration functions:

```python
led = DigitalInOut(board.IO4)
led.direction = Direction.OUTPUT
```
Note that we first map the pin and then configure the direction.

To make the LED blink infinitely at 500 ms intervals, we create an infinite loop with while. The LED value is inverted every 0.5 s:

```python
while True:    
    led.value = True
    time.sleep(0.5)
    led.value = False
    time.sleep(0.5)
```

:::tip Suggestion
Change the interval time to 0.1 and 1 and observe the effect.
:::

## Conclusion

In this first programming example of the Franzininho WiFi with CircuitPython, we wrote a simple Python code to blink the LED at 0.5-second intervals. This example taught us how to import libraries, configure a pin as a digital output, and create an infinite loop to blink the LED. You can change the time interval by modifying the parameter in the sleep function.

With this example mastered, we can move on to the next step.

| Author | Diana Santos |
|--------|--------------|
| Author | [Fábio Souza](https://github.com/FBSeletronica) |
| Date:  | 16/09/2021    |
