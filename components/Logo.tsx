import { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

type LogoProps = {
  noLarge?: boolean
}

const StyledImg = styled.img<LogoProps>`
  width: ${props => (props.noLarge ? '6.8125rem' : '13.375rem')};

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    width: 6.8125rem;
  }
`

export const Logo: React.FunctionComponent<LogoProps> = props => {
  const theme = useContext(ThemeContext)
  return <StyledImg {...props} src={theme.logo} />
}
