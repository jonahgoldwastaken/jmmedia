import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: stretch;
  width: 100%;
`

export const Footer: React.FunctionComponent = ({ children }) => {
  return <StyledFooter>{children}</StyledFooter>
}
