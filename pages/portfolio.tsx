import Head from 'next/head'
import Footer, { FooterLink } from '../components/Footer'
import Header from '../components/Header'
import PortfolioList from '../components/Portfolio/List'

export default () => (
  <>
    <Head>
      <title>Portfolio - JM</title>
    </Head>
    <Header />
    <main>
      <PortfolioList heading="Samenwerkingen" />
      <PortfolioList heading="Eigen werken" ownWork />
    </main>
    <Footer>
      <FooterLink
        colour="secondary"
        href="mailto:hoi@jonahmeijers.nl?SUBJECT=Aanvraag:%20"
      >
        Hier ook tussen willen staan?
      </FooterLink>
    </Footer>
  </>
)
