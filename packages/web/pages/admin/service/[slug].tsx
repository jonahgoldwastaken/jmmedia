import ServiceEditor from 'components/Admin/ServiceEditor'
import { Formik } from 'formik'
import {
  LoggedInUserDocument,
  ServiceToUpdateDocument,
  ServiceToUpdateQuery,
  ServiceToUpdateQueryVariables,
  useDeleteServiceMutation,
  useUpdateServiceMutation,
} from 'generated/graphql'
import { initializeApollo } from 'libs/apolloClient'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'

interface Props {
  service?: ServiceToUpdateQuery['service']
}

const EditServicePage: NextPage<Props> = ({ service }) => {
  const router = useRouter()
  const [mutation, { data: updateResult }] = useUpdateServiceMutation()
  const [deleteService, { data: deleteResult }] = useDeleteServiceMutation()

  useEffect(() => {
    if (!service) router.push('/admin')
  }, [service])

  useEffect(() => {
    if (updateResult || deleteResult) router.push('/admin')
  }, [deleteResult, updateResult])

  const deleteHandler = useCallback(async () => {
    deleteService({ variables: { id: service?._id as string } })
  }, [service])

  return (
    <>
      <Head>
        <title>{service?.name || 'Service'} bewerken - JM</title>
      </Head>
      <Formik
        initialValues={{
          name: service?.name || '',
          slug: service?.slug || '',
          listImage: service?.listImage || '',
          description: service?.description || [],
          baseOptions: service?.description || [],
          additionalOptions: service?.additionalOptions || [],
          callToAction: service?.callToAction || '',
        }}
        onSubmit={serviceToSend =>
          mutation({
            variables: { service: serviceToSend, id: service?._id as string },
          })
        }
      >
        <ServiceEditor
          sideBarTitle={`${service?.name} Bewerken`}
          onDelete={deleteHandler}
        />
      </Formik>
    </>
  )
}

EditServicePage.getInitialProps = async ctx => {
  const apolloClient = initializeApollo()
  const {
    res,
    query: { slug },
  } = ctx
  try {
    const {
      data: { currentUser },
    } = await apolloClient.query({ query: LoggedInUserDocument })

    if (res && !currentUser) {
      res.writeHead(302, { Location: '/admin/login' })
      res.end()
    } else if (!currentUser) document.location.pathname = '/admin/login'
    else {
      const result = await apolloClient.query<
        ServiceToUpdateQuery,
        ServiceToUpdateQueryVariables
      >({
        query: ServiceToUpdateDocument,
        variables: { slug: slug as string },
      })
      return { service: result.data?.service }
    }
    return { service: null }
  } catch {
    if (res) {
      res.writeHead(302, { Location: '/admin/login' })
      res.end()
    } else document.location.pathname = '/admin/login'

    return { service: null }
  }
}

export default EditServicePage
