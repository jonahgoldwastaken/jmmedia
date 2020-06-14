import { NavList } from 'components/Nav'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { HeaderNavLink } from './Link'

const StyledNav = styled.nav`
  display: none;

  &:only-child {
    margin: 1rem 0 1rem auto;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    display: block;
  }
`

export const HeaderNav: React.FC = () => {
  const { route } = useRouter()
  return (
    <StyledNav>
      <NavList>
        <motion.li>
          <Link scroll={false} passHref href="/">
            <HeaderNavLink route={route}>Home</HeaderNavLink>
          </Link>
        </motion.li>
        <motion.li>
          <Link scroll={false} passHref href="/about">
            <HeaderNavLink route={route}>Over</HeaderNavLink>
          </Link>
        </motion.li>
        <motion.li>
          <Link scroll={false} passHref href="/services">
            <HeaderNavLink route={route}>Services</HeaderNavLink>
          </Link>
        </motion.li>
        <motion.li>
          <Link scroll={false} passHref href="/projects">
            <HeaderNavLink route={route}>Projecten</HeaderNavLink>
          </Link>
        </motion.li>
        <motion.li>
          <HeaderNavLink
            route={route}
            href="mailto:hoi@jonahmeijers.nl?SUBJECT=Aanvraag:%20"
          >
            Contact
          </HeaderNavLink>
        </motion.li>
      </NavList>
    </StyledNav>
  )
}
