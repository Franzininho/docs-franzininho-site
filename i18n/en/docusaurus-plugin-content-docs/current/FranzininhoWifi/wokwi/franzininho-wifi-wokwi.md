---
id: franzininho-wifi-wokwi-intro
title: How to simulate the Franzininho WiFi on Wokwi
sidebar_label: Wokwi
slug: /franzininho-wifi/wokwi/primeiros-passos
description: Learn how to use Wokwi to simulate and prototype projects with the Franzininho WiFi, configuring different platforms such as Arduino, CircuitPython, and ESP-IDF.
---

Wokwi is an online electronics simulator. You can use it to simulate Arduino, ESP32, and many other popular boards, components, and sensors. It was built for makers, by makers.

The Franzininho WiFi is based on Espressif's ESP32-S2 chip, and Wokwi offers full support for it. You can use the simulator to learn how to program it, prototype your ideas, and share your projects with other makers — without needing physical hardware.


<div style={{textAlign: 'center'}}>

[![Wokwi Franzininho WiFi](img/franzininho-wifi-board.svg)](https://wokwi.com/projects/new/franzininho-wifi)

</div>

:::tip Tip
Click the image above to open a new Franzininho WiFi project on Wokwi.
:::



## Configuring the Compilation Platform

A Wokwi project consists of two elements:

- **`diagram.json`** — describes the circuit (board, components, and connections)
- **Code files** — determine the platform used (Arduino, CircuitPython, or ESP-IDF)

The `diagram.json` is the starting point of any project. For the Franzininho WiFi, it must contain the `board-franzininho-wifi` component:

```json
{
  "version": 1,
  "author": "Your Name",
  "editor": "wokwi",
  "parts": [
    {
      "type": "board-franzininho-wifi",
      "id": "franzininho",
      "top": 0,
      "left": 0,
      "attrs": {}
    }
  ],
  "connections": [],
  "dependencies": {}
}
```

The platform is identified by Wokwi based on the code file added to the project:

| Platform      | Main file           |
|---------------|---------------------|
| Arduino       | `sketch.ino`        |
| CircuitPython | `code.py`           |
| ESP-IDF       | `main.c`            |

To add a file to your project in Wokwi, click the **+** icon in the files tab of the editor and enter the file name according to the table above.

### Arduino

The Arduino framework is the most accessible option for beginners. Code is written in C++ using Arduino abstractions (`setup()` and `loop()`).

Add a file named `sketch.ino` with the minimal content:

```cpp
void setup() {
  Serial.begin(115200);
}

void loop() {
  Serial.println("Hello, Franzininho WiFi!");
  delay(1000);
}
```

All libraries compatible with ESP32/ESP32-S2 in the Arduino IDE are also available in the simulator.

### CircuitPython

CircuitPython is a Python implementation maintained by Adafruit, designed for rapid prototyping. Code is interpreted directly — there is no compilation step.

Add a file named `code.py` with the minimal content:

```python
import time

while True:
    print("Hello, Franzininho WiFi!")
    time.sleep(1)
```

:::info
In CircuitPython, the file must be named `code.py`. Other names will not be recognized as an entry point.
:::

### ESP-IDF

ESP-IDF (Espressif IoT Development Framework) is Espressif's native framework for ESP32 chips. It provides full access to the hardware and is recommended for projects that require greater control, performance, or direct use of FreeRTOS.

Add a file named `main.c` with the minimal content:

```c
#include <stdio.h>
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"

void app_main(void) {
    while (1) {
        printf("Hello, Franzininho WiFi!\n");
        vTaskDelay(pdMS_TO_TICKS(1000));
    }
}
```

:::tip Tip
If you are just getting started, use Arduino. If you already have experience with ESP32 and need advanced features such as FreeRTOS, native drivers, or memory optimization, ESP-IDF is the right choice.
:::

## Learn More

[Franzininho WiFi documentation on Wokwi](https://docs.wokwi.com/parts/board-franzininho-wifi)

For more information about other simulator features, take a look at the list below. You can also consult the [Wokwi documentation](https://docs.wokwi.com/) for complete references on components and diagrams.

- [diagram.json format](https://docs.wokwi.com/diagram-format)
- [Editor Keyboard Shortcuts](https://docs.wokwi.com/keyboard-shortcuts)
- [The Serial Monitor](https://docs.wokwi.com/guides/serial-monitor)
- [Using GDB on Wokwi](https://docs.wokwi.com/gdb-debugging)
- [Logic Analyzer Guide](https://docs.wokwi.com/guides/logic-analyzer)
- [Working with Libraries](https://docs.wokwi.com/guides/libraries)
- [ESP32 Simulator](https://docs.wokwi.com/guides/esp32)
- [ESP32 WiFi](https://docs.wokwi.com/guides/esp32-wifi)


## Simulator Examples

### Arduino

- [LCD Clock with NTP client](https://wokwi.com/projects/323796775459619410)
- [Servo motor control](https://wokwi.com/projects/327061759288410708)
- [RGB LED mixer (using 3 potentiometers)](https://wokwi.com/projects/324682033130373716)
- [TFT ILI9341 display](https://wokwi.com/projects/329013233501340242)
- [MQTT](https://wokwi.com/projects/322524997423727188)
- [NTP](https://wokwi.com/projects/323043284024820308)

### CircuitPython

- [Blink with CircuitPython](https://wokwi.com/projects/313606939786347074)

### ESP-IDF

- [Analog input and PWM output with ESP-IDF](https://wokwi.com/projects/324615433106752083)
- [FreeRTOS Tasks](https://wokwi.com/projects/324613550740865619)
- [PWM ESP-IDF](https://wokwi.com/projects/329133882849886804)
