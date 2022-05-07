module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand:{
          default: '#8257e6',
          hover: '#996DFF'
        },
        textOnBrand:'#FFFFFF',
        surface:{
          Primary:'#18181B',
          Secondary:{
            default: '#27272A',
            hover: '#3F3F46'
          }
        },
        stroke:'#52525B',
        tooltip:'#F$F$F5',
        text:{
          primary:'#F4F4F5',
          Secondary:'#A1A1AA',
          onTooltip:'#27272A'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
