import styled from 'styled-components'
import { BaseRunning } from './BaseRunning'

type ParagraphProps = {
  colour?: 'black' | 'white'
  centre?: boolean
  noMargin?: boolean
}

export const Paragraph = styled.p<ParagraphProps>`
  ${BaseRunning}
  color: ${props => props.colour || props.theme.colours.secondary};
  ${props => props.centre && 'text-align: center'};
  
  &:last-child {
    margin-bottom: ${props => props.theme.spacing[2]};
  }

  ${props => props.noMargin && 'margin: 0;'}
`
