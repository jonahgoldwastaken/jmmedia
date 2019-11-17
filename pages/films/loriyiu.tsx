import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { NavButton } from '../../components/Common'
import Background from '../../components/Common/Background'
import Footer from '../../components/Footer'
import {
  Film,
  FilmDetails,
  FilmHero,
  FilmTitle,
} from '../../components/Project'
import { FilmContext } from '../../components/Project/Context'
import ContentSection, {
  SectionColumn,
  SectionHeading,
  SectionImage,
  SectionParagraph,
} from '../../components/Section'

const LoriYiu: NextPage = () => {
  return (
    <>
      <Head>
        <title>Concert Lori Yiu - Jonah Meijers</title>
      </Head>
      <Background currentPage="/films/loriyiu">
        <FilmHero background="https://storage.googleapis.com/filmportfolio/film/loriyiu/placeholder.png">
          <FilmContext.Consumer>
            {({ state }) => (
              <Link href="/film">
                <NavButton hide={state === 'open'} icon="arrow-left" />
              </Link>
            )}
          </FilmContext.Consumer>
          <FilmTitle>Concert Lori Yiu</FilmTitle>
          <FilmDetails>Concertvideo - 2019</FilmDetails>
          <Film src="https://storage.googleapis.com/filmportfolio/film/loriyiu/film.mp4" />
        </FilmHero>
        <ContentSection>
          <SectionColumn column={[1, 2, 3]} span={[2, 2, 2]}>
            <SectionHeading light>Concert als scriptie.</SectionHeading>
            <SectionParagraph light>
              Lori Yiu gaf afgelopen schooljaar haar Integrale Eindpresentatie
              (IEP). De IEP is een cruciaal onderdeel van het afstudeertraject
              van de opleiding muziekdocent op het Utrechts Conservatorium.
            </SectionParagraph>
            <SectionParagraph light>
              Lori's IEP was in de stijl van een typisch jaren '70 concert,
              waarbij ze een zeer dierbare setlist vol passie en hartstocht
              tentoonstelde. Ik had het genoegen om dit belangrijke moment voor
              Lori vast te leggen als nét-echte concertfilm. Met meerdere
              camerahoeken, een lichte kleurcorrectie en meeslepende effecten
              accentueert de film de passies en emoties die tijdens dit optreden
              overduidelijk te voelen waren.
            </SectionParagraph>
          </SectionColumn>
        </ContentSection>
        <ContentSection dark>
          <SectionColumn column={[1, 1, 2]} span={[1, 2, 2]}>
            <SectionHeading light>Inspiratie en onderzoek</SectionHeading>
            <SectionParagraph light>
              Een van de vele inspiraties voor de stijl die Lori heeft
              uitbedacht. De kleurrijke shows van Led Zeppelin hebben grote
              invloed gehad op het kleurgebruik, de opzet van het podium en de
              energie die de artiesten uitstralen tijdens het optreden. In hun
              concertfilms wordt veel nadruk gelegd op het samenspel tussen de
              artiesten van de band, waardoor iedereen een blik in de
              schijnwerpers krijgt. Deze filmtechniek heb ik ook toegepast bij
              de concertfilm van Lori, om de look &amp; feel compleet te maken.
            </SectionParagraph>
          </SectionColumn>
          <SectionColumn column={[2, 3, 4]} span={[1, 2, 2]}>
            <SectionImage
              last
              src="https://storage.googleapis.com/filmportfolio/film/loriyiu/ledzeppelin.png"
              alt="Led Zeppelin die Dazed & Confused optreden tijdens hun concert in Madison Square Garden, 1975"
            />
          </SectionColumn>
        </ContentSection>
        <ContentSection light>
          <SectionColumn column={[1, 1, 2]} span={[1, 2, 2]}>
            <SectionImage
              first
              src="https://storage.googleapis.com/filmportfolio/film/loriyiu/moodboard.png"
              alt="Moodboard om de look & feel van de integrale eindpresentatie in kaart te brengen"
            />
          </SectionColumn>
          <SectionColumn column={[2, 3, 4]} span={[1, 2, 1]}>
            <SectionHeading light>De look &amp; feel</SectionHeading>
            <SectionParagraph light>
              Samen met onder meer optredens van The Clash, Björk en andere
              populaire artiesten in soortgelijke stijlen heb ik inspiratie
              opgedaan voor de manier waarop de video er uit zou moeten zien.
              Door middel van een moodboard heb ik alle belangrijke
              aandachtspunten bijeen gebracht en er een consistent concept uit
              gecreëerd.
            </SectionParagraph>
          </SectionColumn>
        </ContentSection>
        <Footer>Binnenkort op tournee?</Footer>
      </Background>
    </>
  )
}

export default LoriYiu
