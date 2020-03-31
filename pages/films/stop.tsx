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
  SectionParagraph,
} from '../../components/Section'
import Footer from '../../components/Footer'

export const Haarlem: NextPage = () => {
  return (
    <>
      <Head>
        <title>Stop - Jonah Meijers</title>
      </Head>
      <Background currentPage="/films/stop">
        <FilmHero>
          <FilmTitle>Stop</FilmTitle>
          <FilmDetails>Conceptvideo - 2019</FilmDetails>
          <Film
            poster="https://storage.googleapis.com/filmportfolio/film/haarlem/placeholder.png"
            src="https://storage.googleapis.com/filmportfolio/film/haarlem/film.mp4"
          />
        </FilmHero>
        <ContentSection>
          <SectionHeading>Muziek interpreteren in film</SectionHeading>
          <SectionParagraph>
            Soms krijg je een muziekstuk voorgeschoteld dat je op een bepaalde
            manier beweegt. We hebben allemaal wel onze nummers, stukken,
            ensembles of hoe het ook mag heten, die een belangrijke rol spelen
            in het heden of in ons verleden. Sleeping Lotus van Joep Beving is
            voor mij een moment van rust, stilte en duidelijkheid. Op momenten
            waarop je eigenlijk alleen maar door wil gaan om de huidige situatie
            te vermijden, is het misschien beter om even stil te staan.
          </SectionParagraph>
          <SectionParagraph>
            Die boodschap wil ik overbrengen in deze korte video. De benaming
            "conceptvideo" is misschien wat apart, maar dat is het in principe
            wel. Het concept van tijd nemen voor jezelf, om te reflecteren op
            wat er nou daadwerkelijk gaande is. Om afstand te nemen en serieus
            na te gaan waar je nu mee bezig bent. Ik hoop dat je er wat mee kan.
          </SectionParagraph>
        </ContentSection>
        <Footer>Zelf een meeslepend concept?</Footer>
      </Background>
    </>
  )
}

export default Haarlem
