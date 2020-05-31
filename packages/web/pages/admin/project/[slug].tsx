import ProjectEditor from 'components/Admin/ProjectEditor'
import { Formik } from 'formik'
import {
  LoggedInUserDocument,
  ProjectInput,
  useDeleteProjectMutation,
  useProjectToUpdateQuery,
  useUpdateProjectMutation,
} from 'generated/graphql'
import { withApollo } from 'libs/apollo'
import { NextPage, NextPageContext } from 'next'
import withRouter, { WithRouterProps } from 'next/dist/client/with-router'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import { WithApolloClient } from 'apolloClient'

const EditProjectPage: NextPage<WithRouterProps> = ({ router }) => {
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

EditProjectPage.getInitialProps = async ({
  res,
  router,
  apolloClient,
}: WithApolloClient<NextPageContext & WithRouterProps>) => {
  try {
    const {
      data: { currentUser },
    }: { data: { currentUser: string } } = await apolloClient.query({
      query: LoggedInUserDocument,
    })
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

export default withApollo({ ssr: true })(withRouter(EditProjectPage))
