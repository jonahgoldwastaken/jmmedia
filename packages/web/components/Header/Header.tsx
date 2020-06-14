import { Logo } from 'components/Logo'
import styled from 'styled-components'
import { HeaderNav } from './HeaderNav'

const StyledDiv = styled.div`
  width: 100%;
  position: relative;
  z-index: 10;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    background: ${props => props.theme.colours.tertiary};
    position: sticky;
    top: 0;
    left: 0;
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
