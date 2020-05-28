import ServiceEditor from 'components/Admin/ServiceEditor'
import {
  LoggedInUserDocument,
  ServiceInput,
  useNewServiceMutation,
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
const NewServicePage: NextPage<Props> = ({ cookie }) => {
  const router = useRouter()
  const [mutation] = useNewServiceMutation()

  const [service, setService] = useState<ServiceInput>({
    name: '',
    slug: '',
    listImage: '',
    description: [],
    baseOptions: [],
    additionalOptions: [],
    callToAction: '',
  })

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
    await mutation({ variables: { service } })
    router.push(`/admin`)
  }, [service])

  return (
    <>
      <Head>
        <title>{service.name || 'Nieuw service'} - JM</title>
      </Head>
      <ServiceEditor
        service={service}
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
