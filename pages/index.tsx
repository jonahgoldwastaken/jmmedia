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
            <NavLink href="/#" bgVideo="" disabled>
              Fotografie
            </NavLink>
            <NavLink
              href="/film"
              bgVideo="https://storage.googleapis.com/filmportfolio/film/background.mp4"
            >
              Film
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
