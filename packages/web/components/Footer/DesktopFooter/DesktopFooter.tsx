import { motion, Transition, Variants } from 'framer-motion'
import getDocumentFontSize from 'libs/documentFontSize'
import { stripUnit } from 'polished'
import { useInView } from 'react-intersection-observer'
import styled, { useTheme } from 'styled-components'
import { animation } from 'theme/animation'
import { DesktopFooterContact } from './Contact'
import { DesktopFooterNav } from './Nav'
import { DesktopFooterProjects } from './Projects'
import { DesktopFooterServices } from './Services'

const StyledDiv = motion.custom(styled.div`
  position: sticky;
  top: 100vh;
  left: 0;

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
  const theme = useTheme()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: `${stripUnit(theme.heights[2]) * getDocumentFontSize()}px`,
  })

  return (
    <StyledDiv
      ref={ref}
      key={inView ? 'inViewFooter' : 'outOfViewFooter'}
      variants={inView ? footerVariants : { initial: footerVariants.initial }}
      transition={footerTransition}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <StyledFooter>
        <DesktopFooterNav />
        <DesktopFooterServices inView={inView} />
        <DesktopFooterProjects inView={inView} />
        <DesktopFooterContact />
      </StyledFooter>
    </StyledDiv>
  )
}
