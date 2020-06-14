import MediaQueryContext from 'components/MediaQueryContext'
import { motion, Transition, Variants } from 'framer-motion'
import { useContext } from 'react'
import styled from 'styled-components'
import { animation } from 'theme/animation'
import { FooterNav } from './FooterNav'

type FooterProps = {
  background?: 'primary' | 'secondary'
}

const StyledDiv = motion.custom(styled.div<FooterProps>`
  width: 100%;
  background: ${props =>
    props.background === 'secondary'
      ? props.theme.colours.primary
      : props.theme.colours.tertiary};
`)

const StyledFooter = styled.footer`
  position: sticky;
  top: 100vh;
  display: flex;
  justify-content: stretch;
  max-width: 64rem;
  margin: 0 auto;
  z-index: 10;

  @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
    max-width: 96rem;
  }
`

const footerVariants: Variants = {
  initial: {
    y: '6.875rem',
    opacity: 0,
  },
  visible: {
    y: '0rem',
    opacity: 1,
  },
  exit: {
    y: '-6.875rem',
    opacity: 0,
  },
}

const footerTransition: Transition = {
  ease: animation.curve,
  duration: animation.timing[1],
}

export const Footer: React.FC<FooterProps> = ({ children, background }) => {
  const { isMobile } = useContext(MediaQueryContext)

  if (!isMobile)
    return (
      <StyledDiv
        key="noMobileFooter"
        variants={footerVariants}
        transition={footerTransition}
        initial="initial"
        animate="visible"
        exit="exit"
        background={background}
      >
        <StyledFooter>
          {children}
          <FooterNav />
        </StyledFooter>
      </StyledDiv>
    )
  else
    return (
      <StyledDiv key="mobileFooter" background={background}>
        <StyledFooter>
          {children}
          <FooterNav />
        </StyledFooter>
      </StyledDiv>
    )
}
