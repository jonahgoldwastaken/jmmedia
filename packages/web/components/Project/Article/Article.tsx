import { motion, Transition, Variants } from 'framer-motion'
import styled from 'styled-components'
import { animation } from 'theme/animation'

const StyledArticle = motion.custom(styled.article`
  padding: ${props =>
    `${props.theme.spacing[1]} ${props.theme.spacing[1]} calc(${props.theme.spacing[2]} * 1.5)`};
  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    margin: auto;
    max-width: 64rem;
    padding: ${props =>
      `${props.theme.spacing[1]} ${props.theme.spacing[2]} 0`};
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
    max-width: 96rem;
  }
`)

const articleVariants: Variants = {
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

const articleTransition: Transition = {
  ease: animation.curve,
  duration: animation.timing[1],
  delayChildren: animation.timing[1],
}

export const Article: React.FC = props => (
  <StyledArticle
    variants={articleVariants}
    transition={articleTransition}
    initial="initial"
    animate="visible"
    exit="exit"
    {...props}
  />
)
