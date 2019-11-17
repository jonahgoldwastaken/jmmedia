import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { NavButton } from '../../components/Common'
import Background from '../../components/Common/Background'
import Footer from '../../components/Footer'
import {
  Film,
  FilmContext,
  FilmDetails,
  FilmHero,
  FilmTitle,
} from '../../components/Project'
import ContentSection, {
  SectionColumn,
  SectionHeading,
  SectionImage,
  SectionParagraph,
} from '../../components/Section'

const Awakening: NextPage = () => {
  return (
    <>
      <Head>
        <title>Awakening - Jonah Meijers</title>
      </Head>
      <Background currentPage="/films/awakening">
        <FilmHero background="https://storage.googleapis.com/filmportfolio/film/awakening/placeholder.png">
          <FilmContext.Consumer>
            {({ state }) => (
              <Link href="/film">
                <NavButton hide={state === 'open'} icon="arrow-left" />
              </Link>
            )}
          </FilmContext.Consumer>
          <FilmTitle>Awakening</FilmTitle>
          <FilmDetails>Productvideo - 2017</FilmDetails>
          <Film src="https://storage.googleapis.com/filmportfolio/film/awakening/film.mp4" />
        </FilmHero>
        <ContentSection>
          <SectionColumn column={[1, 2, 2]} span={[1, 1, 2]}>
            <SectionImage
              first
              src="https://storage.googleapis.com/filmportfolio/film/awakening/productfoto.jpg"
              alt="Productfoto Awakening"
            />
          </SectionColumn>
          <SectionColumn column={[2, 3, 4]} span={[1, 2, 2]}>
            <SectionHeading light>
              Oordopjes die je overal doen slapen
            </SectionHeading>
            <SectionParagraph light>
              Dat was de boodschap die we over wilden brengen in deze
              productvideo. Het concept moest duidelijk gemaakt worden in minder
              dan een minuut aan schermtijd, dus veel speelruimte hadden we
              niet. Door aangrijpende humor te gebruiken houden we de aandacht
              van de kijker erbij. Hierdoor wordt de boodschap van de video op
              een aangrijpende en grappige manier overgebracht.
            </SectionParagraph>
          </SectionColumn>
        </ContentSection>
        <ContentSection dark>
          <SectionColumn column={[1, 2, 2]} span={[1, 2, 1]}>
            <SectionHeading light>Een leerzaam schoolproject</SectionHeading>
            <SectionParagraph light>
              Nou bestaat het getoonde product niet echt, het was toch een zeer
              leerzame ervaring. Van een simpel idee tot storyboard, shotlist,
              planning en een professioneel aangeklede crew en een filmpje waar
              we met zijn allen trots op waren en zijn. We kregen ook nog eens
              de docent die het project begeleidde aan het lachen!
            </SectionParagraph>
          </SectionColumn>
        </ContentSection>
        <Footer>Is een aangrijpende productvideo wat voor jou?</Footer>
      </Background>
    </>
  )
}

export default Awakening
