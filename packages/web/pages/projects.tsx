import Footer, { FooterLink } from 'components/Footer'
import Header from 'components/Header'
import List, { ListItem } from 'components/List'
import {
  ProjectListContext,
  ProjectListFilter,
  ProjectListHeader,
} from 'components/Project/List'
import { Paragraph } from 'components/Text'
import { HeadingOne } from 'components/Text/Headings'
import { useProjectsQuery } from 'generated/graphql'
import { withApollo } from 'libs/apollo'
import { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Section from 'components/Section'

type Props = {}

const Portfolio: NextPage<Props> = () => {
  const { data, loading, refetch, called } = useProjectsQuery()
  const [filter, setFilter] = useState<string>('')

  useEffect(() => {
    if (called) refetch({ service: filter })
  }, [filter])

  return (
    <>
      <Head>
        <title>Portfolio - JM</title>
      </Head>
      <Header />
      <main>
        <Section background="primary">
          <ProjectListContext.Provider
            value={{ currentFilter: filter, setFilter }}
          >
            <ProjectListHeader>
              <HeadingOne noMargin>Portfolio</HeadingOne>
              <ProjectListFilter />
            </ProjectListHeader>
            {loading ? (
              <Paragraph>Lekker alles aan het laden</Paragraph>
            ) : data ? (
              <List>
                {data.projects.map(item => (
                  <ListItem
                    document={'/projects/[slug]'}
                    key={item.title}
                    src={item.listImage}
                    href={`/projects/${item.slug}`}
                  >
                    {item.title}
                  </ListItem>
                ))}
              </List>
            ) : (
              <Paragraph>
                Een zeer uitgebreide lijst zoals je kunt zien.
              </Paragraph>
            )}
          </ProjectListContext.Provider>
        </Section>
      </main>
      <Footer background="secondary">
        <FooterLink colour="secondary" href="/services">
          Bekijken wat ik jou kan bieden?
        </FooterLink>
        <FooterLink
          colour="secondary"
          href="mailto:hoi@jonahmeijers.nl?SUBJECT=Aanvraag:%20"
        >
          {loading
            ? 'Hier ook tussen willen staan?'
            : data?.projects
            ? 'Hier ook tussen willen staan?'
            : 'Hier als eerste op willen staan?'}
        </FooterLink>
        <FooterLink colour="secondary" href="/about">
          Meer lezen over JM?
        </FooterLink>
      </Footer>
    </>
  )
}

export default withApollo({ ssr: true })(Portfolio)
