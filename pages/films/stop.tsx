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
  SectionParagraph,
} from '../../components/Section'

export const Haarlem: NextPage = () => {
  return (
    <>
      <Head>
        <title>Stop - Jonah Meijers</title>
      </Head>
      <Background currentPage="/films/stop">
        <FilmHero background="https://storage.googleapis.com/filmportfolio/film/haarlem/placeholder.png">
          <FilmContext.Consumer>
            {({ state }) => (
              <Link href="/film">
                <NavButton hide={state === 'open'} icon="arrow-left" />
              </Link>
            )}
          </FilmContext.Consumer>
          <FilmTitle>Stop</FilmTitle>
          <FilmDetails>Conceptvideo - 2019</FilmDetails>
          <Film src="https://storage.googleapis.com/filmportfolio/film/haarlem/film.mp4" />
        </FilmHero>
        <ContentSection>
          <SectionColumn column={[1, 2, 3]} span={[2, 2, 2]}>
            <SectionHeading light>Muziek interpreteren in film</SectionHeading>
            <SectionParagraph light>
              Soms krijg je een muziekstuk voorgeschoteld dat je op een bepaalde
              manier beweegt. We hebben allemaal wel onze nummers, stukken,
              ensembles of hoe het ook mag heten, die een belangrijke rol spelen
              in het heden of in ons verleden. Sleeping Lotus van Joep Beving is
              voor mij een moment van rust, stilte en duidelijkheid. Op momenten
              waarop je eigenlijk alleen maar door wil gaan om de huidige
              situatie te vermijden, is het misschien beter om even stil te
              staan.
            </SectionParagraph>
            <SectionParagraph light>
              Die boodschap wil ik overbrengen in deze korte video. De benaming
              "conceptvideo" is misschien wat apart, maar dat is het in principe
              wel. Het concept van tijd nemen voor jezelf, om te reflecteren op
              wat er nou daadwerkelijk gaande is. Om afstand te nemen en serieus
              na te gaan waar je nu mee bezig bent. Ik hoop dat je er wat mee
              kan.
            </SectionParagraph>
          </SectionColumn>
        </ContentSection>
        <Footer>Zelf een meeslepend concept?</Footer>
      </Background>
    </>
  )
}

export default Haarlem
