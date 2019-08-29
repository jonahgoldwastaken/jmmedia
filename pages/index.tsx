import Head from 'next/head'
import Hero, { HeroHeading } from '../components/Hero'
import HeroNav from '../components/Hero/Nav'
import { NavAnchor } from '../components/Hero/Nav/Anchor'
import { NavItem } from '../components/Hero/Nav/Item'
import Link from 'next/link'

export default () => {
  return (
    <>
      <Head>
        <title>Jonah Meijers</title>
      </Head>
      <Hero>
        <HeroHeading>Jonah Meijers</HeroHeading>
        <HeroNav>
          <NavItem>
            <Link href="/#" passHref>
              <NavAnchor
                bgVideo="https://ak6.picdn.net/shutterstock/videos/27590086/preview/stock-footage-attractive-young-businesswoman-working-at-night-via-computer-at-office-with-closeup-of-hipster.mp4"
                disabled
              >
                Fotografie
              </NavAnchor>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/film" passHref>
              <NavAnchor bgVideo="https://ak0.picdn.net/shutterstock/videos/1021491520/preview/stock-footage-the-information-on-the-bills-are-fake-placeholder-name-is-use-paying-bills-using-a-laptop.mp4">
                Film
              </NavAnchor>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/#" passHref>
              <NavAnchor
                bgVideo="https://ak4.picdn.net/shutterstock/videos/1014949114/preview/stock-footage-top-view-young-diverse-marketing-research-team-brainstorming-working-on-startup-business-solution.mp4"
                disabled
              >
                Over mij
              </NavAnchor>
            </Link>
          </NavItem>
        </HeroNav>
      </Hero>
    </>
  )
}
