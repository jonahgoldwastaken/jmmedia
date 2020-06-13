import { motion, Variants } from 'framer-motion'
import styled from 'styled-components'
import { animation } from 'theme/animation'

export const itemVariants: Variants = {
  hidden: {
    height: 0,
  },
  visible: {
    height: '100%',
    transition: { ease: animation.curve, duration: animation.timing[1] },
  },
  exit: {
    height: 0,
    transition: { ease: animation.curve, duration: animation.timing[1] },
  },
}

export const ListItem = motion.custom(styled.li`
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
