import Head from 'next/head'
import Header from '../components/Header'
import { HeadingOne, HeadingTwo } from '../components/Text/Headings'
import Landing from '../components/Landing'
import Section from '../components/Section'

export default () => {
  return (
    <>
      <Head>
        <title>Jonah Meijers</title>
      </Head>
      <Header />
      <main>
        <Landing>
          <HeadingOne centre>Verhalen vertellen die ertoe doen</HeadingOne>
        </Landing>
        <Section background="secondary">
          <HeadingTwo>Test</HeadingTwo>
        </Section>
      </main>
    </>
  )
}
