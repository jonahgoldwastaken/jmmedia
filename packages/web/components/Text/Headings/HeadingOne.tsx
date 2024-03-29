import { motion } from 'framer-motion'
import styled from 'styled-components'
import { BaseHeading } from './BaseHeading'

export const HeadingOne = motion.custom(styled(BaseHeading)`
  ${props => props.noMargin && 'margin: 0 !important;'}
  font-size: ${props => props.theme.fontSizes[4]};
  font-weight: ${props => props.theme.fontWeights[3]};
  color: ${props =>
    props.colour
      ? props.colour === 'secondary' && props.theme.colours.tertiary
      : props.theme.colours.secondary};


  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: ${props => props.theme.fontSizes[5]};
  }
`)
