---
id: circuitpython-touch-capacitivo
title: Capacitive Touch Pins
slug: /franzininho-wifi/exemplos-circuitpython/touch-capacitivo
description: In this example, we will make a proximity "switch" and learn how to use the module responsible for the capacitive touch pins. We will also see how to adjust the sensitivity of this feature.
author: Mateus Adriano Ventura Vieira
---

Capacitance can be basically defined as the ability of a body to store electrical energy. Capacitive touch pins detect the change in capacitance of an element. These pins can be activated by touch, and even by the proximity of a finger.

In this example, we will make a proximity "switch" and learn how to use the module responsible for the capacitive touch pins. We will also see how to adjust the sensitivity of this feature.

## **Required Materials**

- 1 Franzininho WiFi board with CircuitPython
- 1 Breadboard
- 1 LED
- 1 220 Ω or 330 Ω resistor
- Jumper wires

## **Circuit**

Make the following assembly for this project. In place of the capacitive touch "sensor", you can use a jumper wire, a piece of wire, or any other material.

![Circuit](img/touch-capcitivo/circuito-toque-capacitivo.webp)

## **Code**

Implement the code below and test your circuit.
```python
# Capacitive Touch

import board 
import touchio
from digitalio import DigitalInOut, Direction
from time import sleep 

state = 0

pin = board.IO1
touch = touchio.TouchIn(pin)

led = DigitalInOut(board.IO4)
led.direction = Direction.OUTPUT

while True:
    if touch.value:
        state = not state
    
    led.value = state
    sleep(1)
```

After finishing editing the code, save it. Run the program. When you approach or touch the "sensor" you chose, it should work as a switch, turning the LED on and off.

## **Code Analysis**

To access the board pins we must import the **board** module:
```python
import board
```
To use the capacitive touch pins, we will use the **touchio** library:
```python
import touchio
```
And to configure the LED as a digital output, we need to import the **DigitalInOut** and **Direction** functions from the **digitalio** module:
```python
from digitalio import DigitalInOut, Direction
```
Finally, we call the **sleep** function from the **time** module, which we will use for timing intervals:
```python
from time import sleep
```
After importing the necessary libraries, we create a **state** variable that will store the LED state:
```python
state = 0
```
Now, we will configure GPIO1 as a **touch** pin. First, we assign this pin to a variable, in this case the **pin** variable. After that, we create the **touch** object and assign the pin to this object:
```python
pin = board.IO1
touch = touchio.TouchIn(pin)
```

We also assign GPIO4 to the **led** variable and configure it as a digital output:
```python
led = DigitalInOut(board.IO4)
led.direction = Direction.OUTPUT
```

Next, we create an infinite loop (**while True**). Inside the loop, we check if there was a change in the capacitance of the "sensor". If the change occurs, the LED state will also change:
```python
while True:
    if touch.value:
        state = not state
    
    led.value = state
    sleep(1)
```

## **How to adjust touch sensitivity?**

In this example, we are triggering the LED just by approaching a finger. However, you may want to adjust your "sensor" to trigger only on contact. To do this, we will use the **threshold** command.

First, let's check the raw touch measurement. For this, we use the **raw_value** function. Then we adjust the sensitivity so that it is triggered only by actual touch:
```python
pin = board.IO1
touch = touchio.TouchIn(pin)
print(touch.raw_value)
touch.threshold = 17300
```

After adding the **threshold** function, the LED is only triggered if we actually touch the "sensor". This happens because we configured it with lower sensitivity — i.e., a higher minimum capacitance value — so that the change is perceived by the board.

## **Conclusion**

We learned, through a practical example, how to use a capacitive touch pin. In many situations this can be used to replace buttons and switches, presenting a simpler solution since its operation is not mechanical. Additionally, we saw how to adjust the sensitivity of this sensor to our needs.

| Author | Mateus Adriano Ventura Vieira |
|--------|--------------|
| Date:  | 06/05/2022   |
