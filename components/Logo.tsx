import styled, { ThemeContext } from 'styled-components'
import { useContext } from 'react'

const StyledImg = styled.img`
  width: 13.375rem;
  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    width: 6.8125rem;
  }
`

export const Logo: React.FunctionComponent = () => {
  const theme = useContext(ThemeContext)
  return <StyledImg src={theme.logo} />
}
