import Head from 'next/head'
import Footer, { FooterLink } from '../components/Footer'
import Header from '../components/Header'
import { List } from '../components/Portfolio/List/List'

export default () => (
  <>
    <Head>
      <title>Portfolio - JM</title>
    </Head>
    <Header />
    <main>
      <List heading="Samenwerkingen" />
      <List heading="Eigen werken" ownWork />
    </main>
    <Footer>
      <FooterLink
        colour="primary"
        href="mailto:hoi@jonahmeijers.nl?SUBJECT=Aanvraag:%20"
      >
        Hier ook tussen willen staan?
      </FooterLink>
    </Footer>
  </>
)
