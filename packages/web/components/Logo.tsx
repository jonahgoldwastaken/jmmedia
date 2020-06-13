import { motion, Variants } from 'framer-motion'
import { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { animation } from 'theme/animation'
type LogoProps = {}

const imageVariants: Variants = {
  initial: {
    opacity: 0,
    x: '-100%',
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: animation.timing[1],
      ease: animation.curve,
    },
  },
  exit: {
    scale: 0,
    transition: {
      duration: animation.timing[0],
      ease: animation.curve,
    },
  },
}

const StyledImg = motion.custom(styled.img<LogoProps>`
  width: 6.8125rem;
`)

export const Logo: React.FC<LogoProps> = props => {
  const theme = useContext(ThemeContext)
  return (
    <StyledImg
      initial="initial"
      animate="enter"
      exit="exit"
      variants={imageVariants}
      {...props}
      src={theme.logo}
    />
  )
}
