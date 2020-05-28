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
import Head from 'next/head'

const Portfolio = () => {
  const { loading, error, data } = useProjectsQuery()
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
          {(() => {
            if (error)
              return (
                <>
                  <HeadingOne centre>Er ging iets verkeerd!</HeadingOne>
                  <Paragraph centre>
                    Herlaad de pagina om het opnieuw te proberen.
                  </Paragraph>
                </>
              )
            else if (loading)
              return (
                <ProjectListHeader>
                  <HeadingOne centre>Projecten laden</HeadingOne>
                </ProjectListHeader>
              )
            else
              return (
                <>
                  <ProjectListHeader>
                    <HeadingOne>Portfolio</HeadingOne>
                    <ProjectListFilter />
                  </ProjectListHeader>
                  <List>
                    {data?.projects.map(item => (
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
                </>
              )
          })()}
        </ProjectListContext.Provider>
      </main>
      <Footer>
        <FooterLink
          colour="secondary"
          href="mailto:hoi@jonahmeijers.nl?SUBJECT=Aanvraag:%20"
        >
          Hier ook tussen willen staan?
        </FooterLink>
      </Footer>
    </>
  )
}

export default withApollo({ ssr: true })(Portfolio)
