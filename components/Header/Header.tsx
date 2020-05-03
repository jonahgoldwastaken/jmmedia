import styled, { ThemeContext } from 'styled-components'
import { HeaderNav } from './HeaderNav'
import { Logo } from '../Logo'
import useMedia from 'use-media'
import { useContext } from 'react'

const StyledHeader = styled.header`
  background: ${props => props.theme.colours.tertiary};
  padding: 0 0 ${props => props.theme.spacing[1]};
  display: flex;
  justify-content: center;
  align-items: center;

  nav {
    display: none;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    justify-content: space-between;

    nav {
      display: block;
    }
  }
`
export const Header: React.FunctionComponent = () => {
  const theme = useContext(ThemeContext)
  const isDesktop = useMedia({ minWidth: theme.breakpoints[1] })
  console.log(isDesktop)

  return (
    <StyledHeader>
      <Logo size={isDesktop ? 'small' : 'large'} />
      <HeaderNav />
    </StyledHeader>
  )
}
