import Head from 'next/head'
import Hero, { HeroHeading, HeroSubHeading } from '../components/Hero'
import HeroNav, { NavLink } from '../components/Hero/Nav'
import Footer from '../components/Footer'
import { Background } from '../components/Common'

export default () => {
  return (
    <>
      <Head>
        <title>Jonah Meijers</title>
      </Head>
      <Background currentPage="/">
        <Hero>
          <HeroHeading>Jonah Meijers</HeroHeading>
          <HeroSubHeading>Gepassioneerde filmmaker en fotograaf</HeroSubHeading>
          <HeroNav>
            <NavLink
              href="/#"
              bgVideo="https://ak6.picdn.net/shutterstock/videos/27590086/preview/stock-footage-attractive-young-businesswoman-working-at-night-via-computer-at-office-with-closeup-of-hipster.mp4"
              disabled
            >
              Fotografie
            </NavLink>
            <NavLink
              href="/film"
              bgVideo="https://ak0.picdn.net/shutterstock/videos/1021491520/preview/stock-footage-the-information-on-the-bills-are-fake-placeholder-name-is-use-paying-bills-using-a-laptop.mp4"
            >
              Film
            </NavLink>
            <NavLink
              href="/#"
              bgVideo="https://ak4.picdn.net/shutterstock/videos/1014949114/preview/stock-footage-top-view-young-diverse-marketing-research-team-brainstorming-working-on-startup-business-solution.mp4"
              disabled
            >
              Over mij
            </NavLink>
          </HeroNav>
        </Hero>
        <Footer>Nu al overtuigd?</Footer>
      </Background>
    </>
  )
}
