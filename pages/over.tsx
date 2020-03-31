import { NextPage } from 'next'
import Head from 'next/head'
import Background from '../components/Common/Background'
import Footer from '../components/Footer'
import ContentSection, {
  SectionHeading,
  SectionImage,
  SectionParagraph,
} from '../components/Section'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Over mij - Jonah Meijers</title>
      </Head>
      <Background currentPage="/over">
        <ContentSection>
          <SectionHeading>Creatieveling uit Hoofddorp</SectionHeading>
          <SectionParagraph>
            Zoals de subtekst op de homepagina al vermeldde ben ik filmmaker en
            fotograaf. Vanuit Hoofddorp ben ik dagelijks bezig met film of
            fotografie. Van sketches tot concertvideo's, ik help graag mee aan
            het realiseren van je visie.
          </SectionParagraph>
          <SectionImage
            src="https://storage.googleapis.com/filmportfolio/over/profielfoto.jpg"
            alt="Profielfoto Jonah Meijers"
          />
          <SectionHeading>
            Een immense passie voor van alles en nog wat
          </SectionHeading>
          <SectionParagraph>
            Ik ben enorm gepassioneerd over van alles en nog wat waar ik
            creatief bezig mee kan zijn. Al staan film en fotografie staan dan
            wel bovenaan het lijstje, ik heb ook in het verleden aangerotzooid
            met het maken van muziek, game development, het ontwerpen en bouwen
            van websites en apps (de site waar je op zit is daar het resultaat
            van) en video-animaties. Met flink wat creativiteit en interesse kom
            je dus al een heel eind.
          </SectionParagraph>
          <SectionImage
            src="https://storage.googleapis.com/filmportfolio/over/fotograferen.jpg"
            alt="Nachtfoto's maken bij de Thames"
            last
          />
        </ContentSection>
        <Footer>Meehelpen aan het uitbreiden van mijn portfolio?</Footer>
      </Background>
    </>
  )
}

export default About
