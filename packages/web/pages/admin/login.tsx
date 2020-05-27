import Form, { Button, Input } from 'components/Form'
import Header from 'components/Header'
import { HeadingOne } from 'components/Text/Headings'
import { useLoginUserMutation } from 'generated/graphql'
import { withApollo } from 'libs/apollo'
import { NextPage } from 'next'
import { useCookie } from 'next-cookie'
import { useRouter } from 'next/router'
import { FormEvent, useState, useCallback } from 'react'
import { Paragraph } from 'components/Text'

type stateFormData = {
  username: string
  password: string
}

type LoginProps = {
  user?: {
    username: string
    _id: string
  }
}
//@ts-ignore
const Login: NextPage<LoginProps> = () => {
  const cookie = useCookie()
  const router = useRouter()
  const [formData, setFormData] = useState<stateFormData>({
    username: '',
    password: '',
  })
  const [mutation, { loading, error }] = useLoginUserMutation()

  const submitForm = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()
      const { data, errors } = await mutation({ variables: { user: formData } })
      if (errors) console.error(errors)

      if (data) {
        cookie.set('auth-token', data.loginUser, { path: '/' })
        router.push('/admin')
      }
    },
    [formData]
  )

  return (
    <>
      <Header />
      <HeadingOne centre>Inloggen</HeadingOne>
      <Form onSubmit={submitForm}>
        <Input
          type="text"
          label="Gebruikersnaam"
          name="username"
          value={formData.username}
          onChange={e => {
            setFormData({
              username: (e.currentTarget as HTMLInputElement).value,
              password: formData.password,
            })
          }}
        />
        <Input
          type="password"
          label="Wachtwoord"
          name="password"
          value={formData.password}
          onChange={e => {
            setFormData({
              password: (e.currentTarget as HTMLInputElement).value,
              username: formData.username,
            })
          }}
        />
        <Button>{loading ? 'Bezig...' : 'Inloggen'}</Button>
      </Form>
      {error && <pre>{error}</pre>}
    </>
  )
}

export default withApollo({ ssr: true })(Login)
