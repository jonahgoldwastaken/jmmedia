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

const LoriYiu: NextPage = () => {
  return (
    <>
      <Head>
        <title>Concert Lori Yiu - Jonah Meijers</title>
      </Head>
      <Background currentPage="/films/loriyiu">
        <FilmHero>
          <FilmTitle>Concert Lori Yiu</FilmTitle>
          <FilmDetails>Concertvideo - 2019</FilmDetails>
          <Film
            poster="https://storage.googleapis.com/filmportfolio/film/loriyiu/placeholder.png"
            src="https://storage.googleapis.com/filmportfolio/film/loriyiu/film.mp4"
          />
        </FilmHero>
        <ContentSection>
          <SectionHeading>Concert als scriptie.</SectionHeading>
          <SectionParagraph>
            Lori Yiu gaf afgelopen schooljaar haar Integrale Eindpresentatie
            (IEP). De IEP is een cruciaal onderdeel van het afstudeertraject van
            de opleiding muziekdocent op het Utrechts Conservatorium.
          </SectionParagraph>
          <SectionParagraph>
            Lori's IEP was in de stijl van een typisch jaren '70 concert,
            waarbij ze een zeer dierbare setlist vol passie en hartstocht
            tentoonstelde. Ik had het genoegen om dit belangrijke moment voor
            Lori vast te leggen als nét-echte concertfilm. Met meerdere
            camerahoeken, een lichte kleurcorrectie en meeslepende effecten
            accentueert de film de passies en emoties die tijdens dit optreden
            overduidelijk te voelen waren.
          </SectionParagraph>
          <SectionHeading>Inspiratie en onderzoek</SectionHeading>
          <SectionImage
            src="https://storage.googleapis.com/filmportfolio/film/loriyiu/ledzeppelin.png"
            alt="Led Zeppelin die Dazed & Confused optreden tijdens hun concert in Madison Square Garden, 1975"
          />
          <SectionParagraph>
            Een van de vele inspiraties voor de stijl die Lori heeft uitbedacht.
            De kleurrijke shows van Led Zeppelin hebben grote invloed gehad op
            het kleurgebruik, de opzet van het podium en de energie die de
            artiesten uitstralen tijdens het optreden. In hun concertfilms wordt
            veel nadruk gelegd op het samenspel tussen de artiesten van de band,
            waardoor iedereen een blik in de schijnwerpers krijgt. Deze
            filmtechniek heb ik ook toegepast bij de concertfilm van Lori, om de
            look &amp; feel compleet te maken.
          </SectionParagraph>
          <SectionHeading>De look &amp; feel</SectionHeading>
          <SectionParagraph>
            Samen met onder meer optredens van The Clash, Björk en andere
            populaire artiesten in soortgelijke stijlen heb ik inspiratie
            opgedaan voor de manier waarop de video er uit zou moeten zien. Door
            middel van een moodboard heb ik alle belangrijke aandachtspunten
            bijeen gebracht en er een consistent concept uit gecreëerd.
          </SectionParagraph>
          <SectionImage
            src="https://storage.googleapis.com/filmportfolio/film/loriyiu/moodboard.png"
            alt="Moodboard om de look & feel van de integrale eindpresentatie in kaart te brengen"
          />
        </ContentSection>
        <Footer>Binnenkort op tournee?</Footer>
      </Background>
    </>
  )
}

export default LoriYiu
