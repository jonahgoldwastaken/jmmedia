import ProjectEditor from 'components/Admin/ProjectEditor'
import { Formik } from 'formik'
import {
  LoggedInUserDocument,
  ProjectInput,
  ProjectToUpdateDocument,
  ProjectToUpdateQuery,
  ProjectToUpdateQueryVariables,
  useDeleteProjectMutation,
  useUpdateProjectMutation,
} from 'generated/graphql'
import { initializeApollo } from 'libs/apolloClient'
import { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'

interface Props {
  project?: ProjectToUpdateQuery['project']
}

const EditProjectPage: NextPage<Props> = ({ project }) => {
  const router = useRouter()
  const [mutation, { data: updateResult }] = useUpdateProjectMutation()
  const [deleteProject, { data: deleteResult }] = useDeleteProjectMutation()

  useEffect(() => {
    if (!project) router.push('/admin')
  }, [project])

  useEffect(() => {
    if (updateResult || deleteResult) router.push('/admin')
  }, [deleteResult, updateResult])

  const deleteHandler = useCallback(async () => {
    deleteProject({ variables: { id: project?._id as string } })
  }, [project])

  return (
    <>
      <Head>
        <title>{project?.title || 'Project'} Bewerken - JM</title>
      </Head>
      <Formik
        onSubmit={projectToSend =>
          mutation({
            variables: { project: projectToSend, id: project?._id as string },
          })
        }
        initialValues={
          {
            title: project?.title || '',
            slug: project?.slug || '',
            listImage: project?.listImage || '',
            service: project?.service._id || '',
            callToAction: project?.callToAction || '',
            content:
              project?.content.map(({ type, data }) => ({
                type,
                data,
              })) || [],
          } as ProjectInput
        }
      >
        <ProjectEditor
          key={project?._id}
          sideBarTitle={`${project?.title} Bewerken`}
          onDelete={deleteHandler}
        />
      </Formik>
    </>
  )
}

EditProjectPage.getInitialProps = async (ctx: NextPageContext) => {
  const apolloClient = initializeApollo(ctx)
  const {
    res,
    query: { slug },
  } = ctx
  try {
    const {
      data: { currentUser },
    }: { data: { currentUser: string } } = await apolloClient.query({
      query: LoggedInUserDocument,
    })
    if (res && !currentUser) {
      res.writeHead(302, { Location: '/admin/login' })
      res.end()
    } else if (!currentUser) document.location.pathname = '/admin/login'
    else {
      const result = await apolloClient.query<
        ProjectToUpdateQuery,
        ProjectToUpdateQueryVariables
      >({
        query: ProjectToUpdateDocument,
        variables: { slug: slug as string },
      })
      return { project: result.data?.project }
    }
    return { project: null }
  } catch {
    if (res) {
      res.writeHead(302, { Location: '/admin/login' })
      res.end()
    } else document.location.pathname = '/admin/login'
    return { project: null }
  }
}

export default EditProjectPage
