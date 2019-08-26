import Head from 'next/head'
import Header from '../components/Header'
import Hero, { HeroHeading } from '../components/Hero'

export default () => (
  <>
    <Head>
      <title>Over mij - Jonah Meijers</title>
    </Head>
    <Header active={2} />
    <Hero>
      <HeroHeading>Creatievling.</HeroHeading>
    </Hero>
  </>
)
