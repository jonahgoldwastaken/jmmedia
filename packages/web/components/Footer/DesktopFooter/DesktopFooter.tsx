import { motion, Transition, Variants } from 'framer-motion'
import { useMemo } from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { animation } from 'theme/animation'
import { DesktopFooterContact } from './Contact'
import { DesktopFooterNav } from './Nav'
import { DesktopFooterProjects } from './Projects'
import { DesktopFooterServices } from './Services'

const StyledDiv = motion.custom(styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colours.primary};
`)

const footerVariants: Variants = {
  initial: {
    clipPath: 'inset(100% 0% 0% 0%)',
  },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
  },
  exit: {
    clipPath: 'inset(0% 0% 100% 0%)',
  },
}

const footerTransition: Transition = {
  ease: animation.curve,
  duration: animation.timing[1],
}

const StyledFooter = styled.footer`
  height: ${({ theme }) => theme.heights[2]};
  max-width: 64rem;
  margin: 0 auto;
  z-index: 10;
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[1]}`};
  display: flex;
  flex-direction: row;

  @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
    max-width: 96rem;
  }
`

export const DesktopFooter: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true })
  const key = useMemo(() => Math.random(), [inView])

  return (
    <StyledDiv
      ref={ref}
      key={key}
      variants={inView ? footerVariants : { initial: footerVariants.initial }}
      transition={footerTransition}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <StyledFooter>
        <DesktopFooterNav />
        <DesktopFooterServices />
        <DesktopFooterProjects />
        <DesktopFooterContact />
      </StyledFooter>
    </StyledDiv>
  )
}
