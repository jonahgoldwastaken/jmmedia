import { styled } from '../../theme'
import { PopInLeft } from '../Animations'
import { withTransition } from '../../utils/page-transitions'
import { css } from 'styled-components'

const HeadingWithoutTransition = styled.h1`
  margin-top: 0;
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes[5]};
  color: ${props => props.theme.colors.primary};
`

export const Heading = withTransition(
  HeadingWithoutTransition,
  css`
    animation: ${PopInLeft}
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`};
  `
)
