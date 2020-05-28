import { NextPage } from 'next'
import Head from 'next/head'
import Footer, { FooterLink } from 'components/Footer'
import Header from 'components/Header'
import List, { ListItem } from 'components/List'
import Section from 'components/Section'
import { Paragraph } from 'components/Text'
import { HeadingOne, HeadingTwo } from 'components/Text/Headings'
import { withApollo } from 'libs/apollo'
import {
  withServices,
  ServicesQuery,
  ServicesQueryVariables,
} from 'generated/graphql'
import { DataValue } from '@apollo/react-hoc'

type Props = {
  data: DataValue<ServicesQuery, ServicesQueryVariables>
}

const ServicesPage: NextPage<Props> = ({ data: { services } }) => {
  return (
    <>
      <Head>
        <title>Services - JM</title>
      </Head>
      <Header />
      <main>
        <HeadingOne centre>De services die ik aanbied</HeadingOne>
        {services ? (
          <List maxRows={3}>
            {services.map(service => (
              <ListItem
                document="/services/[slug]"
                key={service.slug}
                src={service.listImage}
                href={`/services/${service.slug}`}
              >
                {service.name}
              </ListItem>
            ))}
          </List>
        ) : (
          <Paragraph>Zoals je kan zien bied ik erg veel aan.</Paragraph>
        )}
        <Section centreContent fullHeight background="secondary">
          <HeadingTwo colour="secondary">
            Ik werk met je mee van begin tot eind
          </HeadingTwo>
          <Paragraph mAuto colour="secondary">
            Ik pas mijn werkwijze aan op het type opdracht en hoeveel
            voorbereiding al is getroffen voordat ik erbij betrokken ben
            geraakt. Zo haal ik altijd het maximale uit elke mogelijkheid en
            zorg ik ervoor dat kwalitatief hoogstaand werk wordt geleverd.
          </Paragraph>
        </Section>
      </main>
      <Footer>
        <FooterLink colour="primary" href="/about">
          Zie hier hoe JM in elkaar steekt
        </FooterLink>
        <FooterLink colour="primary" href="/portfolio">
          Bekijk hier het portfolio
        </FooterLink>
        <FooterLink
          colour="primary"
          href="mailto:hoi@jonahmeijers.nl?SUBJECT=Aanvraag:%20"
        >
          Begin een gesprek
        </FooterLink>
      </Footer>
    </>
  )
}

export default withApollo({ ssr: true })(withServices()(ServicesPage))
