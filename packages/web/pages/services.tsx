import Footer from 'components/Footer'
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
import { initializeApollo } from 'libs/apolloClient'
import { NextPage } from 'next'
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
          <HeadingOne>Onze services</HeadingOne>
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
      <Footer />
    </>
  )
}

ServicesPage.getInitialProps = async () => {
  const apolloClient = initializeApollo()
  const result = await apolloClient.query<
    ServicesQuery,
    ServicesQueryVariables
  >({ query: ServicesDocument })

  return { data: result.data }
}

export default ServicesPage
