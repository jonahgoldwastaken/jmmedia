import ServiceEditor from 'components/Admin/ServiceEditor'
import { Formik } from 'formik'
import { LoggedInUserDocument, useNewServiceMutation } from 'generated/graphql'
import { withApollo } from 'libs/apollo'
import { NextPage, NextPageContext } from 'next'
import withRouter, { WithRouterProps } from 'next/dist/client/with-router'
import Head from 'next/head'
import { useEffect } from 'react'
import { WithApolloClient } from 'apolloClient'

const NewServicePage: NextPage<WithRouterProps> = ({ router }) => {
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

NewServicePage.getInitialProps = async ({
  res,
  router,
  apolloClient,
}: WithApolloClient<NextPageContext & WithRouterProps>) => {
  try {
    const {
      data: { currentUser },
    } = await apolloClient.query({ query: LoggedInUserDocument })

    if (res && !currentUser) {
      res.writeHead(302, { Location: '/admin/login' })
      res.end()
    } else if (!currentUser) router.push('/admin/login')

    return { router }
  } catch {
    if (res) {
      res.writeHead(302, { Location: '/admin/login' })
      res.end()
    } else router.push('/admin/login')

    return { router }
  }
}

export default withApollo({ ssr: true })(withRouter(NewServicePage))
