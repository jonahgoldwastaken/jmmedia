import { DefaultTheme } from 'styled-components'
import { animation } from './animation'
import { breakpoints } from './breakpoints'
import { colours } from './colours'
import { fontFamilies, fontSizes, fontWeights } from './fonts'
import { spacing, heights, widths } from './layout'

const darkTheme: DefaultTheme = {
  colours: { primaries: colours.primaries, ...colours.dark },
  logo: '/static/logo-dark.svg',
  breakpoints,
  animation,
  fontFamilies,
  fontSizes,
  fontWeights,
  heights,
  spacing,
  widths,
}

const lightTheme: DefaultTheme = {
  colours: {
    primaries: colours.primaries,
    ...colours.light,
  },
  logo: '/static/logo-light.svg',
  breakpoints,
  animation,
  fontFamilies,
  fontSizes,
  fontWeights,
  heights,
  spacing,
  widths,
}

export { lightTheme, darkTheme }
