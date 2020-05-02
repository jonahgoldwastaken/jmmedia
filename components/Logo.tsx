import styled, { ThemeContext } from 'styled-components'
import { useContext } from 'react'

type LogoProps = {
  size?: 'large' | 'small'
}

const SmallLogo = styled.img`
  width: 6.8125rem;
`

const LargeLogo = styled.img`
  width: 13.375rem;
`

export const Logo: React.FunctionComponent<LogoProps> = props => {
  const themeContext = useContext(ThemeContext)
  const size = props.size || 'small'
  return size === 'small' ? (
    <SmallLogo src={themeContext.logo} alt="JM Logo" />
  ) : (
    <LargeLogo src={themeContext.logo} alt="JM Logo" />
  )
}
