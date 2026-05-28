---
id: circuitpython-ferramentas
title: Installing the Tools
slug: /franzininho-wifi/exemplos-circuitpython/ferramentas
description: In this text we will configure the tools for using the Franzininho WiFi
author: Diana Santos
---

CircuitPython does not require specific programming tools. A simple text editor is sufficient. However, to make coding easier and more productive, we can use some tools.

We recommend the following tools for working with CircuitPython:

- [Mu Editor](https://codewith.mu/)
- [Thonny IDE](https://thonny.org/)
- [VS Code](https://code.visualstudio.com/)

In this tutorial we will focus on the Mu Editor for its simplicity and ease of use. Below we show the installation process for [Windows](#windows) and [Linux](#linux) operating systems.

<iframe   src="https://www.youtube.com/embed/BIs9uYHytJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Windows

### Installing the Mu Editor

To install the Mu Editor on Windows, follow these steps:

Step 1: Go to [https://codewith.mu/](https://codewith.mu/) and click Download:

![image1](img/instalando-ferramentas/0x00-Editor_MU.png)

Step 2: Click the Windows Installer option.

![image2](img/instalando-ferramentas/0x01_download_MU.png)

Step 3: Save it to your computer.

![image3](img/instalando-ferramentas/0x02_Salvando_MU.png)

Step 4: Wait for the download to finish and then click to open the file you just downloaded.

![image4](img/instalando-ferramentas/0x03_Baixando_MU.png)

Step 5: After downloading the program, double-click it. A screen will appear where you need to accept the software terms of use. Check the box and press Install, then wait for the installation to complete.

![image5](img/instalando-ferramentas/0x04_instalando_Mu-editor.gif)

Step 8: Search on your computer for: Mu Editor

![image8](img/instalando-ferramentas/0x07-mu-editor.png)

Step 9: When you open the program, wait — this is the Mu Editor start screen.

![image-extra](img/instalando-ferramentas/tela-mu-editor.png)

Step 10: Then choose CircuitPython as shown in the image below. If it does not open automatically, click "Mode".

![image9](img/instalando-ferramentas/0x08-selecione-modo-CircuitPython.png)

Step 11: Done, now just have fun!

![image10](img/instalando-ferramentas/0x09_Interface_MU.png)

Step 12: Open the code.py file and start having fun with the Hello, World! presented in the next section.

### Serial terminal installation for REPL access (Optional)

Below we will present the serial terminal installation for REPL access through serial communication.

We will install the PuTTY serial terminal for our examples. Download it at: [https://www.putty.org/](https://www.putty.org/)

On the site, click the first option.

![image1](img/instalando-ferramentas/0x11_download_PuTTY.png)

Check your system. In my case it is 64-bit, so I will click on the 64-bit x86 option. Then just save.

![image2](img/instalando-ferramentas/0x12_download_PuTTY.png)

After downloading, double-click the file. A window will open as shown below. Click Next and then Install:

![image4](img/instalando-ferramentas/0x13_instalando_PuTTY.png)

![image3](img/instalando-ferramentas/0x14_instalando_PuTTY.png)

Click Install again:

![image4](img/instalando-ferramentas/0x15_instalando_PuTTY.png)

Wait and click Finish:

![image5](img/instalando-ferramentas/0x16_instalando_PuTTY.png)

We have finished the configuration step. The next step is to open the PuTTY program on your computer. Below I will explain the first steps with it.

As mentioned above, open PuTTY:

![image1](img/instalando-ferramentas/0x17_abrindo_PuTTY.png)

![image2](img/instalando-ferramentas/0x18_programa_PuTTY.png)

A window like the image above will open. Meanwhile, let's go to the Device Manager.

Go to Ports (COM and LPT). Here you will find which port the board is connected to. Click to expand and you will see USB Serial Device (COM3).

![image3](img/instalando-ferramentas/0x19_portasCOM_PuTTY.png)

Now we will make some changes as shown in the image below: change COM 1 to COM3, select the Serial option, and click Open.

![image4](img/instalando-ferramentas/0x20_portasCOM_PuTTY.png)

A screen similar to a terminal will appear. Press Ctrl + C to enter the Python interpreter on the board:

![image5](img/instalando-ferramentas/0x21_PuTTY.png)

Now that the board is connected, we can send commands for it to execute through the REPL.

Type `print("Hello, World!")` and press Enter.

![image6](img/instalando-ferramentas/0x22_Ola_Mundo_PuTTY.png)

We executed the print command above. You can test other messages by changing the text inside the quotes.

We can also perform mathematical operations.

![image7](img/instalando-ferramentas/0x23_numerico_PuTTY.png)

We can also access CircuitPython functions for hardware access. Let's see which pins the Franzininho WiFi has available?

Type `import board`, press Enter. Type `dir(board)` and press Enter.

![image8](img/instalando-ferramentas/0x24_import_board_PuTTY.png)

These are the pins we will work with for our applications.

This was just a quick experience for REPL access. This tool will help us test code or devices quickly.

For editing larger code and projects that you need to save, we recommend editing the code.py file.

To access this file, open the storage device (CIRCUITPY).

## Linux

### Installing the Mu Editor

To install the Mu Editor on Linux, follow these steps:

Step 1: Go to [https://codewith.mu/](https://codewith.mu/) and click Download:

![image1](img/instalando-ferramentas/0x00-Editor_MU.png)

Step 2: Click the Python Package (Linux or Native Python) option.

![image2](img/instalando-ferramentas/0x10_download_MU_Linux.png)

Step 3: Open your terminal and type the command below; it will install Python libraries — wait until it finishes:

```
pip3 install mu-editor==1.1.0b5
```

Step 4: Now type this command:

```
mu-editor
```

Step 5: Done, now just have fun!

![image3](img/instalando-ferramentas/0x09_Interface_MU.png)

Step 6: Open the code.py file and start having fun with the Hello, World! presented in the next section.

### Serial terminal installation for REPL access (Optional)

Below we will present the serial terminal installation for REPL access through serial communication.

Install a terminal. For example, to install picocom, type the commands below:

```
sudo apt-get update  
sudo apt-get install picocom
```

To access the Franzininho WiFi through the REPL using the serial terminal on Linux, the first step is to connect the Franzininho WiFi board to your computer. Something similar to a USB drive device will appear, as shown in the image below:

![image1](img/instalando-ferramentas/0x25_Abrindo_CircuitPython.png)

Now we will open the Serial terminal to the serial port where the board is connected. Open the command terminal and type: `picocom /dev/ttyACM0` and press Enter.

![image2](img/instalando-ferramentas/0x26_picocom_CircuitPython.png)

Now press Ctrl+C on the keyboard and `>>>` will appear.

![image3](img/instalando-ferramentas/0x27_picocom_CircuitPython.png)

Done — we are on the Franzininho WiFi board and can send commands directly to it.

Type: `print("Hello World")` and press Enter (you can write anything inside the quotes and it will display what you wrote):

![image4](img/instalando-ferramentas/0x28_picocom_CircuitPython.png)

Notice that we are executing Python commands through the REPL.

Now let's perform a mathematical operation: type a number, choose a mathematical operation, type another value, press Enter, and observe the result:

![image5](img/instalando-ferramentas/0x29_picocom_CircuitPython.png)

Now type the following code in the terminal:

```
import board  
dir(board)
```

The set of pins available on the Franzininho WiFi will appear.

![image6](img/instalando-ferramentas/0x30_picocom_CircuitPython.png)

This was just a quick experience for REPL access. This tool will help us test code or devices quickly.

For editing larger code and projects that you need to save, we recommend editing the code.py file.

To access this file, open the storage device (CIRCUITPY):

![image7](img/instalando-ferramentas/0x31_picocom_CircuitPython.png)

Now let's see what is possible to do with CircuitPython. Let's go!

## Alternative Tools

### Franzininho WiFi: Configuring Thonny IDE to work with CircuitPython

<iframe   src="https://www.youtube.com/embed/Yetzf8qK4II" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

| Author | Diana Santos |
|--------|--------------|
| Author | [Fábio Souza](https://github.com/FBSeletronica) |
| Date:  | 16/09/2021    |
