import 'styled-components'
import {} from 'styled-components/cssprop'

declare module 'styled-components' {
  export interface DefaultTheme {
    colours: {
      primary: string
      secondary: string
      tertiary: string
      primaries: {
        white: string
        orange: string
        black: string
        yellow: string
        grey: string
      }
    }
    logo: string
    spacing: string[]
    heights: string[]
    widths: string[]
    breakpoints: string[]
    fontFamilies: {
      heading: string
      running: string
    }
    fontSizes: string[]
    fontWeights: number[]
    animation: {
      timing: string[]
      curve: string
    }
  }
}
