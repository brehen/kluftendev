// See https://next.tailwindcss.com/docs/configuration for details

module.exports = {
  theme: {
    boxShadow: {
      big: '6px 6px 7px 2px rgba(0,0,0,0.50);',
      med: '3px 3px 4px 0 rgba(0,0,0,0.50);',
      sml: '1px 1px 2px 0 rgba(0,0,0,0.50);'
    },
    colors: {
      brand: '#1C639A',
      branddark: '#364762',
      accent: 'rgb(239, 89, 30)',
      white: '#fff',
      fifty: 'rgb(0,0,0,0.7)',
      cardbackground: 'rgb(229, 239, 255)'
    },
    inset: {
      0: 0,
      auto: 'auto',
      '5vw': '5vw',
      100: '100%',
      '05vw': '1.25rem'
    }
  },
  variants: {},
  plugins: []
}
