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
  margin: ${props => `0 0 ${props.theme.spacing[1]}`};
  ${props => props.mAuto && 'margin: 0 auto'};
  ${props => props.noMargin && 'margin: 0 !important'};
  color: ${props =>
    props.colour
      ? props.colour === 'secondary' && props.theme.colours.tertiary
      : props.theme.colours.secondary};
  ${props => props.centre && 'text-align: center'};

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    max-width: 55rem;
  }

  &:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing[1]};
  }
`
