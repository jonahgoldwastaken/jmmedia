import Head from 'next/head'
import Footer, { FooterLink } from '../components/Footer'
import Header from '../components/Header'
import Image from '../components/Image'
import { Logo } from '../components/Logo'
import Section from '../components/Section'
import { Paragraph } from '../components/Text'
import { HeadingOne } from '../components/Text/Headings'

export default () => {
  return (
    <>
      <Head>
        <title>Over - JM</title>
      </Head>
      <Header noLogo />
      <article>
        <HeadingOne centre>
          <Logo noLarge aria-label="JM" />
          <span> is Jonah Meijers</span>
        </HeadingOne>
        <Section grid background="secondary">
          <Image src="/jonah.jpeg" alt="Foto van Jonah" noQuote />
          <div>
            <Paragraph noMargin colour="white">
              Ik focus me graag op anderen, en wat ze te vertellen hebben. De
              verhalen die sommige mensen tot henzelf houden zijn erg bijzonder,
              wat eeuwig zonde is als er geen mogelijkheid is om ze te delen.
              Daarom bied ik deze plek aan; een plek waar verhalen vastgelegd en
              op eigen houtje gedeeld kunnen worden met degenen wie het aangaan.
            </Paragraph>{' '}
            <Paragraph colour="white">
              Ik hou ervan om de beste manier te vinden om een probleem op te
              lossen. Bij elk creatief proces doe ik onderzoek naar de beste
              plannen van aanpak, zodat ik zeker weet dat het eindresultaat
              perfect is. Zo probeer ik ook een uniek perspectief mee te brengen
              in het creatieve proces.
            </Paragraph>
            <Paragraph colour="white">
              Op dit moment volg ik de opleiding Communication &amp; Multimedia
              Design. Naast film en foto heb ik ook een grote passie voor
              muziek. Ik speel op dit moment geen instrumenten, maar dat kan
              veranderen in de toekomst.{' '}
            </Paragraph>
          </div>
        </Section>
      </article>
      <Footer>
        <FooterLink colour="secondary" href="/services">
          Bekijk hier hoe ik jouw verhaal kan vastleggen
        </FooterLink>
        <FooterLink colour="secondary" href="/portfolio">
          Zie welke verhalen ik al heb kunnen delen
        </FooterLink>
        <FooterLink
          colour="secondary"
          href="mailto:hoi@jonahmeijers.nl?SUBJECT=Aanvraag:%20"
        >
          Laten we samen uitvinden hoe we je verhaal kunnen vertellen
        </FooterLink>
      </Footer>
    </>
  )
}
