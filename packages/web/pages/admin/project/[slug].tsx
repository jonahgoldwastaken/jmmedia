import ProjectEditor from 'components/Admin/ProjectEditor'
import {
  LoggedInUserDocument,
  ProjectInput,
  useProjectToUpdateQuery,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} from 'generated/graphql'
import { withApollo } from 'libs/apollo'
import { NextPage } from 'next'
import { withCookie, WithCookieProps } from 'next-cookie'
import withRouter, { WithRouterProps } from 'next/dist/client/with-router'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { Formik } from 'formik'

interface Props extends WithRouterProps, WithCookieProps {
  currentUser: {
    username: string
  }
}

//@ts-ignore
const EditProjectPage: NextPage<Props> = ({ cookie }) => {
  const router = useRouter()
  const {
    query: { slug },
  } = router
  const { data, loading } = useProjectToUpdateQuery({
    variables: { slug: slug as string },
  })
  const [mutation, { data: updateResult }] = useUpdateProjectMutation()
  const [deleteProject, { data: deleteResult }] = useDeleteProjectMutation()
  const [id, setId] = useState('')

  useEffect(() => {
    if (data?.project) {
      const { _id } = data.project
      setId(_id)
    }
  }, [data])

  useEffect(() => {
    if (updateResult || deleteResult) router.push('/admin')
  }, [deleteResult, updateResult])

  const deleteHandler = useCallback(async () => {
    deleteProject({ variables: { id } })
  }, [id])

  return (
    <>
      <Head>
        <title>{data?.project?.title || 'Project'} Bewerken - JM</title>
      </Head>
      <Formik
        onSubmit={project => mutation({ variables: { project, id } })}
        initialValues={
          {
            title: data?.project?.title || '',
            slug: data?.project?.slug || '',
            listImage: data?.project?.listImage || '',
            service: data?.project?.service || '',
            callToAction: data?.project?.callToAction || '',
            content: data?.project?.content || [],
          } as ProjectInput
        }
      >
        <ProjectEditor
          sideBarTitle={
            loading ? 'Project laden...' : `${data?.project?.title} Bewerken`
          }
          onDelete={deleteHandler}
        />
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

export default withApollo({ ssr: true })(
  withCookie(withRouter(EditProjectPage))
)
