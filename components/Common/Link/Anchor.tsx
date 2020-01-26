import { Ref } from 'react'
import { positionData } from '../../../interfaces/positionData'
import { styled } from '../../../theme'

export type BaseAnchorProps = {
  active: boolean
  positionData: positionData | undefined
  href: string | undefined
  ref: Ref<HTMLAnchorElement>
}

export const Anchor = styled.a`
  font-family: ${props => props.theme.fonts.sans};
  font-weight: ${props => props.theme.fontWeights[1]};
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.colours.lightText};
  cursor: pointer;

  &:after {
    content: '';
    display: block;
  }

  @media screen and (pointer: fine) {
    transition: text-shadow
      ${props =>
        `${props.theme.animation.timing[0]} ${props.theme.animation.curve}`};

    &:hover {
      text-shadow: ${props => props.theme.textShadow};
    }
  }
`
