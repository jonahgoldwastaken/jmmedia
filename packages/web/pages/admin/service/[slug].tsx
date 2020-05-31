import { WithApolloClient } from 'apolloClient'
import ServiceEditor from 'components/Admin/ServiceEditor'
import { Formik } from 'formik'
import {
  LoggedInUserDocument,
  useDeleteServiceMutation,
  useServiceToUpdateQuery,
  useUpdateServiceMutation,
} from 'generated/graphql'
import { withApollo } from 'libs/apollo'
import { NextPage, NextPageContext } from 'next'
import withRouter, { WithRouterProps } from 'next/dist/client/with-router'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'

const EditServicePage: NextPage<WithRouterProps> = ({ router }) => {
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

EditServicePage.getInitialProps = async ({
  res,
  router,
  apolloClient,
}: WithApolloClient<NextPageContext & WithRouterProps>) => {
  try {
    const {
      data: { currentUser },
    } = await apolloClient.query({ query: LoggedInUserDocument })

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

export default withApollo({ ssr: true })(withRouter(EditServicePage))
