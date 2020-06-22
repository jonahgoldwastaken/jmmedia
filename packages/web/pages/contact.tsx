import Footer from 'components/Footer'
import Form, {
  Input,
  SelectInput,
  TextAreaInput,
  Button,
} from 'components/Form'
import Header from 'components/Header'
import Section from 'components/Section'
import { HeadingOne, HeadingTwo } from 'components/Text/Headings'
import { Field, Formik } from 'formik'
import {
  useServiceSelectQuery,
  ServiceRequestInput,
  useRequestServiceMutation,
} from 'generated/graphql'
import { NextPage } from 'next'
import Head from 'next/head'
import { Paragraph } from 'components/Text'

// const validateContactForm = values => {}

const ContactPage: NextPage = () => {
  const {
    data: serviceSelectData,
    loading: serviceSelectLoadingState,
  } = useServiceSelectQuery()
  const [
    mutation,
    { data: requestMutationData, loading: requestMutationLoadingState },
  ] = useRequestServiceMutation()

  return (
    <>
      <Head>
        <title>Contact - JM</title>
      </Head>
      <Header />
      <main>
        <Section background="primary">
          <HeadingOne>Stuur een berichtje!</HeadingOne>
          <Formik
            onSubmit={(request: ServiceRequestInput) => {
              mutation({ variables: { request } })
            }}
            initialValues={
              {
                name: '',
                email: '',
                subject: '',
                service: '',
                message: '',
              } as ServiceRequestInput
            }
          >
            {({ handleReset, handleSubmit }) => (
              <Form onReset={handleReset} onSubmit={handleSubmit}>
                <Field
                  as={Input}
                  label="E-mailadres"
                  name="email"
                  type="email"
                />
                <Field as={Input} label="Je naam" name="name" />
                <Field as={Input} label="Onderwerp" name="subject" />
                <Field
                  name="service"
                  as={SelectInput}
                  options={serviceSelectData?.services ?? []}
                  label={
                    serviceSelectLoadingState ? 'Services laden..' : 'Service'
                  }
                />
                <Field as={TextAreaInput} label="Bericht" name="message" />
                <Button type="submit">
                  {requestMutationLoadingState
                    ? 'Bezig met verzenden...'
                    : 'Verzenden'}
                </Button>
              </Form>
            )}
          </Formik>
        </Section>
        {requestMutationData && (
          <Section background="secondary">
            <HeadingTwo>Het is gelukt!</HeadingTwo>
            <Paragraph>
              Ik zal mijn best doen om zo snel mogelijk op je terug te komen. :)
            </Paragraph>
            <Paragraph>{requestMutationData.toString()}</Paragraph>
          </Section>
        )}
      </main>
      <Footer />
    </>
  )
}

export default ContactPage
