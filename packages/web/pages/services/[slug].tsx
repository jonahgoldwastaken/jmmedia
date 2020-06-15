import { ApolloQueryResult } from 'apollo-client'
import { WithApolloClient } from 'apolloClient'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Image from 'components/Image'
import Section from 'components/Section'
import ServiceOptions from 'components/ServiceOptions'
import { Paragraph } from 'components/Text'
import { HeadingOne, HeadingTwo } from 'components/Text/Headings'
import {
  ServiceDocument,
  ServiceQuery,
  ServiceQueryVariables,
} from 'generated/graphql'
import { withApollo } from 'libs/apollo'
import { NextPage, NextPageContext } from 'next'
import Error from 'next/error'
import Head from 'next/head'

type Props = {
  result: ApolloQueryResult<ServiceQuery> | null
}

const ServicePage: NextPage<Props> = ({ result }) => {
  if (!result?.data?.service) return <Error statusCode={404} />
  const { service } = result.data
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
            {service.description.map((paragraph, i) => (
              <Paragraph key={i} colour="secondary">
                {paragraph}
              </Paragraph>
            ))}
          </div>
          <Image src={service.listImage} />
        </Section>
        <Section grid background="primary">
          <div>
            <HeadingTwo noMargin>De basis</HeadingTwo>
            <ServiceOptions options={service.baseOptions} />
          </div>
          <div>
            <HeadingTwo noMargin>Extra opties</HeadingTwo>
            <ServiceOptions options={service.additionalOptions} />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}

ServicePage.getInitialProps = async (
  ctx: WithApolloClient<NextPageContext>
) => {
  const slug = ctx.query.slug as string
  try {
    const result = await ctx.apolloClient.query<
      ServiceQuery,
      ServiceQueryVariables
    >({
      query: ServiceDocument,
      variables: { slug },
    })
    return { result }
  } catch (err) {
    return { result: null }
  }
}

export default withApollo({ ssr: true })(ServicePage)
