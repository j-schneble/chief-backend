/** @type {import('tailwindcss').Config} */
const { spacing, fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
   content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        128: '32rem',
      },
      colors: {
        white: '#fff',
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
        gray: colors.neutral,
        'gray-150': '#EEEFF2',
        'gray-1000': '#050505',
        black: '#050505',
        'design-details': '#458886',
        'design-details-light': '#EEF3F3',
        'design-details-dark': '#273F3F',
        twitter: '#479BEA',
        current: 'currentColor',
        transparent: 'transparent',
        gradient1: '-webkit-linear-gradient(to top, #4A00E0, #8E2DE2) linear-gradient(to top, #4A00E0, #8E2DE2)',
        blu1: '#3f91f2',
        purp2: '#7816f0',
        grgray: '#63686b',
        pink3: '#ff63c3',
        
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        serif: ['Domine', ...fontFamily.serif],
        sfprodisplayregular: ['SF-Pro-Display-Regular', ...fontFamily.sans],
        sfprodisplaybold: ['SF-Pro-Display-Bold', ...fontFamily.sans],
        sfprodisplaylight: ['SF-Pro-Display-Light', ...fontFamily.sans],
        sfprodisplayheavy: ['SF-Pro-Display-Heavy', ...fontFamily.sans],

      },
      keyframes: {
        'slide-in': {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-out': {
          '0%': { opacity: 1, transform: 'translateY(0px)' },
          '100%': { opacity: 0, transform: 'translateY(16px)' },
        },
        'text-shimmer': {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(0.5deg)' },
          '75%': { transform: 'rotate(-0.5deg)' },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.1s ease-out',
        'slide-out': 'slide-out 0.1s ease',
        'text-shimmer': 'text-shimmer 2s ease-out infinite alternate',
        tilt: 'tilt 10s infinite linear',
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
              code: { color: theme('colors.blue.400') },
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32],
            },
            code: { color: theme('colors.pink.500') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
          },
        },
        dark: {
          
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.600'),
              },
              code: { color: theme('colors.blue.400') },
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300'),
            },
            'h2,h3,h4': {
              color: theme('colors.gray.100'),
              'scroll-margin-top': spacing[32],
            },
            hr: { borderColor: theme('colors.gray.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.500') },
              },
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.500') },
              },
            },
            strong: { color: theme('colors.gray.300') },
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
}

