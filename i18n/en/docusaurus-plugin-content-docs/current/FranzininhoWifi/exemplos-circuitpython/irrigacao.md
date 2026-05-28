---
id: circuitpython-sistema-de-irrigação
title: Automatic Irrigation System
slug: /franzininho-wifi/exemplos-circuitpython/irrigacao
description: An automatic irrigation system is a solution to help maintain systematic irrigation of your plants.
author: Giuliane Eulália Corrêa
---

An automatic irrigation system is a solution to help maintain systematic irrigation of your plants.

This system allows you to schedule rules according to the plants' needs. This ensures savings in water and time, whether you have a garden or vegetable patch, or for large-scale agricultural irrigation systems.

Now let's describe an example of an automated irrigation system that can be built simply but with great automation potential.

## **Materials Used**

- 1 Franzininho WiFi board
- 1 Soil moisture sensor - Hygrometer with digital and analog output
- 1 830-point breadboard
- 1 5V submersible mini water pump
- 1 5V relay
- Jumper wires - Male/Male and Male/Female

## **Electronic Circuit**

For the example below, make the following assembly:

![Circuit](img/irrigacao/prototipo_.jpg)

**Notes:**
- The relay is connected to the board's 5V
- Blue wires: digital outputs
- Red wires: VCC
- Black wires: GND

## **Source Code**

To start, you must have followed the **Getting Started** tutorial (also available on the Franzininho documentation page), have CircuitPython installed on the board, and for this project we use the Mu editor. To set up this environment, just follow the steps in **Installing the Tools**.

From here on we assume that the installation and environment setup steps have been completed.
Below is the system code on the board using CircuitPython. You can copy and paste the source code into your IDE.

```python
import board
import time

from digitalio import DigitalInOut, Direction, Pull
from analogio import AnalogIn  

relay = DigitalInOut(board.IO0)
relay.switch_to_output()

humid_analog = AnalogIn(board.IO1)       
humid_digital = DigitalInOut(board.IO4)   
humid_digital.direction = Direction.INPUT 

relay.value = True

wait_time = 1
watering_time = 1

dry_value = 51130

while True:
    try:
        print("humid (Digital value):", humid_digital.value)
        print("humid (Analogic value):", humid_analog.value)

        time.sleep(1);

        if humid_analog.value > dry_value :
            print("Starting watering...")

            relay.value = False

            time.sleep(watering_time)
            print("Finishing watering.")

        else:
            relay.value = True
            time.sleep(wait_time)

    except RuntimeError as e:
        print("Read failure")

    time.sleep(1)
```

After finishing writing and reviewing in the development environment, just save and click on serial to run in the mu-editor. If you are using another IDE, just run it in your chosen environment.

## **Understanding the Source Code**

The first module we will import is board. It enables access to the board pins:

```python
import board
```

This module provides various time-related functions:

```python
import time
```
The digitalio module contains classes to provide access to basic digital I/O:

```python
from digitalio import DigitalInOut, Direction, Pull
```

Creates an object and connects the object to an analog input:

```python
from analogio import AnalogIn 
```

Now, let's assign the relay:

```python
relay = DigitalInOut(board.IO0)
relay.switch_to_output()
```

We assign the analog and digital inputs of the soil moisture sensor to port 1 (analog) and port 4 (digital) of the Franzininho, also configuring the pin as a digital input:

```python
humid_analog = AnalogIn(board.IO1)        # analog
humid_digital = DigitalInOut(board.IO4)   # digital
humid_digital.direction = Direction.INPUT
```

The relay was configured to use the "normally closed" port, so we need to set it to True to keep the relay inactive:

```python
relay.value = True
```
Time period to check the system. The control of this time period to maintain plant watering depends on the voltage powering the pump:

```python
wait_time = 1
watering_time = 1
```

Adjusted according to the soil moisture sensor. You need to run some tests with your soil to find the value for the soil you will use:

```python
dry_value = 51130
```

Finally, inside the **while True**, our loop, we read the sensors continuously and print the values from the soil moisture sensor:

```python
while True:
    try:

        print("humid (Digital value):", humid_digital.value)
        print("humid (Analogic value):", humid_analog.value)

        time.sleep(1);
```

In the condition below, if the sensor receives a value indicating the soil is dry, we enter the if condition and connect the relay to "normally closed". Adding False to "normally closed" means open. This way the pump is activated and irrigation begins:

```python
if humid_analog.value > dry_value :
            print("Starting watering...")

            relay.value = False

            time.sleep(watering_time)
            print("Finishing watering.")

```
If the level is OK, we just make sure the relay is closed:

```python
        else:
            relay.value = True
            time.sleep(wait_time)

```
And we put the sensor to sleep again:
```python
    time.sleep(1)
```

The code can also be found at https://github.com/GiulianeEC/SystemOfIrrigation_Franzininho

## **Conclusion**

Throughout the explanation, we learned how to assemble a simple automated irrigation prototype.

| Author | Giuliane Eulália Corrêa |
|--------|-------------|
| Date:  | 28/01/2023  |
