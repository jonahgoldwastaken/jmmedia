import Footer from 'components/Footer'
import Form, {
  Button,
  ContactTypeSelect,
  Input,
  SelectInput,
  TextAreaInput,
} from 'components/Form'
import Header from 'components/Header'
import Section from 'components/Section'
import { HeadingOne } from 'components/Text/Headings'
import { Field, Formik } from 'formik'
import {
  MessageInput,
  ServiceRequestInput,
  useSendMessageMutation,
  useSendRequestMutation,
  useServiceSelectQuery,
} from 'generated/graphql'
import { NextPage } from 'next'
import Head from 'next/head'
import { ChangeEvent, useCallback, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

type ContactType = 'message' | 'request' | ''

const ContactPage: NextPage = () => {
  const router = useRouter()
  const [contactType, setContactType] = useState<ContactType>('')
  const onContactTypeSelect = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) =>
      setContactType(e.currentTarget.value as ContactType),
    []
  )
  const {
    data: serviceSelectData,
    loading: serviceSelectLoadingState,
  } = useServiceSelectQuery()
  const [
    requestMutation,
    { data: requestMutationData, loading: requestMutationLoadingState },
  ] = useSendRequestMutation()
  const [
    messageMutation,
    { data: messageMutationData, loading: messageMutationLoadingState },
  ] = useSendMessageMutation()

  useEffect(() => {
    if (requestMutationData) {
      router.push({
        pathname: '/contact_confirm',
        query: {
          name: requestMutationData.submitRequest.name,
          email: requestMutationData.submitRequest.email,
        },
      })
    } else if (messageMutationData) {
      router.push({
        pathname: '/contact_confirm',
        query: {
          name: messageMutationData.submitMessage.name,
          email: messageMutationData.submitMessage.email,
        },
      })
    }
  }, [messageMutationData, requestMutationData])

  return (
    <>
      <Head>
        <title>Contact - JM</title>
      </Head>
      <Header />
      <main>
        <Section background="primary">
          <HeadingOne centre>Contact</HeadingOne>
          <ContactTypeSelect
            label="Waar kan ik je mee helpen?"
            name=""
            onChange={onContactTypeSelect}
          />
          {contactType === 'message' ? (
            <Formik
              onSubmit={(message: MessageInput) => {
                messageMutation({ variables: { message } })
              }}
              initialValues={
                {
                  name: '',
                  email: '',
                  subject: '',
                  message: '',
                } as MessageInput
              }
            >
              {({ handleReset, handleSubmit }) => (
                <Form onReset={handleReset} onSubmit={handleSubmit}>
                  <Field
                    as={Input}
                    label="Je naam"
                    name="name"
                    placeholder="Piet Snot"
                    required
                  />
                  <Field
                    as={Input}
                    label="Je e-mail"
                    name="email"
                    type="email"
                    placeholder="piet.snot@voorbeeld.nl"
                    required
                    bottomSpacing
                  />
                  <Field
                    as={Input}
                    label="Het onderwerp van je bericht"
                    placeholder="Hoi!"
                    name="subject"
                    required
                  />
                  <Field
                    as={TextAreaInput}
                    label="Je bericht"
                    placeholder="Ik vroeg me af of je..."
                    name="message"
                    required
                  />
                  <Button type="submit">
                    {messageMutationLoadingState
                      ? 'Bezig met verzenden...'
                      : 'Verzenden'}
                  </Button>
                </Form>
              )}
            </Formik>
          ) : (
            contactType === 'request' && (
              <Formik
                onSubmit={(request: ServiceRequestInput) => {
                  requestMutation({ variables: { request } })
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
                      label="Je naam"
                      name="name"
                      placeholder="Piet Snot"
                      required
                    />
                    <Field
                      as={Input}
                      label="Je e-mail"
                      name="email"
                      type="email"
                      placeholder="piet.snot@voorbeeld.nl"
                      required
                      bottomSpacing
                    />
                    <Field
                      as={Input}
                      label="Het onderwerp van je aanvraag"
                      placeholder="Evenement in het concertgebouw"
                      name="subject"
                      required
                    />
                    <Field
                      name="service"
                      as={SelectInput}
                      options={serviceSelectData?.services ?? []}
                      defaultText="Kies een service."
                      required
                      label={
                        serviceSelectLoadingState
                          ? 'Services laden..'
                          : 'Over wat voor project gaat het?'
                      }
                    />
                    <Field
                      as={TextAreaInput}
                      label="Vertel wat over je project"
                      placeholder="Ik ben op op zoek naar een filmmaker/fotograaf voor..."
                      name="message"
                      required
                    />
                    <Button type="submit">
                      {requestMutationLoadingState
                        ? 'Bezig met verzenden...'
                        : 'Verzenden'}
                    </Button>
                  </Form>
                )}
              </Formik>
            )
          )}
        </Section>
      </main>
      <Footer />
    </>
  )
}

export default ContactPage
