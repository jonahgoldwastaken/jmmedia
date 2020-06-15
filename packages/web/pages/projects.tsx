import Footer from 'components/Footer'
import Header from 'components/Header'
import List from 'components/List'
import {
  ProjectListContext,
  ProjectListFilter,
  ProjectListHeader,
} from 'components/Project/List'
import Section from 'components/Section'
import { Paragraph } from 'components/Text'
import { HeadingOne } from 'components/Text/Headings'
import { useProjectsQuery } from 'generated/graphql'
import { withApollo } from 'libs/apollo'
import { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

type Props = {}

const Portfolio: NextPage<Props> = () => {
  const { data, refetch, called } = useProjectsQuery()
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
            {data ? (
              <List
                items={data.projects.map(project => ({
                  name: project.title,
                  slug: project.slug,
                  listImage: project.listImage,
                }))}
                document="/projects/[slug]"
                as="/projects/"
              />
            ) : (
              <Paragraph>
                Een zeer uitgebreide lijst zoals je kunt zien.
              </Paragraph>
            )}
          </ProjectListContext.Provider>
        </Section>
      </main>
      <Footer />
    </>
  )
}

export default withApollo({ ssr: true })(Portfolio)
