---
id: micropython-registro-temperatura
title: Temperature Logging System
slug: /franzininho-wifi/exemplos-micropython/registro-temperatura
description: In this article we will see how to record the data collected by the DHT11 on the Franzininho WiFi Lab01, using a system that allows creating, writing, and reading files.
author: Sthefania Fernandes
---

## Introduction

When we configure a sensor to collect data, it is important to ensure that this information is properly recorded and stored for later use.

In this article we will see how to record the data collected by the DHT11 sensor on the Franzininho WiFi Lab01, using a system that allows creating, writing, and reading files.

## Filesystem

The filesystem is where your board stores all the programs you have written. It is a form of non-volatile storage, which means that everything you save there remains even when you disconnect the micro USB cable from the Franzininho WiFi Lab01.

To understand this, connect your Franzininho WiFi Lab01 to the computer and open Thonny. Now, you won't open any program, so click at the bottom of the Terminal area to start working with your board in interactive mode and type:

```python
file = open("test.txt", "w")
```

This instructs MicroPython to open a file called "test.txt" for writing ("w" is the write instruction). The file is now open but there is nothing in it, so type:

```python
file.write("Hello, Franzininho!")
```

When you press ENTER at the end of this line, you will see the number 19 appear as the command return. This is MicroPython confirming that it wrote 19 bytes to the file you opened. Count the number of characters in the message you wrote: including letters, comma, space, and exclamation mark, there are 19 — each of which takes up one byte.
```python
>>> file = open("test.txt", "w")
>>> file.write("Hello, Franzininho!")
19
>>>
```

When writing a file, you need to close it — this ensures that the data you told MicroPython to write is actually saved to the filesystem. If you don't close the file, the data may not be written.
```python
file.close()
```

Now the file is safely stored in the Franzininho WiFi Lab01 filesystem.

One way to verify is by clicking the "Open" icon in the Thonny toolbar, then clicking "MicroPython device", scrolling through the file list until you find test.txt. Click the file and then click OK to open it: you will see your message appear in a new Thonny tab.

![](img/registro-temperatura/registro-temp-1.webp)

![](img/registro-temperatura/registro-temp-2.webp)

![](img/registro-temperatura/registro-temp-3.webp)

![](img/registro-temperatura/registro-temp-4.webp)

There is another way to read files — you can do this using MicroPython. Again, click at the bottom of the Terminal area and enter the following command:
```python
file = open("test.txt")
```

You could type `open("test.txt", "r")` but MicroPython opens a file in read mode by default — so it is fine to leave that part of the instruction out. Then type:

```python
file.read()
```

You will then see the message you wrote in the file displayed in the Terminal area.
```python
>>> file = open("test.txt")
>>> file.read()
'Hello, Franzininho!'
```

For reading it is not as important as for writing to close the file, but it is good practice, so it is recommended to always do it. Type:
```python
file.close()
```

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

Table 1 – Franzininho WiFi Lab01 pinout

## Code

Now that we know how to open, write, and read files, we can build a file to store the temperature and humidity records collected by the DHT11 sensor. With the Franzininho WiFi Lab01 connected to your computer, open Thonny and create a new file containing the following code:

```python
import machine
import utime
import dht

d = dht.DHT11(Pin(15))
file = open("temp.txt", "w")

while True:
	d.measure()
	temperature = d.temperature()  # in °C
	humidity = d.humidity()  # in %
    
	temperature_str = "Temp: " + str(temperature) + " ºC\n"
	humidity_str = "Humid: " + str(humidity) + " %\n"
   
	file.write(temperature_str)
	file.write(humidity_str)
    
	file.flush()
	utime.sleep(10)
```

## Code Explanation

The configuration and data collection from the DHT11 sensor on the Franzininho WiFi Lab01 was explained in detail in the article "Temperature and Humidity Monitoring on the Franzininho WiFi Lab01". So let's focus on writing to the .txt file.

To organize the file, we add `+ "\n"` so that each sensor reading is stored on a different line, making the txt file more organized.

An important point to note is that we are not closing the file, because we would not be able to write to it again without reopening it and erasing all its content. But if the file is not closed, the data is not saved to the filesystem.

The solution is to flush the file instead of closing it:
```python
file.flush()
```

When we are writing to a file and the data is not being written to the filesystem, it is stored in a buffer — a temporary storage area. When you close the file, the buffer is written in a process known as "flushing". Using `file.flush()` is equivalent to `file.close()` in the sense that it flushes the buffer contents to the file. But unlike `file.close()`, the file remains open for you to write more data to it later.

The sensor is read every 10 seconds and the measured content is saved to the "temp.txt" file.

Now, run the program and let it run for 1 minute or more. In the terminal, type the following code to open and read the new file:
```python
file = open("temp.txt")
print(file.read())
```

This time we put `file.read()` inside `print` because we used `"\n"` when writing the file, and it only works as a line break when used inside print.

After waiting a few seconds, I stopped the execution and accessed the file. In the Shell we can see the temperature and humidity readings that the Franzininho WiFi Lab01 measured and stored.
```python
>>> file = open("temp.txt")
>>> print(file.read())
Temp: 32 ºC
Humid: 58 %
Temp: 32 ºC
Humid: 59 %
Temp: 32 ºC
Humid: 59 %
Temp: 32 ºC
Humid: 60 %
Temp: 32 ºC
Humid: 60 %
Temp: 32 ºC
Humid: 59 %
```

Remember: if you don't close the file, this data will be lost. So after reading the file, type:
```python
file.close()
```

## Conclusion

Properly storing data collected by sensors, such as the DHT11 for measuring humidity and temperature, ensures the preservation of the measured information and also enables subsequent data analysis.

In this article we learned how to work with the filesystem on the Franzininho WiFi Lab01 using the MicroPython language. The ability to create, write, and read files allowed transforming the board into a _data logger_ capable of storing important information for subsequent use.

| Author | Sthefania Fernandes |
|--------|--------------|
| Date:  | 04/01/2024    |
