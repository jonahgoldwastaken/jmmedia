import Link from 'next/link'
import styled from 'styled-components'
import { FooterHeading } from './Heading'
import { DestkopFooterLink } from './Link'
import { FooterList } from './List'

const StyledNav = styled.nav`
  display: inline;
`

export const DesktopFooterNav: React.FC = () => (
  <StyledNav>
    <FooterHeading>Links</FooterHeading>
    <FooterList>
      <Link href="/about" passHref scroll={false}>
        <DestkopFooterLink>Over ons</DestkopFooterLink>
      </Link>
      <Link href="/services" passHref scroll={false}>
        <DestkopFooterLink>Services</DestkopFooterLink>
      </Link>
      <Link href="/projects" passHref scroll={false}>
        <DestkopFooterLink>Projecten</DestkopFooterLink>
      </Link>
      <Link href="/contact" passHref scroll={false}>
        <DestkopFooterLink>Contact</DestkopFooterLink>
      </Link>
    </FooterList>
  </StyledNav>
)
