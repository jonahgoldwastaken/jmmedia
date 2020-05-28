import ServiceEditor from 'components/Admin/ServiceEditor'
import {
  LoggedInUserDocument,
  ServiceInput,
  useServiceToUpdateQuery,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
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
const NewServicePage: NextPage<Props> = ({ cookie }) => {
  const router = useRouter()
  const {
    query: { slug },
  } = router
  const { data, loading } = useServiceToUpdateQuery({
    variables: { slug: slug as string },
  })
  const [mutation] = useUpdateServiceMutation()
  const [deleteService] = useDeleteServiceMutation()
  const [id, setId] = useState('')
  const [service, setService] = useState<ServiceInput>({
    name: '',
    slug: '',
    listImage: '',
    description: [],
    baseOptions: [],
    additionalOptions: [],
    callToAction: '',
  })

  useEffect(() => {
    if (data?.service) {
      const {
        name,
        slug,
        listImage,
        description,
        baseOptions,
        additionalOptions,
        callToAction,
        _id,
      } = data.service
      setService({
        name,
        slug,
        listImage,
        description,
        baseOptions,
        additionalOptions,
        callToAction,
      })
      setId(_id)
    }
  }, [data])

  const changeHandler = ({
    name,
    value,
  }: {
    name: keyof ServiceInput
    value: any
  }) => {
    const tempService = { ...service }
    tempService[name] = value
    setService(tempService)
  }

  const submitHandler = useCallback(async () => {
    await mutation({ variables: { service, id } })
    router.push('/admin')
  }, [service])

  const deleteHandler = useCallback(async () => {
    await deleteService({ variables: { id } })
    router.push('/admin')
  }, [id])

  return (
    <>
      <Head>
        <title>{service.name || 'Service'} bewerken - JM</title>
      </Head>
      <ServiceEditor
        sideBarTitle={loading ? 'Service laden...' : `${service.name} Bewerken`}
        service={service}
        onDelete={deleteHandler}
        onChange={changeHandler}
        onSubmit={submitHandler}
      />
    </>
  )
}

//@ts-ignore
NewServicePage.getInitialProps = async ({
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

export default withApollo({ ssr: true })(withCookie(withRouter(NewServicePage)))
