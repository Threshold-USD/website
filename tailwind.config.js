// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: '#ffffff00',
      beige: '#f3f6e6',
      black: '#000000',
      blue: '#0052FF',
      blue1: '#303442',
      blue2: '#2a385f',
      blue3: '#34376a',
      blue4: '#17171f',
      blue5: '#2a304c',
      blue6: '#2b2f5b',
      blue7: '#5e68ee',
      blue8: '#a7a9b9',
      blue9: '#595f99',
      blue10: '#6481e7',
      blue11: '#767fff',
      blue12: '#3d406d',
      blue13: '#1e2143',
      blue14: '#9ea3de',
      blue15: '#4b5184',
      blue16: '#2d315b',
      blue17: '#2f335e',
      grey: '#7A7A8F',
      grey2: '#D9D9D9',
      grey3: '#A4A7BF',
      grey4: '#5050500',
      pink: '#ff008a',
      pink1: '#f7d9e9',
      pink2: '#e0719e',
      pink3: '#FF008A',
      pink4: '#d045fe',
      pink5: '#6c385c',
      purple: '#7C08F9',
      green: '#36bc8c',
      green2: '#2ecc94',
      green3: '#83eac6',
      green4: '#116446',
      green5: '#1dffaa',
      green6: '#2ae8a4',
      green7: '#51bfab',
      green8: '#81fd73',
      green9: '#60e9d9',
      white: '#ffffff',
      white1: '#ffffffa3',
      red: '#dc3852',
      red2: '#f54e5d',
      red3: '#fa528e',
      red4: '#ff4a60',
      red5: '#fa528e70',
      yellow: '#ecc01f',
    },

    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      0.5: '0.5px',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },

    fontSize: {
      xxsmallest: '.525rem',
      xxsmaller: '.65rem',
      xxs: '.7rem',
      xs: '.75rem',
      ssm: '.8rem',
      tinysm: '.845rem',
      sm: '.875rem',
      tiny: '.875rem',
      tinybase: '.94rem',
      base: '1rem',
      baseg: '1.05rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '25xl': '1.75rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      zIndex: {
        1: '1',
        2: '2',
        5: '5',
      },
      boxShadow: {
        purple: '0 0 0 1pt #6e36ff',
        blue: '0 0 0 1pt #5f69ef',
      },
      outline: {
        purple: '1px solid #6e36ff',
        blue: '1px solid #232750',
      },
      screens: {
        smallest: '200px',
        small: '320px',
        lgg: '1200px',
        '1.5xl': '1430px',
      },
      maxWidth: {
        smallest: '11rem',
        xxsmaller: '14rem',
        xxs: '15.2rem',
        xsmaller: '17.5rem',
        xss: '19.5rem',
        llg: '30rem',
        '55xl': '68rem',
        '8xl': '88rem'
      },
      maxHeight: {
        76: '19rem',
        80: '20rem',
        102: '30rem',
        110: '38rem',
        112: '42rem',
      },
      minHeight: {
        36: '9rem',
      },
      width: {
        4.5: '1.12rem',
        5.5: '1.37rem',
        6.25: '1.575rem',
        6.5: '1.65rem',
        7.5: '1.85rem',
        '50px': '50px',
        26: '6.5rem',
        46: '11.5rem',
        50: '12.5rem',
        58: '14.5rem',
        100: '28rem',
        104: '29rem',
        112: '31rem',
      },
      height: {
        '3px': '3px',
        '4px': '4px',
        '4.5px': '4.5px',
        '5px': '5px',
        '50px': '50px',
        2.25: '0.5625rem',
        2.75: '0.6875rem',
        4.5: '1.12rem',
        5.5: '1.37rem',
        6.5: '1.65rem',
        7.5: '1.85rem',
        18: '4.5rem',
        25: '6.4rem',
        29: '7.2rem',
        30: '7.5rem',
        34: '8.5rem',
        35: '8.71rem',
        '36rem': '36rem',
        '44rem': '44rem',
      },
      borderRadius: {
        '100pc': '100%',
      },
      lineHeight: {
        'extra-loose': '2.3',
      },
      fontSize: {
        '1p4': '1.4rem',
        x0: '1.20rem',
        '2p6': '2.6rem',
        x11: '1.35rem',
        '25xl': '1.7rem',
        xxs: '.8rem',
      },
      spacing: {
        0.75: '0.187rem',
        '0p2': '0.2rem',
        '4p1': '4.1rem',
      },
      margin: {
        0.4: '0.1rem',
        0.75: '0.187rem',
        1.1: '0.275rem',
        3.25: '0.8125rem',
        3.75: '0.9375rem',
        4.5: '1.125rem',
        5.25: '1.32rem',
        5.5: '1.375rem',
        '-4.': '-1rem',
        '-4.5': '-1.125rem',
        '-22': '-5.5rem',
        '-24': '-6rem',
        '-30': '-7.5rem',
        '-54': '-13.5rem',
      },
      padding: {
        0.25: '0.0625rem',
        1.25: '0.3125rem',
        4.5: '1.125rem',
        15: '3.75rem;',
        23: '5.6rem;',
        5.5: '1.375rem',
        50: '12.5rem',
      },
      borderOpacity: {
        15: '0.15',
      },
    },
    fontFamily: {
      sans: ['var(--font-inter)', ...fontFamily.sans],
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
  },
  plugins: [],
}
