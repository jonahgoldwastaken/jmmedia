import { motion, useAnimation, Variants } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { animation } from 'theme/animation'

export const itemVariants: Variants = {
  hidden: {
    clipPath: 'inset(100% 0% 0% 0%)',
  },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { ease: animation.curve, duration: animation.timing[1] },
  },
  exit: {},
}

const StyledLI = motion.custom(styled.li`
  display: block;
  grid-column: span 1;
  grid-row: span 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  a:hover q {
    text-decoration: underline;
  }
`)

export const ListItem: React.FC = props => {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [inView])

  return (
    <StyledLI variants={itemVariants} animate={controls} ref={ref} {...props} />
  )
}
