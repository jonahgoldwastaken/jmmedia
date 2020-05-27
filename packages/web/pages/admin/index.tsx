import { withApollo } from 'libs/apollo'
import {
  withAdminPanel,
  AdminPanelQuery,
  AdminPanelQueryVariables,
} from 'generated/graphql'
import { DataValue } from '@apollo/react-hoc'
import { NextPage } from 'next'
import List, { ListItem } from 'components/List'
import { HeadingOne, HeadingTwo } from 'components/Text/Headings'
import Section from 'components/Section'
import Header from 'components/Header'
import Head from 'next/head'

type Props = {
  data: DataValue<AdminPanelQuery, AdminPanelQueryVariables>
}

const AdminPanel: NextPage<Props> = ({ data: { projects, services } }) => {
  return (
    <>
      <Head>
        <title>Admin - JM Media</title>
      </Head>

      <Header />
      <HeadingOne>Admin paneel</HeadingOne>
      <Section background="primary" grid>
        <div>
          <HeadingTwo>projecten</HeadingTwo>
          {projects?.map(({ listImage, title, slug }) => (
            <List maxRows={2}>
              <ListItem
                document="/admin/project/[slug]"
                href={`/admin/project/${slug}`}
                src={listImage}
              >
                {title}
              </ListItem>
            </List>
          ))}
        </div>
        <div>
          <HeadingTwo>Services</HeadingTwo>
          {services?.map(({ listImage, name, slug }) => (
            <List maxRows={2}>
              <ListItem
                document="/admin/service/[slug]"
                href={`/admin/service/${slug}`}
                src={listImage}
              >
                {name}
              </ListItem>
            </List>
          ))}
        </div>
      </Section>
    </>
  )
}

export default withApollo({ ssr: true })(withAdminPanel()(AdminPanel))
