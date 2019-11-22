import { styled } from '../../../theme'

type SectionColumnProps = {
  column: number[]
  span?: number[]
}

export const SectionColumn = styled.div<SectionColumnProps>`
  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    grid-column: ${props => props.column[0]} / span
      ${props => (props.span ? props.span[0] : '1')};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-column: ${props => props.column[1]} / span
      ${props => (props.span ? props.span[1] : '1')};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    grid-column: ${props => props.column[2]} / span
      ${props => (props.span ? props.span[2] : '1')};
  }
`
