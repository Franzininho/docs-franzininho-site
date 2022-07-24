module.exports = {
  docs: [
    {
      type: "category",
      label: "Comece aqui",
      items: ["sobre"],
      collapsed: false,
    },
    {
      type: "category",
      label: "Placas desenvolvidas",
      items: [
        "hardware/franzboy",
        "hardware/franzininho-diy",
        "hardware/franzininho-tiny",
        "hardware/franzininho-wifi-dev-edition",
        "hardware/franzininho-wifi",
        "hardware/franzino",
        "hardware/franzmakey",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Tutoriais",
      items: [
        {
          type: "category",
          label: "Primeiros passos",
          items: [
            "tutoriais/primeiros-passos/franzino",
            "tutoriais/primeiros-passos/franzmakey",
            {
              type: "category",
              label: "Primeiros passos com a Franzininho DIY",
              items: [
                {
                  type: "category",
                  label: "Gravação da placa",
                  items: [
                    "tutoriais/primeiros-passos/franzininho-diy/bootloader",
                    "tutoriais/primeiros-passos/franzininho-diy/drivers",
                  ],
                  collapsed: false,
                },

                {
                  type: "category",
                  label: "Montagem",
                  items: [
                    "tutoriais/primeiros-passos/franzininho-diy/lista-de-materiais",
                    "tutoriais/primeiros-passos/franzininho-diy/identificando-componentes",
                    "tutoriais/primeiros-passos/franzininho-diy/montagem",
                  ],
                  collapsed: false,
                },
              ],
              collapsed: false,
            },
            {
              type: "category",
              label: "Primeiros passos com a Franzininho Wifi",
              items: [
                "tutoriais/primeiros-passos/franzininho-wifi-arduino",
                "tutoriais/primeiros-passos/franzininho-wifi-esp-idf",
              ],
              collapsed: false,
            },

            {
              type: "category",
              label: "CircuitPython",
              items: [
                "tutoriais/primeiros-passos/circuitpython",
                "tutoriais/primeiros-passos/circuitpython-ferramentas",
              ],
              collapsed: true,
            },
          ],

          collapsed: true,
        },
        {
          type: "category",
          label: "Exemplos com Arduino",
          items: [
            {
              type: "category",
              label: "Franzininho DIY",
              items: [
                "tutoriais/exemplos-arduino/franzininho-diy/pacote",
                "tutoriais/exemplos-arduino/franzininho-diy/entradas-saidas-digitais",
                "tutoriais/exemplos-arduino/franzininho-diy/entradas-analogicas",
                "tutoriais/exemplos-arduino/franzininho-diy/saidas-pwm",
                "tutoriais/exemplos-arduino/franzininho-diy/pisca-led",
                "tutoriais/exemplos-arduino/franzininho-diy/brilho-led",
                "tutoriais/exemplos-arduino/franzininho-diy/leitura-tecla",
                "tutoriais/exemplos-arduino/franzininho-diy/tecla-liga-desliga",
                "tutoriais/exemplos-arduino/franzininho-diy/led-rgb",
                "tutoriais/exemplos-arduino/franzininho-diy/elefante-colorido",
                "tutoriais/exemplos-arduino/franzininho-diy/sensor-luz-ldr",
                "tutoriais/exemplos-arduino/franzininho-diy/semaforo",
                "tutoriais/exemplos-arduino/franzininho-diy/theremim",
                "tutoriais/exemplos-arduino/franzininho-diy/girassol-automatizado",
              ],
              collapsed: true,
            },
            {
              type: "category",
              label: "Franzininho Wifi",
              items: [
                "tutoriais/exemplos-arduino/franzininho-wifi/arduino-blink",
                "tutoriais/exemplos-arduino/franzininho-wifi/arduino-neopixel",
                "tutoriais/exemplos-arduino/franzininho-wifi/arduino-dht11",
              ],
              collapsed: true,
            },
          ],

          collapsed: true,
        },
        {
          type: "category",
          label: "Exemplos AVR Libc",
          items: [
            "tutoriais/exemplos-avr-libc/primeiros-passos",
            "tutoriais/exemplos-avr-libc/hello-world",
            "tutoriais/exemplos-avr-libc/saida-digital",
            "tutoriais/exemplos-avr-libc/entrada-digital",
            "tutoriais/exemplos-avr-libc/timer0",
            "tutoriais/exemplos-avr-libc/timer0-int",
            "tutoriais/exemplos-avr-libc/contadores",
            "tutoriais/exemplos-avr-libc/buzzer",
            "tutoriais/exemplos-avr-libc/avr-libc-todo",
          ],
          collapsed: true,
        },

        {
          type: "category",
          label: "Exemplos com ESP-IDF",
          items: [
            "tutoriais/exemplos-espidf/franzininho-wifi-espidf-01",
            "tutoriais/exemplos-espidf/franzininho-wifi-espidf-02",
            "tutoriais/exemplos-espidf/franzininho-wifi-espidf-03",
            "tutoriais/exemplos-espidf/franzininho-wifi-espidf-04",
          ],

          collapsed: true,
        },

        {
          type: "category",
          label: "Exemplos com CircuitPyhton",
          items: [
            "tutoriais/exemplos-circuitpython/circuitpython-hello-world",
            "tutoriais/exemplos-circuitpython/circuitpython-serial-console",
            "tutoriais/exemplos-circuitpython/circuitpython-entradas-saidas-digitais",
            "tutoriais/exemplos-circuitpython/circuitpython-entradas-analogicas",
            "tutoriais/exemplos-circuitpython/circuitpython-pwm",
            "tutoriais/exemplos-circuitpython/circuitpython-touch-capacitivo",
            "tutoriais/exemplos-circuitpython/circuitpython-display-oled-i2c",
            "tutoriais/exemplos-circuitpython/circuitpython-dht11",
            "tutoriais/exemplos-circuitpython/circuitpython-sensor-hcsr04",
            "tutoriais/exemplos-circuitpython/circuitpython-servo-motor",
          ],

          collapsed: true,
        },
      ],
      collapsed: false,
    },

    {
      type: "category",
      label: "Ferramentas",
      items: [
        "ferramentas/badge/badge",
        "ferramentas/picsimlab",
        {
          type: "category",
          label: "Wokwi",
          items: [
            "ferramentas/wokwi/franzininho-diy",
            "ferramentas/wokwi/franzininho-wifi",
          ],
          collapsed: true,
        },
      ],
      collapsed: false,
    },
  ],
};
