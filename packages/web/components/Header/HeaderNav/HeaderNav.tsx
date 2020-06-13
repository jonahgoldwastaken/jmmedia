import { NavList } from 'components/Nav'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import styled from 'styled-components'
import { animation } from 'theme/animation'
import { HeaderNavLink } from './Link'

const StyledNav = styled.nav`
  display: none;

  &:only-child {
    margin: 1rem 0 1rem auto;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    display: block;
  }
`

const anchorVariants: Variants = {
  hidden: {
    opacity: 0,
    x: '100%',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: animation.curve,
      duration: animation.timing[1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      ease: animation.curve,
      duration: animation.timing[1],
    },
  },
}

const listVariants: Variants = {
  hidden: {
    transition: {},
  },
  visible: {
    transition: {
      staggerChildren: animation.timing[0] / 2,
      staggerDirection: -1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0,
    },
  },
}

export const HeaderNav: React.FC = () => (
  <StyledNav>
    <NavList
      animate="visible"
      initial="hidden"
      exit="exit"
      variants={listVariants}
    >
      <motion.li variants={anchorVariants}>
        <Link scroll={false} passHref href="/">
          <HeaderNavLink>Home</HeaderNavLink>
        </Link>
      </motion.li>
      <motion.li variants={anchorVariants}>
        <Link scroll={false} passHref href="/about">
          <HeaderNavLink>Over</HeaderNavLink>
        </Link>
      </motion.li>
      <motion.li variants={anchorVariants}>
        <Link scroll={false} passHref href="/services">
          <HeaderNavLink>Services</HeaderNavLink>
        </Link>
      </motion.li>
      <motion.li variants={anchorVariants}>
        <Link scroll={false} passHref href="/projects">
          <HeaderNavLink>Projecten</HeaderNavLink>
        </Link>
      </motion.li>
      <motion.li variants={anchorVariants}>
        <HeaderNavLink href="mailto:hoi@jonahmeijers.nl?SUBJECT=Aanvraag:%20">
          Contact
        </HeaderNavLink>
      </motion.li>
    </NavList>
  </StyledNav>
)
