import Header from 'components/Header'
import List, { ListItem } from 'components/List'
import Section from 'components/Section'
import { HeadingOne, HeadingTwo } from 'components/Text/Headings'
import { LoggedInUserDocument, useAdminPanelQuery } from 'generated/graphql'
import { withApollo } from 'libs/apollo'
import { NextPage } from 'next'
import { WithRouterProps } from 'next/dist/client/with-router'
import Head from 'next/head'
import { withRouter } from 'next/router'

type Props = {
  currentUser: {
    username: string
  }
} & WithRouterProps

//@ts-ignore
const AdminPanel: NextPage<Props> = ({ currentUser }) => {
  const { data, loading } = useAdminPanelQuery()

  return (
    <>
      <Head>
        <title>Admin - JM Media</title>
      </Head>
      <Header />
      <HeadingOne>Hoi {currentUser?.username}!</HeadingOne>
      <Section background="primary" grid>
        {loading ? (
          <HeadingTwo>Laden</HeadingTwo>
        ) : (
          <>
            <div>
              <HeadingTwo>Projecten</HeadingTwo>
              {data?.projects?.map(({ listImage, title, slug }) => (
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
              {data?.services?.map(({ listImage, name, slug }) => (
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
          </>
        )}
      </Section>
    </>
  )
}

//@ts-ignore
AdminPanel.getInitialProps = async ({
  req,
  res,
  router,
  apolloClient,
}: any) => {
  try {
    const {
      data: { currentUser },
    } = await apolloClient.query({ query: LoggedInUserDocument })
    if (req && !currentUser) {
      res.writeHead(302, { Location: '/admin/login' })
      res.end()
      return
    } else if (!currentUser) {
      router.push('/admin/login')
      return
    }

    return { currentUser }
  } catch {
    if (req) {
      res.writeHead(302, { Location: '/admin/login' })
      res.end()
      return
    } else router.push('/admin/login')
  }
}

export default withApollo({ ssr: true })(withRouter(AdminPanel))