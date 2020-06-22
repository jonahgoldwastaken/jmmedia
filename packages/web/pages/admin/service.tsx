import ServiceEditor from 'components/Admin/ServiceEditor'
import { Formik } from 'formik'
import { LoggedInUserDocument, useNewServiceMutation } from 'generated/graphql'
import { initializeApollo } from 'libs/apolloClient'
import { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import Router, { NextRouter } from 'next/router'
import { useEffect } from 'react'

const NewServicePage: NextPage<{ router: NextRouter }> = ({ router }) => {
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

NewServicePage.getInitialProps = async (ctx: NextPageContext) => {
  const apolloClient = initializeApollo()
  const { res } = ctx
  try {
    const {
      data: { currentUser },
    } = await apolloClient.query({ query: LoggedInUserDocument })

    if (res && !currentUser) {
      res.writeHead(302, { Location: '/admin/login' })
      res.end()
    } else if (!currentUser) Router.push('/admin/login')

    return { router: Router }
  } catch {
    if (res) {
      res.writeHead(302, { Location: '/admin/login' })
      res.end()
    } else Router.push('/admin/login')

    return { router: Router }
  }
}

export default NewServicePage
