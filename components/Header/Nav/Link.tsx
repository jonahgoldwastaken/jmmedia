import Link from 'next/link'
import styled, { keyframes, css } from 'styled-components'

type NavLinkProps = {
  href: string
  children: string
  active?: boolean
}

type AnchorProps = {
  active: boolean
}

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
