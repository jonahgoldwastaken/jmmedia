import Footer from 'components/Footer'
import Header from 'components/Header'
import Image from 'components/Image'
import Section from 'components/Section'
import { Paragraph } from 'components/Text'
import { HeadingOne } from 'components/Text/Headings'
import Head from 'next/head'

export default () => {
  return (
    <>
      <Head>
        <title>Over - JM</title>
      </Head>
      <Header />
      <article>
        <Section background="primary">
          <HeadingOne centre>JM is Jonah Meijers</HeadingOne>
        </Section>
        <Section grid background="secondary">
          <Image
            animation
            src="/jonah.jpg"
            alt="Foto van Jonah, gemaakt door Evelyn Cardoso"
          />
          <div>
            <Paragraph noMargin colour="secondary">
              Ik focus me graag op anderen, en wat ze te vertellen hebben. De
              verhalen die sommige mensen tot henzelf houden zijn erg bijzonder,
              wat eeuwig zonde is als er geen mogelijkheid is om ze te delen.
              Daarom bied ik deze plek aan; een plek waar verhalen vastgelegd en
              op eigen houtje gedeeld kunnen worden met degenen wie het aangaan.
            </Paragraph>{' '}
            <Paragraph colour="secondary">
              Ik hou ervan om de beste manier te vinden om een probleem op te
              lossen. Bij elk creatief proces doe ik onderzoek naar de beste
              plannen van aanpak, zodat ik zeker weet dat het eindresultaat
              perfect is. Zo probeer ik ook een uniek perspectief mee te brengen
              in het creatieve proces.
            </Paragraph>
            <Paragraph colour="secondary">
              Op dit moment volg ik de opleiding Communication &amp; Multimedia
              Design. Naast film en foto heb ik ook een grote passie voor
              muziek. Ik speel op dit moment geen instrumenten, maar dat kan
              veranderen in de toekomst.{' '}
            </Paragraph>
          </div>
        </Section>
      </article>
      <Footer />
    </>
  )
}
