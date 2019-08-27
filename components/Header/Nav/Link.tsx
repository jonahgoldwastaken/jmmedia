import Link from 'next/link'
import { keyframes, css } from 'styled-components'
import { styled } from '../../../theme'

type NavLinkProps = {
  href: string
  children: string
  active?: boolean
  disabled?: boolean
}

type AnchorProps = {
  active: boolean
  disabled: boolean
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
  color: ${props =>
    props.disabled ? props.theme.colors.disabled : props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.serif};
  font-weight: ${props => props.theme.fontWeights[2]};
  text-transform: uppercase;
  text-decoration: ${props => (props.disabled ? 'line-through' : 'none')};
  pointer-events: ${props => props.disabled && 'none'};

  &:after {
    display: block;
    content: '';
    height: ${props => props.theme.sizes.dynamic[2]};
    padding-bottom: ${props => props.theme.space[1]};
    border-bottom: ${props => props.theme.borderWidth} solid white;
    width: 0%;
    margin-left: 50%;
    ${props =>
      props.active &&
      css`
        animation: ${ActiveAnchorAnimation} ${props => props.theme.timing}
          forwards;
      `};
  }
`

export const NavLink: React.FunctionComponent<NavLinkProps> = ({
  href,
  children,
  active,
  disabled,
}) => (
  <li>
    <Link href={href} passHref>
      <StyledAnchor disabled={disabled} active={active}>
        {children}
      </StyledAnchor>
    </Link>
  </li>
)
