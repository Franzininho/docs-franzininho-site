module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Comece aqui',
      items: ['sobre',],
      collapsed: true
    },
    {
      type: 'category',
      label: 'Franzininho DIY',
      items: [
        'FranzininhoDIY/franzininho-diy',
        {
          type: 'category',
          label: 'Montagem',
          items: [
            'FranzininhoDIY/lista-de-materiais',
            'FranzininhoDIY/identificando-componentes',
            'FranzininhoDIY/montagem',
          ],
          collapsed: true
        },
        {
          type: 'category',
          label: 'Bootloader',
          items: [
              'FranzininhoDIY/bootloader/bootloader',
              'FranzininhoDIY/bootloader/drivers-micronucleus',
          ],
          collapsed: true
        },
        {
          type: 'category',
          label: 'Exemplos Arduino',
          items: [
            'FranzininhoDIY/exemplos-arduino/pacote',
          ],
          collapsed: true
        },
        {
          type: 'category',
          label: 'Exemplos AVR Libc',
          items: [
            'FranzininhoDIY/exemplos-avr-libc/exemplos-avr-libc',
            'FranzininhoDIY/exemplos-avr-libc/0x01_hello',
            'FranzininhoDIY/exemplos-avr-libc/0x02_saida_digital',
            'FranzininhoDIY/exemplos-avr-libc/0x03_entrada_digital',
            'FranzininhoDIY/exemplos-avr-libc/0x04_timer0',
            'FranzininhoDIY/exemplos-avr-libc/0x05_timer0_int',
            'FranzininhoDIY/exemplos-avr-libc/0x06_contadores',
            'FranzininhoDIY/exemplos-avr-libc/0x07_buzzer',
          ],
          collapsed: true
        },
        {
          type: 'category',
          label: 'Simulador Wokwi',
          items: [
            'FranzininhoDIY/wokwi/wokwi-intro'
          ],
          collapsed: true
        },
        {
          type: 'category',
          label: 'Simulador PICSimLab',
          items: [
            'FranzininhoDIY/picsimlab/picsimlab-intro'
          ],
          collapsed: true
        },
      ],
      collapsed: true
    },
    {
      type: 'category',
      label: 'Franzininho WiFi',
      items: [
        'FranzininhoWifi/franzininho-wifi',
        {
          type: 'category',
          label: 'Exemplos ESP-IDF',
          items: [
            'FranzininhoWifi/exemplos-espidf/franzininho-wifi-espidf-00',
            'FranzininhoWifi/exemplos-espidf/franzininho-wifi-espidf-01',
            'FranzininhoWifi/exemplos-espidf/franzininho-wifi-espidf-02',
            'FranzininhoWifi/exemplos-espidf/franzininho-wifi-espidf-03',
            'FranzininhoWifi/exemplos-espidf/franzininho-wifi-espidf-04',
          ],
          collapsed: true
        },
        {
          type: 'category',
          label: 'Exemplos CircuitPython',
          items: [
            'FranzininhoWifi/exemplos-circuitpython/circuitpython',
          ],
          collapsed: true
        },
        {
          type: 'category',
          label: 'Exemplos Arduino',
          items: [
            'FranzininhoWifi/exemplos-arduino/arduino',
          ],
          collapsed: true
        },
      ],
      collapsed: true
    },
    {
      type: 'category',
      label: 'FranzMakey',
      items: [
        'FranzMakey/franzmakey',
        'FranzMakey/primeiros-passos',
      ],
      collapsed: true
    },
    {
      type: 'category',
      label: 'Franzininho Tiny',
      items: [
        'FranzininhoTiny/franzininho-tiny',
      ],
      collapsed: true
    },
    {
      type: 'category',
      label: 'Franzino',
      items: [
        'Franzino/franzino',
        'Franzino/upload-conversor-serial',
        'Franzino/upload-com-arduino-uno',
      ],
      collapsed: true
    },
    {
      type: 'category',
      label: 'FranzBoy',
      items: [
        'FranzBoy/franzboy',
      ],
      collapsed: true
    },
    {
      type: 'category',
      label: 'Badges',
      items: [ 'Badge/badge',],
      collapsed: true
    },
    
  ],
};
