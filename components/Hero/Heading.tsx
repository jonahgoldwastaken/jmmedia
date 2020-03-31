import styled from 'styled-components'
import { Heading } from '../Common'

export const HeroHeading = styled(Heading)`
  position: relative;
  z-index: 2;
  width: 100%;
  text-align: center;
  margin-bottom: ${props => props.theme.space[1]};

  @media screen and (max-width: ${props => props.theme.breakpoints[1]}) {
    padding-top: ${props => props.theme.space[2]};
    margin-bottom: ${props => props.theme.space[2]};
  }
`
