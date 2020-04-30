import styled from 'styled-components'

type LogoProps = {
  size?: 'large' | 'small'
}

const SmallLogo = styled.img`
  height: 3.5rem;
`

const LargeLogo = styled.img`
  height: 7rem;
`

export const Logo: React.FunctionComponent<LogoProps> = ({ size }) => {
  if (typeof size !== 'undefined' && size === 'large')
    return <SmallLogo img={} alt="JM Logo" />
  return <LargeLogo img={} alt="JM Logo" />
}
