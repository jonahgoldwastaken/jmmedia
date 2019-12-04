import Head from 'next/head'
import Background from '../components/Common/Background'
import Footer from '../components/Footer'
import Hero, { HeroHeading, HeroSubHeading } from '../components/Hero'
import Nav from '../components/Common/Nav'

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
          <Nav />
        </Hero>
        <Footer>Nu al overtuigd?</Footer>
      </Background>
    </>
  )
}
