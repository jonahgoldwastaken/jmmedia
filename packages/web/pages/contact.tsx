import { NextPage } from 'next'
import Head from 'next/head'
import Footer from 'components/Footer'
import Section from 'components/Section'
import { HeadingOne } from 'components/Text/Headings'
import Header from 'components/Header'
import { Formik, Field } from 'formik'
import Form, { Input, SelectInput } from 'components/Form'
import { useServiceSelectQuery } from 'generated/graphql'

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
