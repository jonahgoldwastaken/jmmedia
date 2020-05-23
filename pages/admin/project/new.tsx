import { NextPage } from 'next'
import { useCookie } from 'next-cookie'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ProjectEditor, {
  ProjectEditorContext,
} from 'components/Admin/ProjectEditor'
import { ProjectContent } from 'interfaces/Project'
import { withApollo } from 'libs/apollo'
import ApolloClient from 'apollo-client'
import {
  NEW_PROJECT_SERVICES,
  newProjectServicesData,
} from 'gql/newProjectServices'

interface Props {
  services: Array<{
    name: string
    _id: string
  }>
}

const NewProjectPage: NextPage<Props> = ({ services }) => {
  const cookie = useCookie()
  const router = useRouter()
  const [project, setProject] = useState<{
    title: string
    slug: string
    listImage: string
    service: string
    callToAction: string
    content: ProjectContent[]
  }>({
    title: '',
    slug: '',
    listImage: '',
    service: '',
    callToAction: '',
    content: [
      {
        data: '',
        type: 'heading',
      },
    ],
  })

  const serviceOptions = services.map(({ name, _id: value }) => ({
    name,
    value,
  }))

  useEffect(() => {
    console.log('project updated!', project)
  }, [project])

  const changeHandler = ({
    name,
    value,
  }: {
    name: string
    value: string | any[]
  }) => {
    const tempProject = { ...project }
    tempProject[name] = value
    setProject(tempProject)
  }

  const submitHandler = async () => {
    const newProject = await fetch(
      `${
        process?.env?.BASE_URL || window?.location?.origin
      }/api/projects/create`,
      {
        method: 'POST',
        body: JSON.stringify(project),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${cookie.get('auth-token')}`,
        },
      }
    ).then(r => (r.ok ? r.json() : null))
    router.push(`/project/${newProject.slug}`)
  }

  return (
    <>
      <Head>
        <title>{project.title || 'Nieuw project'} - JM</title>
      </Head>
      <ProjectEditorContext.Provider
        value={{
          content: project.content,
          properties: {
            title: {
              type: 'text',
              value: project.title,
            },
            slug: {
              type: 'text',
              value: project.slug,
            },
            listImage: {
              type: 'file',
              value: project.listImage,
            },
            service: {
              type: 'select',
              options: serviceOptions,
              value: project.service,
            },
            callToAction: {
              type: 'text',
              value: project.callToAction,
            },
          },
          onChange: changeHandler,
          onSubmit: submitHandler,
        }}
      >
        <ProjectEditor />
      </ProjectEditorContext.Provider>
    </>
  )
}

NewProjectPage.getInitialProps = async ({ apolloClient }: any) => {
  const { data } = await (apolloClient as ApolloClient<{}>).query<
    newProjectServicesData
  >({
    query: NEW_PROJECT_SERVICES,
  })
  return { services: data.services }
}

export default withApollo({ ssr: true })(NewProjectPage)
