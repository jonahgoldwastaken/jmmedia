import styled from 'styled-components'
import Link from 'next/link'

type NavLinkProps = {
  href: string
  children: string
  active?: boolean
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

const StyledAnchor = styled.a<{ active: boolean }>`
  display: block;
  padding-bottom: 1.15rem;
  color: white;
  font-family: 'Merriweather', serif;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  border-bottom: ${props => (props.active ? '.1rem' : '0px')} solid white;
`

const HeaderNav: React.FunctionComponent<{}> = ({ children }) => (
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

const Header: React.FunctionComponent<{}> = () => (
  <StyledHeader>
    <HeaderHeading>Jonah Meijers</HeaderHeading>
    <HeaderNav>
      <NavLink active href="#">
        Home
      </NavLink>
      <NavLink href="#">Video</NavLink>
      <NavLink href="#">Fotografie</NavLink>
      <NavLink href="#">Over mij</NavLink>
    </HeaderNav>
  </StyledHeader>
)

export default Header
