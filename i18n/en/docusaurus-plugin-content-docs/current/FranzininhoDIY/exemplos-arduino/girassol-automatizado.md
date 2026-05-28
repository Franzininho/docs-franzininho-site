---
id: girassol-automatizado
title: Automated Sunflower
slug: /franzininho-diy/girassol-automatizado
description: In this example we will make an Automated Sunflower with the Franzininho DIY
---

In this example we will make an automated sunflower that moves according to the position of light.

## Materials:

- Franzininho DIY board
- Breadboard
- 3mm LED
- 1 LDR resistor (photoresistors 10k)
- 1 Servo motor
- Male/female jumper wires

## Circuit

On the breadboard insert the photoresistors and servo motor as shown in the image below:

![Circuit](img/girassol-automatizado/girassol-atualizado.png)

## Code

```cpp
/*
Franzininho
Example: Automated Sunflower
In this example we have an automated sunflower with two photoresistors, a servo motor, and other materials.
*/

#include <Servo.h>

int sensor = A;
int servoMotor = 1;

int sensorValue = 0;
int servoAngle = 90;

Servo servo;

void setup() {
  servo.attach(servoMotor);
  servo.write(servoAngle);
}

void loop() {
  sensorValue = analogRead(sensor);
  if (sensorValue < 512)
  {
    if (servoAngle < 170) servoAngle++;
  }
  if (sensorValue >= 512)
  {
    if (servoAngle > 10) servoAngle--;
  }

  servo.write(servoAngle);
  delay(50);
}
```

## Explanatory Video

This project was made to collaborate in the Red Hat Co.Lab project. Check it out and other projects on the platform: https://www.redhat.com/pt-br/colab-repo

### Co.Lab | Workshop: Educational Robotics - Learn about Natural Sciences and Electronics (Part 1)

<iframe   src="https://www.youtube.com/embed/wGXmITj9mHE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Co.Lab | Workshop: Educational Robotics - Learn about Natural Sciences and Electronics (Part 2)

<iframe   src="https://www.youtube.com/embed/ANmRyWnvq4U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Reference

[Arduino Sunflower](https://create.arduino.cc/projecthub/Mako_/arduino-sunflower-c4fd84)

| Author | Diana Santos |
|--------|--------------|
| Date:  | 22/01/2022   |
