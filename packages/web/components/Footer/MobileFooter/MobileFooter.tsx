import styled from 'styled-components'
import { MobileFooterNav } from './FooterNav'

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`

export const MobileFooter: React.FC = () => (
  <StyledFooter>
    <MobileFooterNav />
  </StyledFooter>
)
