import baseStyled, {
  ThemedStyledInterface,
  createGlobalStyle as baseCreateGlobalStyle,
} from 'styled-components'
import { theme } from './theme'

export type Theme = typeof theme
export const styled = baseStyled as ThemedStyledInterface<Theme>
