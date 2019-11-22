import { styled } from '../../../theme'
import { NavButton } from '../../Common'

export const ListButton = styled(NavButton)`
  position: static;
  margin-left: ${props => props.theme.space[2]};
  font-size: ${props => props.theme.fontSizes[1]};
`
