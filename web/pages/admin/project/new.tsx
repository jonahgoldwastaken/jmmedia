import ProjectEditor from 'components/Admin/ProjectEditor'
import { ProjectInput } from 'generated/graphql'
import { withApollo } from 'libs/apollo'
import { NextPage } from 'next'
import { useCookie } from 'next-cookie'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

interface Props {}

const NewProjectPage: NextPage<Props> = () => {
  const cookie = useCookie()
  const router = useRouter()

  const [project, setProject] = useState<ProjectInput>({
    title: '',
    slug: '',
    listImage: '',
    service: '',
    callToAction: '',
    content: [],
  })

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

      <ProjectEditor
        project={project}
        onChange={changeHandler}
        onSubmit={submitHandler}
      />
    </>
  )
}

export default withApollo({ ssr: true })(NewProjectPage)
