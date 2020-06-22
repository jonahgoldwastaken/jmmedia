import CoverImage from 'components/CoverImage'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Section from 'components/Section'
import { Paragraph } from 'components/Text'
import { HeadingOne, HeadingTwo } from 'components/Text/Headings'
import { NextPage } from 'next'
import Head from 'next/head'

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>JM - Leg verhalen vast</title>
      </Head>
      <Header />
      <main>
        <Section background="primary" centreContent fullHeight>
          <HeadingOne>Jouw verhaal doet ertoe</HeadingOne>
          <Paragraph>Leg het vast op een unieke manier.</Paragraph>
        </Section>
        <Section background="secondary">
          <CoverImage
            colour="orange"
            src="/evenement.jpg"
            transform={[
              {
                left: 66,
              },
              {
                top: 22,
                left: 88,
              },
            ]}
          >
            Een ervaring die je op elk moment terug wilt kijken.
          </CoverImage>
          <CoverImage
            colour="grey"
            width={[405, 607.5]}
            src="/productfoto.jpg"
            transform={[
              {
                top: 82.5,
                left: 121,
              },
              {
                top: 180,
                left: 165,
              },
            ]}
          >
            Jouw nieuwe unieke product die de markt door gaat breken.
          </CoverImage>
          <CoverImage
            colour="grey"
            width={[360, 540]}
            src="/gebeurtenis.jpg"
            transform={[
              {
                top: 90,
                left: 110,
              },
              {
                top: 40,
                left: 150,
              },
            ]}
          >
            Een gebeurtenis die je voor altijd wilt koesteren.
          </CoverImage>
          <CoverImage
            colour="orange"
            width={[270, 337.5]}
            src="/profielfoto.jpg"
            transform={[
              {
                top: 62,
                left: 130,
              },
              {
                top: 11,
                left: 180,
              },
            ]}
          >
            Je online aanwezigheid die wel een opknapbeurt kan gebruiken.
          </CoverImage>
        </Section>
        <Section centreContent background="primary">
          <HeadingTwo centre>Zet het op foto of video!</HeadingTwo>
          <Paragraph centre mAuto>
            Ik ken wel een mannetje die dat voor elkaar kan krijgen.
          </Paragraph>
        </Section>
      </main>
      <Footer />
    </>
  )
}

export default Index
