import styled, { css, keyframes } from 'styled-components'
import Link from 'next/link'

type HeaderProps = {
  active: number
}

type NavLinkProps = {
  href: string
  children: string
  active?: boolean
}

type AnchorProps = {
  active: boolean
}

const StyledHeader = styled.header`
  padding-top: 1.5rem;
  padding-bottom: 0;
  background: #151515;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeaderHeading = styled.h1`
  margin: 0;
  margin-bottom: 3rem;
  font-family: 'Red Hat Display', sans-serif;
  font-size: 4rem;
  text-align: center;
  color: white;
`

const StyledNav = styled.nav`
  width: 80rem;

  ul {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  li {
    flex: 1;
    text-align: center;

    &:not(:last-child) {
      padding-right: 0.5em;
    }

    &:not(:first-child) {
      padding-left: 0.5em;
    }
  }
`

const ActiveAnchorAnimation = keyframes`
  from {
    width: 0%;
    margin-left: 50%;
  }
  to {
    width: 100%;
    margin-left: 0%;
  }
`

const StyledAnchor = styled.a<AnchorProps>`
  display: block;
  color: white;
  font-family: 'Merriweather', serif;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;

  &:after {
    display: block;
    content: '';
    height: 100%;
    padding-bottom: 1.15rem;
    border-bottom: 0.2rem solid white;
    width: 0%;
    margin-left: 50%;
    ${props =>
      props.active &&
      css`
        animation: ${ActiveAnchorAnimation} 0.4s ease-in-out forwards;
      `};
  }
`

const HeaderNav: React.FunctionComponent = ({ children }) => (
  <StyledNav>
    <ul>{children}</ul>
  </StyledNav>
)

const NavLink: React.FunctionComponent<NavLinkProps> = ({
  href,
  children,
  active,
}) => (
  <li>
    <Link href={href} passHref>
      <StyledAnchor active={active}>{children}</StyledAnchor>
    </Link>
  </li>
)

const Header: React.FunctionComponent<HeaderProps> = ({ active }) => {
  return (
    <StyledHeader>
      <HeaderHeading>Jonah Meijers</HeaderHeading>
      <HeaderNav>
        <NavLink active={active === 0} href="#">
          Film
        </NavLink>
        <NavLink active={active === 1} href="#">
          Fotografie
        </NavLink>
        <NavLink active={active === 2} href="#">
          Animatie
        </NavLink>
        <NavLink active={active === 3} href="#">
          Over mij
        </NavLink>
      </HeaderNav>
    </StyledHeader>
  )
}

export default Header
