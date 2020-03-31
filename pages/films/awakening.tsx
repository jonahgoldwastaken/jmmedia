import { NextPage } from 'next'
import Head from 'next/head'
import Background from '../../components/Common/Background'
import {
  Film,
  FilmDetails,
  FilmHero,
  FilmTitle,
} from '../../components/Film/Project'
import ContentSection, {
  SectionHeading,
  SectionImage,
  SectionParagraph,
} from '../../components/Section'
import Footer from '../../components/Footer'

const Awakening: NextPage = () => {
  return (
    <>
      <Head>
        <title>Awakening - Jonah Meijers</title>
      </Head>
      <Background currentPage="/films/awakening">
        <FilmHero>
          <FilmTitle>Awakening</FilmTitle>
          <FilmDetails>Productvideo - 2017</FilmDetails>
          <Film
            poster="https://storage.googleapis.com/filmportfolio/film/awakening/placeholder.png"
            src="https://storage.googleapis.com/filmportfolio/film/awakening/film.mp4"
          />
        </FilmHero>
        <ContentSection>
          <SectionHeading>Oordopjes die je overal doen slapen</SectionHeading>
          <SectionImage
            first
            src="https://storage.googleapis.com/filmportfolio/film/awakening/productfoto.jpg"
            alt="Productfoto Awakening"
          />
          <SectionParagraph>
            Dat was de boodschap die we over wilden brengen in deze
            productvideo. Het concept moest duidelijk gemaakt worden in minder
            dan een minuut aan schermtijd, dus veel speelruimte hadden we niet.
            Door aangrijpende humor te gebruiken houden we de aandacht van de
            kijker erbij. Hierdoor wordt de boodschap van de video op een
            aangrijpende en grappige manier overgebracht.
          </SectionParagraph>
          <SectionHeading>Een leerzaam schoolproject</SectionHeading>
          <SectionParagraph>
            Nou bestaat het getoonde product niet echt, het was toch een zeer
            leerzame ervaring. Van een simpel idee tot storyboard, shotlist,
            planning en een professioneel aangeklede crew en een filmpje waar we
            met zijn allen trots op waren en zijn. We kregen ook nog eens de
            docent die het project begeleidde aan het lachen!
          </SectionParagraph>
        </ContentSection>
        <Footer>Is een aangrijpende productvideo wat voor jou?</Footer>
      </Background>
    </>
  )
}

export default Awakening
