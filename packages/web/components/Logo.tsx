import { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

type LogoProps = {
  noLarge?: boolean
}

const StyledImg = styled.img<LogoProps>`
  width: 6.8125rem;
`

export const Logo: React.FC<LogoProps> = props => {
  const theme = useContext(ThemeContext)
  return <StyledImg {...props} src={theme.logo} />
}
