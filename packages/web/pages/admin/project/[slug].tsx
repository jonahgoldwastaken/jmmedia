import ProjectEditor from 'components/Admin/ProjectEditor'
import {
  LoggedInUserDocument,
  ProjectInput,
  useProjectToUpdateQuery,
  useUpdateProjectMutation,
} from 'generated/graphql'
import { withApollo } from 'libs/apollo'
import { NextPage } from 'next'
import { withCookie, WithCookieProps } from 'next-cookie'
import withRouter, { WithRouterProps } from 'next/dist/client/with-router'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

interface Props extends WithRouterProps, WithCookieProps {
  currentUser: {
    username: string
  }
}

//@ts-ignore
const NewProjectPage: NextPage<Props> = ({ cookie }) => {
  const router = useRouter()
  const {
    query: { slug },
  } = router
  const { data, loading } = useProjectToUpdateQuery({
    variables: { slug: slug as string },
  })
  const [mutation] = useUpdateProjectMutation()
  const [id, setId] = useState('')
  const [project, setProject] = useState<ProjectInput>({
    title: '',
    slug: '',
    listImage: '',
    service: '',
    callToAction: '',
    content: [],
  })

  useEffect(() => {
    if (data?.project) {
      const {
        callToAction,
        title,
        content,
        listImage,
        service,
        slug,
        _id,
      } = data.project
      setProject({
        title,
        callToAction,
        content: content.map(({ type, data }) => ({ type, data })),
        listImage,
        slug,
        service: service._id,
      })
      setId(_id)
    }
  }, [data])

  const changeHandler = useCallback(
    ({ name, value }: { name: keyof ProjectInput; value: any }) => {
      console.log('project to copy', project)
      const tempProject = { ...project }
      console.log('before editing', tempProject)
      tempProject[name] = value
      console.log('after editing', tempProject)
      setProject(tempProject)
    },
    [project]
  )

  const submitHandler = useCallback(async () => {
    await mutation({ variables: { project, id } })
    router.push(`/admin`)
  }, [project, id])

  return (
    <>
      <Head>
        <title>{project.title || 'Project'} Bewerken - JM</title>
      </Head>
      <ProjectEditor
        sideBarTitle={
          loading ? 'Project laden...' : `${project.title} Bewerken`
        }
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
