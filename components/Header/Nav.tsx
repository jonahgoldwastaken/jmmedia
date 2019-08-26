import styled, { css, keyframes } from 'styled-components'
import Link from 'next/link'

type NavLinkProps = {
  href: string
  children: string
  active?: boolean
}

type AnchorProps = {
  active: boolean
}

const StyledNav = styled.nav`
  max-width: 80rem;
  width: 100%;

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

export const NavLink: React.FunctionComponent<NavLinkProps> = ({
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

const HeaderNav: React.FunctionComponent = ({ children }) => (
  <StyledNav>
    <ul>{children}</ul>
  </StyledNav>
)

export default HeaderNav
