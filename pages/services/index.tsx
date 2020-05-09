import Head from 'next/head'
import Header from '../../components/Header'
import Section from '../../components/Section'
import { HeadingOne, HeadingTwo } from '../../components/Text/Headings'
import { Paragraph } from '../../components/Text'
import Footer, { FooterLink } from '../../components/Footer'
import List, { ListItem } from '../../components/List'

export default () => (
  <>
    <Head>
      <title>Services - JM</title>
    </Head>
    <Header />
    <main>
      <HeadingOne centre>De services die ik aanbied</HeadingOne>
      <List maxRows={3}>
        <ListItem
          src="https://unsplash.com/photos/WSTF1QEUUWw/download?force=true"
          href="/services/service"
        >
          Je moeder
        </ListItem>
        <ListItem
          src="https://unsplash.com/photos/WSTF1QEUUWw/download?force=true"
          href="/services/service"
        >
          Je moeder
        </ListItem>
        <ListItem
          src="https://unsplash.com/photos/WSTF1QEUUWw/download?force=true"
          href="/services/service"
        >
          Je moeder
        </ListItem>
        <ListItem
          src="https://unsplash.com/photos/WSTF1QEUUWw/download?force=true"
          href="/services/service"
        >
          Je moeder
        </ListItem>
        <ListItem
          src="https://unsplash.com/photos/WSTF1QEUUWw/download?force=true"
          href="/services/service"
        >
          Je moeder
        </ListItem>
      </List>
      <Section centreContent fullHeight background="secondary">
        <HeadingTwo colour="secondary">Van begin tot eind</HeadingTwo>
        <Paragraph mAuto colour="secondary">
          Ik pas mijn werkwijze aan op het type opdracht en hoeveel
          voorbereiding al is getroffen voordat ik erbij betrokken ben geraakt.
          Zo haal ik altijd het maximale uit elke mogelijkheid en zorg ik ervoor
          dat kwalitatief hoogstaand werk wordt geleverd.
        </Paragraph>
      </Section>
    </main>
    <Footer>
      <FooterLink colour="primary" href="/about">
        Zie hier hoe JM in elkaar steekt
      </FooterLink>
      <FooterLink colour="primary" href="/portfolio">
        Bekijk hier het portfolio
      </FooterLink>
      <FooterLink
        colour="primary"
        href="mailto:hoi@jonahmeijers.nl?SUBJECT=Aanvraag:%20"
      >
        Begin een gesprek
      </FooterLink>
    </Footer>
  </>
)
