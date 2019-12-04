import { styled } from '../../theme'

export const Hero = styled.main`
  position: relative;
  width: ${props => props.theme.sizes.dynamic[2]};
  height: ${props => props.theme.sizes.height[3]};

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .page-transition-enter-active & {
      pointer-events: none;
    }
  }
`
