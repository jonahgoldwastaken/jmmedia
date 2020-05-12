import Head from 'next/head'
import Footer, { FooterLink } from '../components/Footer'
import Header from '../components/Header'
import List, { ListItem } from '../components/List'
import {
  ProjectListContext,
  ProjectListFilter,
  ProjectListHeader,
} from '../components/Portfolio/List'
import { HeadingOne } from '../components/Text/Headings'
import { useProjects } from '../lib/useProjects'

export default () => {
  const [projectItems, filter, setFilter] = useProjects('all')

  return (
    <>
      <Head>
        <title>Portfolio - JM</title>
      </Head>
      <Header />
      <main>
        {projectItems ? (
          <ProjectListContext.Provider
            value={{ currentFilter: filter, setFilter }}
          >
            <ProjectListHeader>
              <HeadingOne>Portfolio</HeadingOne>
              <ProjectListFilter />
            </ProjectListHeader>
            <List>
              {projectItems?.map(item => (
                <ListItem
                  document={'/project/[slug]'}
                  key={item._id}
                  src={item.content[0]?.content}
                  href={`/project/${item.slug}`}
                >
                  {item.title}
                </ListItem>
              ))}
            </List>
          </ProjectListContext.Provider>
        ) : (
          <HeadingOne centre>Projecten laden...</HeadingOne>
        )}
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
