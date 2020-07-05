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
}

const lightTheme: DefaultTheme = {
  ...defaultTheme,
  colours: {
    primaries: colours.primaries,
    ...colours.light,
  },
}

export { lightTheme, darkTheme }
