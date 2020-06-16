import ProjectEditor from 'components/Admin/ProjectEditor'
import { Formik } from 'formik'
import {
  LoggedInUserDocument,
  ProjectInput,
  useNewProjectMutation,
} from 'generated/graphql'
import { initializeApollo } from 'libs/apolloClient'
import { NextPage, NextPageContext } from 'next'
import withRouter, { WithRouterProps } from 'next/dist/client/with-router'
import Head from 'next/head'
import { useEffect } from 'react'

const NewProjectPage: NextPage<WithRouterProps> = ({ router }) => {
  const [mutation, { data }] = useNewProjectMutation()

  useEffect(() => {
    if (data?.createProject) router.push('/admin')
  }, [data])

  return (
    <>
      <Head>
        <title>Nieuw project - JM</title>
      </Head>
      <Formik
        initialValues={
          {
            title: '',
            slug: '',
            listImage: '',
            service: '',
            callToAction: '',
            content: [
              {
                type: 'paragraph',
                data: '',
              },
            ],
          } as ProjectInput
        }
        onSubmit={project => mutation({ variables: { project } })}
      >
        <ProjectEditor />
      </Formik>
    </>
  )
}

NewProjectPage.getInitialProps = async (
  ctx: NextPageContext & WithRouterProps
) => {
  const apolloClient = initializeApollo(ctx)
  const { router, res } = ctx
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

    return { router }
  } catch {
    if (res) {
      res.writeHead(302, { Location: '/admin/login' })
      res.end()
    } else router.push('/admin/login')
    return { router }
  }
}

export default withRouter(NewProjectPage)
