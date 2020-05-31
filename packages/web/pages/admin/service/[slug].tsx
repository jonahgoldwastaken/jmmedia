import ServiceEditor from 'components/Admin/ServiceEditor'
import { Formik } from 'formik'
import {
  LoggedInUserDocument,
  useDeleteServiceMutation,
  useServiceToUpdateQuery,
  useUpdateServiceMutation,
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
  const [mutation, { data: updateResult }] = useUpdateServiceMutation()
  const [deleteService, { data: deleteResult }] = useDeleteServiceMutation()
  const [id, setId] = useState('')

  useEffect(() => {
    if (data?.service) {
      const { _id } = data.service
      setId(_id)
    }
  }, [data])

  useEffect(() => {
    if (updateResult || deleteResult) router.push('/admin')
  }, [deleteResult, updateResult])

  const deleteHandler = useCallback(async () => {
    deleteService({ variables: { id } })
  }, [id])

  return (
    <>
      <Head>
        <title>{data?.service?.name || 'Service'} bewerken - JM</title>
      </Head>
      <Formik
        initialValues={{
          name: data?.service?.name || '',
          slug: data?.service?.slug || '',
          listImage: data?.service?.listImage || '',
          description: data?.service?.description || [],
          baseOptions: data?.service?.description || [],
          additionalOptions: data?.service?.additionalOptions || [],
          callToAction: data?.service?.callToAction || '',
        }}
        onSubmit={service => mutation({ variables: { service, id } })}
      >
        <ServiceEditor
          sideBarTitle={
            loading ? 'Service laden...' : `${data?.service?.name} Bewerken`
          }
          onDelete={deleteHandler}
        />
      </Formik>
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
