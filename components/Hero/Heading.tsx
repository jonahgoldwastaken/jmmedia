import { styled } from '../../theme'

export const HeroHeading = styled.p`
  position: relative;
  margin: 0;
  max-width: ${props => props.theme.sizes.static[2]};
  font-family: 'Red Hat Display', sans-serif;
  text-align: center;
  font-size: ${props => props.theme.fontSizes[3]};
  font-weight: ${props => props.theme.fontWeights[1]};
  text-shadow: ${props => props.theme.textShadow};
  color: ${props => props.theme.colors.primary};
  z-index: 2;
`
