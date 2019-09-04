import { styled } from '../../theme'

type SectionColumnProps = {
  column: number
  span?: number
}

export const SectionColumn = styled.div<SectionColumnProps>`
  grid-column: ${props => props.column} / span
    ${props => (props.span ? props.span : '1')};
`
