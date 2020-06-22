import Footer from 'components/Footer'
import Form, { Input, SelectInput } from 'components/Form'
import Header from 'components/Header'
import Section from 'components/Section'
import { HeadingOne } from 'components/Text/Headings'
import { Field, Formik } from 'formik'
import { useServiceSelectQuery } from 'generated/graphql'
import { NextPage } from 'next'
import Head from 'next/head'

// const validateContactForm = values => {}

const ContactPage: NextPage = () => {
  const { data, loading } = useServiceSelectQuery()

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
            onSubmit={() => {}}
            initialValues={{ email: '', subject: '', service: '', message: '' }}
          >
            {({ handleReset, handleSubmit }) => (
              <Form onReset={handleReset} onSubmit={handleSubmit}>
                <Field
                  as={Input}
                  label="E-mailadres"
                  name="email"
                  type="email"
                />
                <Field as={Input} label="Onderwerp" name="subject" />
                <Field
                  name="service"
                  as={SelectInput}
                  options={data?.services ?? []}
                  label={loading ? 'Services laden..' : 'Service'}
                />
              </Form>
            )}
          </Formik>
        </Section>
      </main>
      <Footer />
    </>
  )
}

export default ContactPage
