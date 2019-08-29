import { styled } from '../../theme'

export const HeroHeader = styled.header`
  width: ${props => props.theme.sizes.dynamic[2]};
  height: ${props => props.theme.sizes.height[3]};
  background: ${props => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
