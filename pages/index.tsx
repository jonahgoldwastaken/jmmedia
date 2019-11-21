import Head from 'next/head'
import Hero, { HeroHeading, HeroSubHeading } from '../components/Hero'
import HeroNav, { NavLink } from '../components/Hero/Nav'
import Footer from '../components/Footer'
import Background from '../components/Common/Background'

export default () => {
  return (
    <>
      <Head>
        <title>Jonah Meijers</title>
      </Head>
      <Background currentPage="/">
        <Hero>
          <HeroHeading>Jonah Meijers</HeroHeading>
          <HeroSubHeading>Gepassioneerde filmmaker</HeroSubHeading>
          <HeroNav>
            <NavLink
              href="/films"
              bgVideo="https://storage.googleapis.com/filmportfolio/film/background.mp4"
            >
              Films
            </NavLink>
            <NavLink
              href="/over"
              bgVideo="https://storage.googleapis.com/filmportfolio/over/background.mp4"
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
