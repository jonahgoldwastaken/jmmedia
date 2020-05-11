import styled from 'styled-components'
import { FooterNav } from './FooterNav'

const StyledFooter = styled.footer`
  position: sticky;
  bottom: 0;
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
