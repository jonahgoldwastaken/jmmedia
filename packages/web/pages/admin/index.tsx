import { DataValue } from '@apollo/react-hoc'
import Header from 'components/Header'
import List, { ListItem } from 'components/List'
import Section from 'components/Section'
import { HeadingOne, HeadingTwo } from 'components/Text/Headings'
import {
  AdminPanelQuery,
  AdminPanelQueryVariables,
  useLoggedInUserQuery,
  withAdminPanel,
} from 'generated/graphql'
import { withApollo } from 'libs/apollo'
import { NextPage } from 'next'
import { withCookie, WithCookieProps } from 'next-cookie'
import { WithRouterProps } from 'next/dist/client/with-router'
import Head from 'next/head'
import { withRouter } from 'next/router'

type Props = {
  data: DataValue<AdminPanelQuery, AdminPanelQueryVariables>
} & WithCookieProps &
  WithRouterProps

//@ts-ignore
const AdminPanel: NextPage<Props> = ({ data: { projects, services } }) => {
  const { data } = useLoggedInUserQuery()

  return (
    <>
      <Head>
        <title>Admin - JM Media</title>
      </Head>

      <Header />
      <HeadingOne>Hoi {data?.currentUser?.username}!</HeadingOne>
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

//@ts-ignore
AdminPanel.getInitialProps = (ctx: any) => {
  const token: string = ctx.cookie.get('auth-token')

  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: '/admin/login' })
    ctx.res.end()
    return
  } else if (!token) {
    ctx.router.push('/admin/login')
    return
  }
  return {
    token,
  }
}

export default withApollo({ ssr: true })(
  withAdminPanel()(withCookie(withRouter(AdminPanel)))
)
