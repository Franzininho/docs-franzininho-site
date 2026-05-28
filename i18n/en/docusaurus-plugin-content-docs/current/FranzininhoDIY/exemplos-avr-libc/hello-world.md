---
id: hello-world
title: Hello, World!
slug: /franzininho-diy/exemplos-avr-libc/hello-world
description: In this first example we will take the first steps in programming the Franzininho DIY
authors: Fábio Souza
date: 24/04/2021
some_url: https://github.com/FBSeletronica
---

In this example we will take our first steps in programming the Franzininho DIY using [AVR Libc](https://nongnu.org/avr-libc/).

As usual, our "Hello, World!" in electronics will be an LED blink. At the end of this experiment you will have a minimal structure for developing applications for the ATtiny85 in C.

Let's get started!

## Required Resources

- Franzininho DIY board (with Micronucleus)
- Computer with software tools installed (link)

## Hello, World in C Language

This basic example will give us the structure for all our future examples. As already mentioned, we will use the C language together with the AVR Libc library. For this example you will only need the Franzininho DIY board and the software tools.

The code shows the minimal structure of a C language program for microcontrollers. If you have difficulty with C, I recommend checking out the following materials:
- [C Language Playlist](https://www.youtube.com/watch?v=l9ZdS8kph0A&list=PLqY1DITQ0sB_5yUBqhnm37J5PxsjrVPKT)
- [Slideshare](https://www.slideshare.net/FabioSouza9/resumo-linguagem-c-para-microcontroladores-pic-usando-mikroc)

At this point it is important to pay attention to the code structure. We will use some registers to drive the LED, but they will not be the focus of the explanation. Check the comments in the following code:

### Code

```c
#include <avr/io.h>            // Library for accessing MCU registers
#include <util/delay.h>        // Library for delay functions

#define F_CPU 16500000L        // Clock frequency the MCU is running at

/**
  This is the main function where the application starts
*/
int main(void)
{
    DDRB |= (1 << PB1);        // Configure pin PB1 as output (LED pin)

    // The program will stay in this loop while the board is powered on
    while (1)
    {
        PORTB |= (1 << PB1);   // Turn on LED
        _delay_ms(500);        // Wait 500 ms

        PORTB &= ~(1 << PB1);  // Turn off LED
        _delay_ms(500);        // Wait 500 ms
    }

    return (0);                // A return is required (since the function returns int) even though the function never returns
}
```

### Compilation and Upload

To compile the program, navigate to the example folder and then run the `make` command:

```
exemplos-avr-libc/exemplos/hello$ make
```

The makefile is already configured in the folder, so the compilation will be done and then a message will appear to connect the board:

```shell
../../micronucleus/2.0a4/launcher  -cdigispark --timeout 60 -Uflash:w:main.hex:i
Running Digispark Uploader...
Plug in device now... (will timeout in 60 seconds)
> Please plug in the device (will time out in 60 seconds) ...
```

Connect the board to the PC or press the RESET button if it is already connected.

The upload will begin.

### Results

In this example the LED will blink at 500 ms intervals (on) and 500 ms (off).

In the next example we will detail the IO registers. At this point, in addition to the initial structure, it is important that you understand how to use the `_delay_ms()` function.

This function waits for the time passed in milliseconds.

Modify the code so the LED stays on for 100 ms and off for 1000 ms, and observe the effect.

## Conclusion

In this example we had our first contact with C language programming for microcontrollers. We noted that we must include external libraries via `#include` and that the program must necessarily have the `int main(void)` function.

Inside the main function we have an infinite loop where commands will repeat while the board is powered on.

| Author | [Fábio Souza](https://github.com/FBSeletronica) |
|--------|-------------|
| Date:  | 24/04/2021  |
