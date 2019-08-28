import { styled } from '../../../theme'
import { NavAnimation } from './Animation'

export const NavItem = styled.li`
  margin: 0;
  opacity: 0;
  flex: 1;
  display: inline-flex;
  &:nth-child(1) {
    justify-content: flex-start;
    animation: ${NavAnimation}
      ${props => `${props.theme.animation.timing[1]} 
      ${props.theme.animation.curve}`}
      forwards;
  }
  &:nth-child(2) {
    justify-content: center;
    animation: ${NavAnimation}
      ${props => `${props.theme.animation.timing[1]} 
      ${props.theme.animation.curve} ${props.theme.animation.timing[0]}`}
      forwards;
  }
  &:nth-child(3) {
    justify-content: flex-end;
    animation: ${NavAnimation}
      ${props => `${props.theme.animation.timing[1]} 
      ${props.theme.animation.curve} ${props.theme.animation.timing[1]}`}
      forwards;
  }
`
