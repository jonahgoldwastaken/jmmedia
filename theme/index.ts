import { DefaultTheme } from 'styled-components'
import { animation } from './animation'
import { breakpoints } from './breakpoints'
import { colours } from './colours'
import { fontFamilies, fontSizes, fontWeights } from './fonts'
import { heights, spacing, widths } from './layout'

const defaultTheme = {
  breakpoints,
  animation,
  fontFamilies,
  fontSizes,
  fontWeights,
  heights,
  spacing,
  widths,
}

const darkTheme: DefaultTheme = {
  ...defaultTheme,
  colours: { primaries: colours.primaries, ...colours.dark },
  logo: '/logo-dark.svg',
}

const lightTheme: DefaultTheme = {
  ...defaultTheme,
  colours: {
    primaries: colours.primaries,
    ...colours.light,
  },
  logo: '/logo-light.svg',
}

export { lightTheme, darkTheme }
