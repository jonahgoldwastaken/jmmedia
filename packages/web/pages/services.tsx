import { WithApolloClient } from 'apolloClient'
import Footer, { FooterLink } from 'components/Footer'
import Header from 'components/Header'
import List from 'components/List'
import Section from 'components/Section'
import { Paragraph } from 'components/Text'
import { HeadingOne, HeadingTwo } from 'components/Text/Headings'
import {
  ServicesDocument,
  ServicesQuery,
  ServicesQueryVariables,
} from 'generated/graphql'
import { withApollo } from 'libs/apollo'
import { NextPage, NextPageContext } from 'next'
import Head from 'next/head'

type Props = {
  data: ServicesQuery
}

const ServicesPage: NextPage<Props> = ({ data: { services } }) => {
  return (
    <>
      <Head>
        <title>Services - JM</title>
      </Head>
      <Header />
      <main>
        <Section background="primary">
          <HeadingOne>De services die ik aanbied</HeadingOne>
          {services ? (
            <List
              items={services}
              document="/services/[slug]"
              as="/services/"
            />
          ) : (
            <Paragraph>Zoals je kan zien bied ik erg veel aan.</Paragraph>
          )}
        </Section>
        <Section background="secondary">
          <HeadingTwo colour="secondary">
            Ik werk met je mee van begin tot eind
          </HeadingTwo>
          <Paragraph colour="secondary">
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

ServicesPage.getInitialProps = async ({
  apolloClient,
}: WithApolloClient<NextPageContext>) => {
  const result = await apolloClient.query<
    ServicesQuery,
    ServicesQueryVariables
  >({ query: ServicesDocument })

  return { data: result.data }
}

export default withApollo({ ssr: true })(ServicesPage)
