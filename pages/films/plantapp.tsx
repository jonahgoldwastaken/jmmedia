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

const PlantApp: NextPage = () => {
  return (
    <>
      <Head>
        <title>PlantApp - Jonah Meijers</title>
      </Head>
      <Background currentPage="/films/plantapp">
        <FilmHero background="https://storage.googleapis.com/filmportfolio/film/plantapp/placeholder.png">
          <FilmContext.Consumer>
            {({ state }) => (
              <Link href="/film">
                <NavButton hide={state === 'open'} icon="arrow-left" />
              </Link>
            )}
          </FilmContext.Consumer>
          <FilmTitle>PlantApp</FilmTitle>
          <FilmDetails>Productvideo - 2018</FilmDetails>
          <Film src="https://storage.googleapis.com/filmportfolio/film/plantapp/film.mp4" />
        </FilmHero>
        <ContentSection>
          <SectionColumn column={[1, 2, 3]} span={[2, 2, 2]}>
            <SectionHeading light>
              Een app om je planten gezond te houden
            </SectionHeading>
            <SectionParagraph light>
              PlantApp is de oplossing voor degenen die altijd vergeten op tijd
              hun planten water te geven. Dit doel moesten we duidelijk zien
              over te brengen in videovorm. De schoolopdracht bood ons keuze uit
              meerdere apps, maar deze leek ons het leukst om een film over te
              maken. Door een flinke dosis humor te gebruiken hopen we de
              aandacht van de gebruiker bij de video te houden en zo meer te
              leren over de app.
            </SectionParagraph>
          </SectionColumn>
        </ContentSection>
        <Footer>Wil je je geweldige product promoten?</Footer>
      </Background>
    </>
  )
}

export default PlantApp
