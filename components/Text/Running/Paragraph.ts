import styled from 'styled-components'
import { BaseRunning } from './BaseRunning'

type ParagraphProps = {
  colour?: 'black' | 'white'
}

export const Paragraph = styled.p<ParagraphProps>`
  ${BaseRunning}
  color: ${props => props.colour || props.theme.colours.secondary};
`
