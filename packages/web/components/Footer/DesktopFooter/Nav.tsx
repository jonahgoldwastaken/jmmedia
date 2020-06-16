import Link from 'next/link'
import styled from 'styled-components'
import { DesktopFooterContainer } from './Container'
import { DesktopFooterHeading } from './Heading'
import { DesktopFooterList, DesktopFooterListItem } from './List'

const StyledNav = styled.nav`
  display: inline;
`

export const DesktopFooterNav: React.FC = () => (
  <DesktopFooterContainer>
    <StyledNav>
      <DesktopFooterHeading>Links</DesktopFooterHeading>
      <DesktopFooterList>
        <DesktopFooterListItem>
          <Link href="/" scroll={false}>
            <a>Home</a>
          </Link>
        </DesktopFooterListItem>
        <DesktopFooterListItem>
          <Link href="/about" scroll={false}>
            <a>Over ons</a>
          </Link>
        </DesktopFooterListItem>
        <DesktopFooterListItem>
          <Link href="/services" scroll={false}>
            <a>Services</a>
          </Link>
        </DesktopFooterListItem>
        <DesktopFooterListItem>
          <Link href="/projects" scroll={false}>
            <a>Projecten</a>
          </Link>
        </DesktopFooterListItem>
        <DesktopFooterListItem>
          <Link href="/contact" scroll={false}>
            <a>Contact</a>
          </Link>
        </DesktopFooterListItem>
      </DesktopFooterList>
    </StyledNav>
  </DesktopFooterContainer>
)
