import { Button } from 'components/Form'
import Header from 'components/Header'
import List from 'components/List'
import Section from 'components/Section'
import { HeadingOne, HeadingTwo } from 'components/Text/Headings'
import { LoggedInUserDocument, useAdminPanelQuery } from 'generated/graphql'
import { initializeApollo } from 'libs/apolloClient'
import { NextPage, NextPageContext } from 'next'
import { WithRouterProps } from 'next/dist/client/with-router'
import Head from 'next/head'
import Link from 'next/link'
import { withRouter } from 'next/router'

type Props = {
  currentUser?: {
    username: string
  }
} & WithRouterProps

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
              <Link scroll={false} href="/admin/project">
                <Button>Nieuw project</Button>
              </Link>
              {data?.projects && (
                <List
                  maxRows={1}
                  items={data.projects.map(({ listImage, title, slug }) => ({
                    name: title,
                    slug,
                    listImage,
                  }))}
                  document="/admin/project/[slug]"
                  as="/admin/project/"
                />
              )}
            </div>
            <div>
              <HeadingTwo>Services</HeadingTwo>
              <Link scroll={false} href="/admin/service">
                <Button>Nieuwe service</Button>
              </Link>
              {data?.services && (
                <List
                  maxRows={1}
                  items={data.services}
                  document="/admin/service/[slug]"
                  as="/admin/service/"
                />
              )}
            </div>
          </>
        )}
      </Section>
    </>
  )
}

AdminPanel.getInitialProps = async (ctx: NextPageContext & WithRouterProps) => {
  const apolloClient = initializeApollo(ctx)
  const { res, router } = ctx
  try {
    const {
      data: { currentUser },
    } = await apolloClient.query({ query: LoggedInUserDocument })
    if (res && !currentUser) {
      res.writeHead(302, { Location: '/admin/login' })
      res.end()
    } else if (!currentUser) {
      router.push('/admin/login')
    }

    return { currentUser, router }
  } catch {
    if (res) {
      res.writeHead(302, { Location: '/admin/login' })
      res.end()
    } else router.push('/admin/login')
    return { currentUser: undefined, router }
  }
}

export default withRouter(AdminPanel)
