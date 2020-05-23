import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import Form, { Button, Input } from 'components/Form'
import Header from 'components/Header'
import { HeadingOne } from 'components/Text/Headings'
import { withApollo } from 'libs/apollo'
import { useCookie } from 'next-cookie'
import { useMutation } from '@apollo/react-hooks'
import {
  LOGIN_MUTATION,
  LoginMutationData,
  LoginMutationVariables,
} from 'gql/login'

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
  const [mutation, { called, data, loading, error }] = useMutation<
    LoginMutationData,
    LoginMutationVariables
  >(LOGIN_MUTATION)

  const submitForm = async (e: FormEvent) => {
    e.preventDefault()
    mutation({ variables: { user: formData } })
  }

  if (called && data) {
    cookie.set('auth-token', data.loginUser)
    router.push('/admin/project/new')
  }

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
    </>
  )
}

export default withApollo({ ssr: true })(Login)
