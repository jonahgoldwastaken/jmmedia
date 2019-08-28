import { styled } from '../../theme'

export const HeroHeader = styled.header`
  width: 100%;
  height: ${props => props.theme.sizes.height[3]};
  background: ${props => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
