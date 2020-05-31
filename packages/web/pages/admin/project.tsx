import ProjectEditor from 'components/Admin/ProjectEditor'
import { Formik } from 'formik'
import {
  LoggedInUserDocument,
  useNewProjectMutation,
  ProjectInput,
} from 'generated/graphql'
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
const NewProjectPage: NextPage<Props> = ({ cookie }) => {
  const router = useRouter()
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

//@ts-ignore
NewProjectPage.getInitialProps = async ({
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

export default withApollo({ ssr: true })(withCookie(withRouter(NewProjectPage)))
