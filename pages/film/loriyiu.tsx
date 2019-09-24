import fetch from 'isomorphic-fetch'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Background, NavButton } from '../../components/Common'
import {
  FilmDetails,
  FilmHero,
  FilmTitle,
  Film,
} from '../../components/Project/Film'
import { FilmContext } from '../../components/Project/Film/Context'
import ContentSection, {
  SectionColumn,
  SectionHeading,
  SectionParagraph,
} from '../../components/Section'

// type LoriYiuProps = {
//   film: string
// }

const LoriYiu: NextPage = props => {
  return (
    <>
      <Head>
        <title>Lori Yiu - Jonah Meijers</title>
      </Head>
      <Background currentPage="/film/loriyiu">
        <FilmHero background="https://storage.googleapis.com/filmportfolio/films/loriyiu.png">
          <FilmContext.Consumer>
            {({ state }) => (
              <Link href="/film">
                <NavButton hide={state === 'open'} icon="arrow-left" />
              </Link>
            )}
          </FilmContext.Consumer>
          <FilmTitle>Integrale eindpresentatie Lori Yiu</FilmTitle>
          <FilmDetails>Concertvideo - 2019</FilmDetails>
          <Film src="https://storage.googleapis.com/filmportfolio/films/loriyiu.mp4"></Film>
        </FilmHero>
        <ContentSection dark>
          <SectionColumn column={2} span={1}>
            <SectionHeading light>Concert als scriptie.</SectionHeading>
            <SectionParagraph light>
              Lori Yiu gaf afgelopen schooljaar haar Integrale Eindpresentatie
              (IEP) op het conservatorium in Utrecht. De Integrale
              Eindpresentatie is een cruciaal onderdeel van het afstudeertraject
              van de opleiding muziekdocent op het Utrechts Conservatorium.
            </SectionParagraph>
            <SectionParagraph light>
              Lori's IEP was in de stijl van een typisch jaren '70 concert,
              waarbij ze een zeer dierbare setlist vol passie en hartstocht
              tentoonstelde. Ik had het genoegen om dit belangrijke moment voor
              Lori vast te leggen als nét-echte concertfilm. Met meerdere
              camerahoeken, een lichte kleurcorrectie en meeslepende effecten
              accentueert de film de passies en emoties die die avond
              overduidelijk te voelen waren.
            </SectionParagraph>
          </SectionColumn>
          <SectionColumn column={4} span={2}></SectionColumn>
        </ContentSection>
      </Background>
    </>
  )
}

export default LoriYiu
