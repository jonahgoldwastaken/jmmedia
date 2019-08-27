import { styled } from '../../theme'

export const HeroContainer = styled.section`
  position: relative;
  z-index: 2;
  height: ${props => props.theme.sizes.static[1]};
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-height: ${props => props.theme.breakpoints[1]}) {
    height: ${props => props.theme.sizes.height[1]};
  }

  @media screen and (max-height: ${props => props.theme.breakpoints[0]}) {
    height: ${props => props.theme.sizes.static[0]};
  }
`
