import MediaQueryContext from 'components/MediaQueryContext'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import styled from 'styled-components'
import DarkLogo from './logo-dark.svg'
import LightLogo from './logo-light.svg'

type LogoProps = {}

const LogoContainer = motion.custom(styled.div<LogoProps>`
  width: 6.8125rem;
`)

export const Logo: React.FC<LogoProps> = () => {
  const { darkMode } = useContext(MediaQueryContext)
  return (
    <LogoContainer>{darkMode ? <DarkLogo /> : <LightLogo />}</LogoContainer>
  )
}
