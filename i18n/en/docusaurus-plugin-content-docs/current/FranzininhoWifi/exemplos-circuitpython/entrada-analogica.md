---
id: circuitpython-entradas-analogicas
title: Analog Input
slug: /franzininho-wifi/exemplos-circuitpython/entradas-analogicas
description: This example shows how to work with analog inputs on the Franzininho WiFi
author: Diana Santos and Fábio Souza
---

In this example we will learn how to use analog inputs. We will see which module we need to use and how to read the analog value using a potentiometer. At the end we will make an example to turn an LED on and off based on the value read at the analog input. After this step you will be ready to read analog sensors.

## Required Materials

- 1 Franzininho WiFi board with CircuitPython
- 1 Breadboard
- 1 10K potentiometer
- 1 red 3 mm LED
- 1 330 Ω resistor
- Jumper wires

## Circuit

For the first examples, make the following assembly:

![Circuit](img/entradas-analogicas/circuito.png)

## Code

Type the code below in the code.py file located in the CIRCUITPY directory:
```python
# Analog Input Reading - Example 1
import time            # import timing module
import board           # import board module
from analogio import AnalogIn    # import analog input module

analog_in = AnalogIn(board.IO1) # map analog pin

while True:             # infinite loop
    print((analog_in.value,))    # print the analog reading value
    time.sleep(0.2)              # wait 200 ms
```
Save the file and test by rotating the potentiometer. In the Mu Editor, view the data in the serial terminal and on the graph:

![Test 1](img/entradas-analogicas/grafico_entrada_analogica-1.gif)

Note that the AD conversion values are displayed in the terminal and on the graph.

Now let's make an example to convert these values to voltage.

Type the following code:
```python
# Analog Input Reading - Example 2
import time            # import timing module
import board           # import board module
from analogio import AnalogIn    # import analog input module

analog_in = AnalogIn(board.IO1) # map analog pin

def read_voltage(pin):
    return (pin.value * 3.3) / 65536

while True:             # infinite loop
    print((read_voltage(analog_in),))    # print the analog reading value
    time.sleep(0.2)                      # wait 200 ms
```

Save the file and test by rotating the potentiometer. In the Mu Editor, view the data in the serial terminal and on the graph:

![Test 2](img/entradas-analogicas/grafico_entrada_analogica-2.gif)

Note that we now display the voltage value.

### Code Analysis (Examples 1 and 2)

To access the board pins we need to import the board module:
```python
import board
```
Since we need timing intervals, we import the time module:
```python
import time
```
We will work with analog inputs in this example, so we need to import the following module from analogio:
```python
from analogio import AnalogIn # import analog input module
```
The Franzininho WiFi has several analog inputs. For this example we use the analog input on pin IO1:
```python
analog_in = AnalogIn(board.IO1) # map analog pin
```
In the infinite loop we read the AD conversion by reading the value present on the pin at 200 ms intervals. In the first example we simply print the converted value:
```python
while True:  # infinite loop
    print((analog_in.value,))  # print the analog reading value
    time.sleep(0.2)  # wait 200 ms
```

In the second example we created a function that converts the value read on the pin to voltage:
```python
def read_voltage(pin):
    return (pin.value * 3.3) / 65536

while True:  # infinite loop
    print((read_voltage(analog_in),))  # print the analog reading value
    time.sleep(0.2)  # wait 200 ms
```

Now let's make an application to turn an LED on and off depending on the value read from the potentiometer.

Type the following code:
```python
# Analog Input Reading - Example 3
import time            # import timing module
import board           # import board module
from analogio import AnalogIn    # import analog input module
from digitalio import DigitalInOut, Direction

analog_in = AnalogIn(board.IO1) # map analog pin

led = DigitalInOut(board.IO4)
led.direction = Direction.OUTPUT

def read_voltage(pin):
    return (pin.value * 3.3) / 65536

while True:             # infinite loop
    print((read_voltage(analog_in),))    # print the analog reading value
    
    if(read_voltage(analog_in)>2.5):     # if read value is greater than 2.5V
        led.value = 1                    # turn LED on
    else:                                # otherwise
        led.value = 0                    # turn LED off
    
    time.sleep(0.2)         # wait 200 ms
```

Save the file and test by rotating the potentiometer. Check if the LED turns on when it exceeds 2.5V (displayed in the terminal). When below 2.5V the LED should turn off.

![Test 3](img/entradas-analogicas/grafico_entrada_analogica-3.gif)


### Code Analysis (Example 3)

In this example we added a digital output to control an LED.

:::tip Tip
If you don't yet know how to work with digital inputs and outputs, see the [Digital Inputs and Outputs](https://franzininho.github.io/docs-franzininho-site/docs/franzininho-wifi/exemplos-circuitpython/entradas-saidas-digitais) example.
:::

In the main loop we check the voltage value of the analog input: if above 2.5V the LED turns on; if below 2.5V the LED turns off.
```python
while True:  # infinite loop
    print((read_voltage(analog_in),))  # print the analog reading value

    if(read_voltage(analog_in)>2.5):  # if read value is greater than 2.5V
        led.value = 1  # turn LED on
    else:  # otherwise
        led.value = 0  # turn LED off

    time.sleep(0.2)  # wait 200 ms
```

## Conclusion

In this example, we learned how to read an analog input. To read other inputs you can follow the same pattern. However, it is important to verify that the pin has this functionality.

With this feature we will be able to read various analog sensors such as temperature, accelerometer, sound, etc.

:::tip Challenge
Read another potentiometer using another analog input. Display both potentiometer values simultaneously on the graph.
:::

| Author | Diana Santos |
|--------|--------------|
| Author | [Fábio Souza](https://github.com/FBSeletronica) |
| Date:  | 16/09/2021    |
