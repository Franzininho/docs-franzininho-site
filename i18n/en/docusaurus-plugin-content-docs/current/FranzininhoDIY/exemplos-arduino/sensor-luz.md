---
id: sensor-luz-ldr
title: LDR Light Sensor
slug: /franzininho-diy/sensor-luz-ldr
description: In this example we will read an LDR sensor using the analog input of the Franzininho DIY
---

In this example we will read an LDR sensor using the analog input.

An example of a photocell in operation will be shown: when it gets dark, the LED will turn on, just like a street light.

## Materials

* Franzininho board
* Breadboard
* 1 10K resistor
* 1 LDR (10K)
* Jumper wires

## Circuit

Make the following connections on the breadboard:

![](img/sensor-luz-ldr/sensor-luz-circuito.png)

## Sketch

```cpp
/*
  Franzininho
  Example: Light Sensor - LDR
  In this example we will read an LDR sensor using the analog input.
  An example of a photocell will be shown: when it gets dark, the LED turns on,
  just like a street light. ;)
*/
// Light sensor with LDR
int ledPin = 1;    // LED on pin 1 - board LED
int ldrPin = A1;   // LDR on analog pin A1
int ldrValue = 0;  // value read from LDR

void setup() {
  pinMode(ledPin, OUTPUT); // define LED as Output
}

void loop() {
  // read the LDR value
  ldrValue = analogRead(ldrPin); // the read value will be between 0 and 1023
  // if the read value is greater than 800, turn on the LED
  if (ldrValue >= 800) {
    digitalWrite(ledPin, HIGH);     // activate output
  } else {  // otherwise, turn off the LED
    digitalWrite(ledPin, LOW);      // deactivate output
  }
  delay(100);
}
```

## Simulation

<iframe width="100%" height="458px" src="https://wokwi.com/arduino/projects/311443234729493056?view=diagram"></iframe>

## Working Video

<iframe   src="https://www.youtube.com/embed/AzypBpXO238" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
