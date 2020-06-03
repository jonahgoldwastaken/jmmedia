import styled from 'styled-components'
import { FooterNav } from './FooterNav'

type FooterProps = {
  background?: 'primary' | 'secondary'
}

const StyledDiv = styled.div<FooterProps>`
  width: 100%;
  background: ${props =>
    props.background === 'secondary'
      ? props.theme.colours.primary
      : props.theme.colours.tertiary};
`

const StyledFooter = styled.footer`
  position: sticky;
  top: 100vh;
  display: flex;
  justify-content: stretch;
  max-width: 64rem;
  margin: 0 auto;

  @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
    max-width: 96rem;
  }
`

export const Footer: React.FC<FooterProps> = ({ children, background }) => {
  return (
    <StyledDiv background={background}>
      <StyledFooter>
        {children}
        <FooterNav />
      </StyledFooter>
    </StyledDiv>
  )
}
