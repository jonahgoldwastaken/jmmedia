import ProjectEditor from 'components/Admin/ProjectEditor'
import {
  LoggedInUserDocument,
  NewProjectInput,
  useNewProjectMutation,
} from 'generated/graphql'
import { withApollo } from 'libs/apollo'
import { NextPage } from 'next'
import { withCookie, WithCookieProps } from 'next-cookie'
import withRouter, { WithRouterProps } from 'next/dist/client/with-router'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useCallback } from 'react'

interface Props extends WithRouterProps, WithCookieProps {
  currentUser: {
    username: string
  }
}

//@ts-ignore
const NewProjectPage: NextPage<Props> = ({ cookie }) => {
  const router = useRouter()
  const [mutation] = useNewProjectMutation()

  const [project, setProject] = useState<NewProjectInput>({
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
    name: keyof NewProjectInput
    value: any
  }) => {
    const tempProject = { ...project }
    tempProject[name] = value
    setProject(tempProject)
  }

  const submitHandler = useCallback(async () => {
    const { data } = await mutation({ variables: { project } })
    router.push(`/project/${data?.createProject.slug}`)
  }, [project])

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
