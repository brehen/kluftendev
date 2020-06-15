import Typography from 'typography';

const typography = new Typography({
  //baseFontSize: 'calc(1em + 1vw)',
  baseLineHeight: 1.666,
  headerFontFamily: ['Play', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  googleFonts: [
    {
      name: 'Play',
      styles: ['300', '400', '500']
    },
    {
      name: 'Overpass',
      styles: ['300']
    }
  ],
  bodyFontFamily: ['Overpass', 'Georgia', 'serif']
});

export default typography;
