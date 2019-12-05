import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Button } from '../components/Common'
import Background from '../components/Common/Background'
import Header, { HeaderHeading } from '../components/Common/Header'
import ContentSection, {
  SectionColumn,
  SectionHeading,
  SectionImage,
  SectionParagraph,
} from '../components/Section'
import Footer from '../components/Footer'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Over mij - Jonah Meijers</title>
      </Head>
      <Background currentPage="/over">
        <Link href="/">
          <Button colour="white" icon="home" />
        </Link>
        <Header>
          <HeaderHeading>Over mij</HeaderHeading>
        </Header>
        <ContentSection light>
          <SectionColumn column={[1, 1, 2]} span={[2, 2, 2]}>
            <SectionImage
              src="https://storage.googleapis.com/filmportfolio/over/profielfoto.jpg"
              alt="Profielfoto Jonah Meijers"
              first
            />
          </SectionColumn>
          <SectionColumn column={[1, 3, 4]} span={[2, 1, 1]}>
            <SectionHeading light>Creatieveling uit Hoofddorp</SectionHeading>
            <SectionParagraph light>
              Zoals de subtekst op de homepagina al vermeldde ben ik filmmaker
              en fotograaf. Vanuit Hoofddorp ben ik dagelijks bezig met film of
              fotografie. Van sketches tot concertvideo's, ik help graag mee aan
              het realiseren van je visie.
            </SectionParagraph>
          </SectionColumn>
        </ContentSection>
        <ContentSection dark>
          <SectionColumn column={[1, 2, 3]} span={[2, 1, 1]}>
            <SectionHeading light alignRight>
              Een immense passie voor van alles en nog wat
            </SectionHeading>
            <SectionParagraph light alignRight>
              Ik ben enorm gepassioneerd over van alles en nog wat waar ik
              creatief bezig mee kan zijn. Al staan film en fotografie staan dan
              wel bovenaan het lijstje, ik heb ook in het verleden aangerotzooid
              met het maken van muziek, game development, het ontwerpen en
              bouwen van websites en apps (de site waar je op zit is daar het
              resultaat van) en video-animaties. Met flink wat creativiteit en
              interesse kom je dus al een heel eind.
            </SectionParagraph>
          </SectionColumn>
          <SectionColumn column={[1, 3, 4]} span={[2, 2, 2]}>
            <SectionImage
              src="https://storage.googleapis.com/filmportfolio/over/fotograferen.jpg"
              alt="Nachtfoto's maken bij de Thames"
              last
            />
          </SectionColumn>
        </ContentSection>
        <Footer>Meehelpen aan het uitbreiden van mijn portfolio?</Footer>
      </Background>
    </>
  )
}

export default About
