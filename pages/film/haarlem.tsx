import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Background, NavButton } from '../../components/Common'
import Footer from '../../components/Footer'
import {
  Film,
  FilmContext,
  FilmDetails,
  FilmHero,
  FilmTitle,
} from '../../components/Project/Film'
import ContentSection, {
  SectionColumn,
  SectionHeading,
  SectionParagraph,
} from '../../components/Section'

export const Haarlem: NextPage = () => {
  return (
    <>
      <Head>
        <title>Haarlem - Jonah Meijers</title>
      </Head>
      <Background currentPage="/film/awakening">
        <FilmHero background="https://storage.googleapis.com/filmportfolio/film/haarlem/placeholder.png">
          <FilmContext.Consumer>
            {({ state }) => (
              <Link href="/film">
                <NavButton hide={state === 'open'} icon="arrow-left" />
              </Link>
            )}
          </FilmContext.Consumer>
          <FilmTitle>Haarlem</FilmTitle>
          <FilmDetails>Conceptvideo - 2019</FilmDetails>
          <Film src="https://storage.googleapis.com/filmportfolio/film/haarlem/film.mp4" />
        </FilmHero>
        <ContentSection>
          <SectionColumn column={[1, 2, 3]} span={[1, 2, 2]}>
            <SectionHeading light>Een bewegend nummer</SectionHeading>
            <SectionParagraph light>
              Soms krijg je een muziekstuk voorgeschoteld dat je op een bepaalde
              manier beweegt. We hebben allemaal wel onze nummers, stukken,
              ensembles of hoe het ook mag heten, die een belangrijke rol spelen
              in het heden of in ons verleden. Dit prachtige nummer van Joep
              Beving bewoog me zo onwijs dat ik niet stil kon blijven zitten en
              er iets mee moest doen. Dit is het resultaat van die impuls.
              Misschien wat te simpel, maar ik ben onwijs blij met het
              resultaat.
            </SectionParagraph>
          </SectionColumn>
        </ContentSection>
        <Footer>Zelf een meeslepend idee?</Footer>
      </Background>
    </>
  )
}

export default Haarlem
