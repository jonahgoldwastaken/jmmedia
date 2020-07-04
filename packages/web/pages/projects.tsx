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
import {
  ProjectsDocument,
  ProjectsQuery,
  ProjectsQueryVariables,
  useProjectsLazyQuery,
} from 'generated/graphql'
import { initializeApollo } from 'libs/apolloClient'
import { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

type Props = { data: ProjectsQuery }

const Portfolio: NextPage<Props> = ({ data: ssrData }) => {
  const [projects, setProjects] = useState<ProjectsQuery['projects']>(
    ssrData.projects
  )
  const [query, { called, data: clientData, refetch }] = useProjectsLazyQuery()
  const [filter, setFilter] = useState<string>('')

  useEffect(() => {
    if (called) refetch({ service: filter })
    else query({ variables: { service: filter } })
  }, [filter])

  useEffect(() => {
    if (clientData) setProjects(clientData.projects)
  }, [clientData])

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
            {projects ? (
              <List
                items={projects.map(project => ({
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

Portfolio.getInitialProps = async () => {
  const apolloClient = initializeApollo()
  const result = await apolloClient.query<
    ProjectsQuery,
    ProjectsQueryVariables
  >({ query: ProjectsDocument })

  return { data: result.data }
}

export default Portfolio
