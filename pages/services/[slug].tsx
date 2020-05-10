import Head from 'next/head'
import Footer, { FooterLink } from '../../components/Footer'
import Header from '../../components/Header'
import Image from '../../components/Image'
import Section from '../../components/Section'
import ServiceOptions from '../../components/ServiceOptions'
import { Paragraph } from '../../components/Text'
import { HeadingOne, HeadingTwo } from '../../components/Text/Headings'
import { NextPage, NextPageContext } from 'next'
import { Service } from '../../interfaces/Service'

type Props = {
  service: Service
}

const ServicePage: NextPage<Props> = ({ service }) => {
  return (
    <>
      <Head>
        <title>{service.name} - JM</title>
      </Head>
      <Header />
      <main>
        <Section grid background="secondary">
          <HeadingOne noMargin colour="secondary">
            {service.name}
          </HeadingOne>
          <div>
            {service.description.map(paragraph => (
              <Paragraph noMargin colour="secondary">
                {paragraph}
              </Paragraph>
            ))}
          </div>
          <Image src="https://unsplash.com/photos/WSTF1QEUUWw/download?force=true" />
        </Section>
        <Section background="primary">
          <HeadingTwo noMargin>Mogelijke opties</HeadingTwo>
          <ServiceOptions options={service.options} />
        </Section>
      </main>
      <Footer>
        <FooterLink
          colour="secondary"
          href={encodeURI(
            `mailto:hoi@jonahmeijers.nl?SUBJECT=Aanvraag voor ${service.name.toLowerCase()}: `
          )}
        >
          {service.callToAction}
        </FooterLink>
      </Footer>
    </>
  )
}

ServicePage.getInitialProps = async (ctx: NextPageContext) => {
  const service = await fetch(
    (process?.env?.BASE_URL || window?.location?.origin) +
      `/api/service/get?slug=${ctx.query.slug}`
  )
    .then(r => r.json())
    .catch(console.log)

  return { service: service || null }
}

export default ServicePage
