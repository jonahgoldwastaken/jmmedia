import Form, { Button, Input } from 'components/Form'
import Header from 'components/Header'
import Section from 'components/Section'
import { HeadingOne } from 'components/Text/Headings'
import { Field, Formik } from 'formik'
import { useLoggedInUserQuery, useLoginUserMutation } from 'generated/graphql'
import { NextPage } from 'next'
import { useCookie } from 'next-cookie'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Login: NextPage = () => {
  const cookie = useCookie()
  const router = useRouter()
  const [mutation, { data, loading, error }] = useLoginUserMutation()
  const { data: loggedInData } = useLoggedInUserQuery()

  useEffect(() => {
    if (data) {
      cookie.set('auth-token', data.loginUser, { path: '/' })
      console.log(data)
      router.push('/admin')
    }
  }, [data])

  useEffect(() => {
    loggedInData && loggedInData.currentUser && router.push('/admin')
  }, [loggedInData])

  return (
    <>
      <Header />
      <Section background="primary">
        <HeadingOne centre>Inloggen</HeadingOne>
      </Section>
      <Section background="primary">
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={user => mutation({ variables: { user } })}
        >
          {({ handleSubmit, handleReset }) => (
            <Form onSubmit={handleSubmit} onReset={handleReset}>
              <Field
                type="text"
                label="Gebruikersnaam"
                placeholder="Jonah"
                name="username"
                as={Input}
              />
              <Field
                type="password"
                placeholder="Een super geheim wachtwoord"
                label="Wachtwoord"
                name="password"
                as={Input}
              />
              <Button>{loading ? 'Bezig...' : 'Inloggen'}</Button>
            </Form>
          )}
        </Formik>
      </Section>
      {error && <pre>{JSON.stringify(error)}</pre>}
    </>
  )
}

export default Login
