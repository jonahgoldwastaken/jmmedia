import ServiceEditor from 'components/Admin/ServiceEditor'
import { Formik } from 'formik'
import { LoggedInUserDocument, useNewServiceMutation } from 'generated/graphql'
import { withApollo } from 'libs/apollo'
import { NextPage } from 'next'
import { withCookie, WithCookieProps } from 'next-cookie'
import withRouter, { WithRouterProps } from 'next/dist/client/with-router'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

interface Props extends WithRouterProps, WithCookieProps {
  currentUser: {
    username: string
  }
}

//@ts-ignore
const NewServicePage: NextPage<Props> = ({ cookie }) => {
  const router = useRouter()
  const [mutation, { data }] = useNewServiceMutation()

  useEffect(() => {
    if (data) router.push('/admin')
  }, [data])

  return (
    <>
      <Head>
        <title>Nieuwe Service- JM</title>
      </Head>
      <Formik
        initialValues={{
          name: '',
          slug: '',
          listImage: '',
          description: [],
          baseOptions: [],
          additionalOptions: [],
          callToAction: '',
        }}
        onSubmit={service => mutation({ variables: { service } })}
      >
        <ServiceEditor />
      </Formik>
    </>
  )
}

//@ts-ignore
NewServicePage.getInitialProps = async ({
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

export default withApollo({ ssr: true })(withCookie(withRouter(NewServicePage)))
