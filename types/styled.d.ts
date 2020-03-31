import 'styled-components'
import theme from '../theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    colours: {
      primary: string
      secondary: string
      tertiary: string
      quaternary: string
      lightText: string
      darkText: string
      loading: string
      disabled: string
    }
    fontSizes: string[]
    space: string[]
    sizes: {
      static: string[]
      dynamic: string[]
      height: string[]
    }
    breakpoints: string[]
    fonts: {
      display: string
      sans: string
    }
    fontWeights: number[]
    borderWidth: string
    textShadow: string
    animation: {
      timing: string[]
      curve: string
    }
    pageColours: {
      '/': string
      '/over': string
      '/fotografie': string
      '/films': string
      '/films/loriyiu': string
      '/films/awakening': string
      '/films/stop': string
      '/films/plantapp': string
    }
  }
}
