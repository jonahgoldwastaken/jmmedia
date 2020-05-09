import Head from 'next/head'
import CoverImage from '../components/CoverImage'
import Footer, { FooterLink } from '../components/Footer'
import Header from '../components/Header'
import Landing from '../components/Landing'
import Section from '../components/Section'
import { Paragraph } from '../components/Text'
import { HeadingOne, HeadingTwo } from '../components/Text/Headings'

export default () => {
  return (
    <>
      <Head>
        <title>JM - Leg verhalen vast</title>
      </Head>
      <Header />
      <main>
        <Landing>
          <HeadingOne centre>Verhalen vastleggen die ertoe doen</HeadingOne>
        </Landing>
        <Section background="secondary">
          <CoverImage
            colour="orange"
            src="https://unsplash.com/photos/oSvR0wGYUBs/download?force=true"
            transform={{
              left: 66,
            }}
          >
            Jouw nieuwe unieke product die de markt door gaat breken.
          </CoverImage>
          <CoverImage
            colour="grey"
            width={405}
            src="https://unsplash.com/photos/ZODcBkEohk8/download?force=true"
            transform={{
              top: 82.5,
              left: 121,
            }}
          >
            Een ervaring zo uniek dat ie voor altijd gekoesterd moet worden.
          </CoverImage>
          <CoverImage
            colour="grey"
            width={360}
            src="https://unsplash.com/photos/wn7dOzUh3Rs/download?force=true"
            transform={{
              top: 90,
              left: 110,
            }}
          >
            Een gebeurtenis die je voor altijd wilt koesteren.
          </CoverImage>
          <CoverImage
            colour="orange"
            width={270}
            src="https://unsplash.com/photos/wynMU8psYo4/download?force=true"
            transform={{
              top: 62,
              left: 130,
            }}
          >
            Een gebeurtenis die je voor altijd wilt koesteren.
          </CoverImage>
        </Section>
        <Section centreContent background="primary">
          <HeadingTwo centre>Zet het op foto of video!</HeadingTwo>
          <Paragraph centre>
            Ik ken wel een mannetje die dat voor elkaar kan krijgen.
          </Paragraph>
        </Section>
      </main>
      <Footer>
        <FooterLink colour="primary" href="/services">
          Bekijk het aanbod
        </FooterLink>
        <FooterLink colour="primary" href="/portfolio">
          Zie wie je voor zijn geweest
        </FooterLink>
        <FooterLink colour="primary" href="/about">
          Lees meer over JM
        </FooterLink>
        <FooterLink
          colour="primary"
          href="mailto:hoi@jonahmeijers.nl?SUBJECT=Aanvraag:%20"
        >
          Maak een babbeltje
        </FooterLink>
      </Footer>
    </>
  )
}
