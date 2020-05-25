import styled from 'styled-components'
import { BaseRunning } from './BaseRunning'

type ParagraphProps = {
  colour?: 'primary' | 'secondary'
  centre?: boolean
  noMargin?: boolean
  mAuto?: boolean
}

export const Paragraph = styled.p<ParagraphProps>`
  ${BaseRunning}
  max-width: 34.375rem;
  ${props => props.mAuto && 'margin: 0 auto'};
  ${props => props.noMargin && 'margin: 0 !important'};
  color: ${props =>
    props.colour
      ? props.colour === 'secondary' && props.theme.colours.tertiary
      : props.theme.colours.secondary};
  ${props => props.centre && 'text-align: center'};

  &:last-child {
    margin-bottom: ${props => props.theme.spacing[2]};
  }
`
