import { Transition, Variants } from 'framer-motion'
import styled from 'styled-components'
import { animation } from 'theme/animation'

export interface HeadingProps {
  colour?: 'primary' | 'secondary'
  centre?: boolean
  noMargin?: boolean
}

export const headingVariants: Variants = {
  initial: {
    y: '50%',
    opacity: 0,
  },
  visible: {
    y: '0%',
    opacity: 1,
  },
  exit: {
    y: '-50%',
    opacity: 0,
  },
}

export const headingTransition: Transition = {
  ease: animation.curve,
  duration: animation.timing[1],
}

export const BaseHeading = styled.h1<HeadingProps>`
  font-family: ${props => props.theme.fontFamilies.heading};
  letter-spacing: 0.03125em;
  line-height: 1em;
  text-transform: uppercase;
  margin: 0;
  &:not(:only-child) {
    margin: 0 0 ${props => props.theme.spacing[1]};

    @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
      margin: 0 0 ${props => props.theme.spacing[2]};
    }
  }
`
