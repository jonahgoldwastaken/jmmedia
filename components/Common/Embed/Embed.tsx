import { styled } from '../../../theme'

export const Embed = styled.iframe`
  display: block;
  margin: auto;
  width: ${props => props.theme.sizes.dynamic[2]};
  height: ${props => props.theme.sizes.height[2]};
`
