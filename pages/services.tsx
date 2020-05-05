import Head from 'next/head'
import CoverImage from '../components/CoverImage'
import Header from '../components/Header'
import Section from '../components/Section'
import { HeadingOne, HeadingTwo } from '../components/Text/Headings'
import { Paragraph } from '../components/Text'
import Footer, { FooterLink } from '../components/Footer'

export default () => (
  <>
    <Head>
      <title>Services - JM</title>
    </Head>
    <Header />
    <main>
      <HeadingOne centre>De services die ik aanbied</HeadingOne>
      <CoverImage
        colour="grey"
        src="https://unsplash.com/photos/sQPJT2WBVJY/download?force=true"
        width={240}
        transform={{
          left: 92,
        }}
      >
        Productfilm en -fotografie
      </CoverImage>
      <CoverImage
        colour="orange"
        src="https://unsplash.com/photos/MRWHSKimBJk/download?force=true"
        width={480}
        transform={{
          left: 22,
        }}
      >
        Familiefoto's
      </CoverImage>
      <CoverImage
        colour="grey"
        src="https://unsplash.com/photos/TncriKEFStY/download?force=true"
        width={315}
        transform={{
          left: 340,
          top: 44,
        }}
      >
        Trouwerijen
      </CoverImage>
      <CoverImage
        colour="grey"
        src="https://unsplash.com/photos/TGV7pZMzCb4/download?force=true"
        width={240}
        transform={{
          left: 22,
          top: 22,
        }}
      >
        Concertfilm
      </CoverImage>
      <CoverImage
        colour="orange"
        src="https://unsplash.com/photos/PkS3hCZmYts/download?force=true"
        width={315}
        transform={{
          left: 48,
          top: -173.2,
        }}
      >
        Interviews
      </CoverImage>
      <CoverImage
        colour="orange"
        src="/portrait.jpeg"
        width={270}
        transform={{
          left: 22,
          top: -173.2,
        }}
      >
        Portretfoto's
      </CoverImage>
      <CoverImage
        colour="grey"
        src="https://unsplash.com/photos/Fk600Fgg_24/download?force=true"
        width={270}
        transform={{
          left: 22,
          top: 22,
        }}
      >
        Evenementen
      </CoverImage>
      <HeadingTwo centre>En nog veel meer...</HeadingTwo>
      <Section centreContent fullHeight background="secondary">
        <HeadingTwo servicesWidth colour="tertiary">
          Van begin tot eind
        </HeadingTwo>
        <Paragraph mAuto colour="white">
          Ik pas mijn werkwijze aan op het type opdracht en hoeveel
          voorbereiding al is getroffen voordat ik erbij betrokken ben geraakt.
          Zo haal ik altijd het maximale uit elke mogelijkheid en zorg ik ervoor
          dat kwalitatief hoogstaand werk wordt geleverd.
        </Paragraph>
      </Section>
    </main>
    <Footer>
      <FooterLink colour="secondary" href="/about">
        Zie hier hoe JM in elkaar steekt
      </FooterLink>
      <FooterLink colour="secondary" href="/portfolio">
        Bekijk hier het portfolio
      </FooterLink>
      <FooterLink
        colour="secondary"
        href="mailto:hoi@jonahmeijers.nl?SUBJECT=Aanvraag:%20"
      >
        Begin een gesprek
      </FooterLink>
    </Footer>
  </>
)
