import styled from 'styled-components'
import { FooterNav } from './FooterNav'

const StyledFooter = styled.footer`
  position: sticky;
  top: calc(100vh);
  display: flex;
  justify-content: stretch;
  width: 100%;
`

export const Footer: React.FunctionComponent = ({ children }) => {
  return (
    <StyledFooter>
      {children}
      <FooterNav />
    </StyledFooter>
  )
}
