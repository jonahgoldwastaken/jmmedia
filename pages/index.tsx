import Head from 'next/head'
import { useState } from 'react'
import Hero, { HeroHeading } from '../components/Hero'
import { PageContext } from '../components/Page'
import HeroNav from '../components/Hero/Nav'
import { NavItem } from '../components/Hero/Nav/Item'
import { NavAnchor } from '../components/Hero/Nav/Anchor'
import { registerTransitions } from '../utils/page-transitions'

const Index = () => {
  const [isNavigating, setIsNavigating] = useState()
  return (
    <PageContext.Provider value={{ isNavigating, setIsNavigating }}>
      <Head>
        <title>Jonah Meijers</title>
      </Head>
      <Hero>
        <HeroHeading>Jonah Meijers</HeroHeading>
        <HeroNav>
          <NavItem>
            <NavAnchor
              bgVideo="https://ak6.picdn.net/shutterstock/videos/27590086/preview/stock-footage-attractive-young-businesswoman-working-at-night-via-computer-at-office-with-closeup-of-hipster.mp4"
              disabled
              href="/#"
              pageColour="#011638"
            >
              Fotografie
            </NavAnchor>
          </NavItem>
          <NavItem>
            <NavAnchor
              bgVideo="https://ak0.picdn.net/shutterstock/videos/1021491520/preview/stock-footage-the-information-on-the-bills-are-fake-placeholder-name-is-use-paying-bills-using-a-laptop.mp4"
              href="/film"
              pageColour="#011638"
            >
              Film
            </NavAnchor>
          </NavItem>
          <NavItem>
            <NavAnchor
              bgVideo="https://ak4.picdn.net/shutterstock/videos/1014949114/preview/stock-footage-top-view-young-diverse-marketing-research-team-brainstorming-working-on-startup-business-solution.mp4"
              disabled
              href="/#"
              pageColour="#011638"
            >
              Over mij
            </NavAnchor>
          </NavItem>
        </HeroNav>
      </Hero>
    </PageContext.Provider>
  )
}
export default registerTransitions(Index)
