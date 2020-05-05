import styled from 'styled-components'
import { Logo } from '../Logo'
import { HeaderNav } from './HeaderNav'

type HeaderProps = {
  noLogo?: boolean
}

const StyledHeader = styled.header`
  background: ${props => props.theme.colours.tertiary};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing[1]};

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 99999;
  }
`

export const Header: React.FunctionComponent<HeaderProps> = ({ noLogo }) => {
  return (
    <StyledHeader>
      {!noLogo && <Logo />}
      <HeaderNav />
    </StyledHeader>
  )
}
