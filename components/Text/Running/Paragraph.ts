import styled from 'styled-components'
import { BaseRunning } from './BaseRunning'

type ParagraphProps = {
  colour?: 'black' | 'white'
  centre?: boolean
  noMargin?: boolean
  mAuto?: boolean
}

export const Paragraph = styled.p<ParagraphProps>`
  ${BaseRunning}
  max-width: 34.375rem;
  ${props => props.mAuto && 'margin: auto'};
  color: ${props => props.colour || props.theme.colours.secondary};
  ${props => props.centre && 'text-align: center'};

  &:last-child {
    margin-bottom: ${props => props.theme.spacing[2]};
  }

  ${props => props.noMargin && 'margin: 0;'}
`
