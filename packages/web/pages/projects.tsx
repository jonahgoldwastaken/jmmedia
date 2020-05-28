import { DataValue } from '@apollo/react-hoc'
import Footer, { FooterLink } from 'components/Footer'
import Header from 'components/Header'
import List, { ListItem } from 'components/List'
import {
  ProjectListContext,
  ProjectListFilter,
  ProjectListHeader,
} from 'components/Project/List'
import { HeadingOne } from 'components/Text/Headings'
import {
  ProjectsQuery,
  ProjectsQueryVariables,
  withProjects,
} from 'generated/graphql'
import { withApollo } from 'libs/apollo'
import { NextPage } from 'next'
import Head from 'next/head'
import { Paragraph } from 'components/Text'

type Props = {
  data: DataValue<ProjectsQuery, ProjectsQueryVariables>
}

const Portfolio: NextPage<Props> = ({ data: { projects } }) => {
  return (
    <>
      <Head>
        <title>Portfolio - JM</title>
      </Head>
      <Header />
      <main>
        <ProjectListContext.Provider
          value={{ currentFilter: 'all', setFilter: () => undefined }}
        >
          <ProjectListHeader>
            <HeadingOne>Portfolio</HeadingOne>
            <ProjectListFilter />
          </ProjectListHeader>
          {projects ? (
            <List>
              {projects?.map(item => (
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
      </main>
      <Footer>
        <FooterLink
          colour="secondary"
          href="mailto:hoi@jonahmeijers.nl?SUBJECT=Aanvraag:%20"
        >
          {projects
            ? 'Hier ook tussen willen staan?'
            : 'Hier als eerste op willen staan?'}
        </FooterLink>
      </Footer>
    </>
  )
}

export default withApollo({ ssr: true })(withProjects()(Portfolio))
