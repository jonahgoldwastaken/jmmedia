import { Logo } from 'components/Logo'
import styled from 'styled-components'
import { HeaderNav } from './HeaderNav'

const StyledDiv = styled.div`
  background: ${props => props.theme.colours.tertiary};
  width: 100%;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 99999;
  }
`

const StyledHeader = styled.header`
  max-width: 64rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing[1]};

  @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
    max-width: 96rem;
  }
`

export const Header: React.FC = () => {
  return (
    <StyledDiv>
      <StyledHeader>
        <Logo />
        <HeaderNav />
      </StyledHeader>
    </StyledDiv>
  )
}
