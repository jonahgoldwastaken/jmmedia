import fetch from 'isomorphic-unfetch'
import { NextPage } from 'next'
import { withCookie, WithCookieContext } from 'next-cookie'
import { FormEvent, useState } from 'react'
import Form, { Button, InputField } from '../../components/Form'
import Header from '../../components/Header'
import { HeadingOne } from '../../components/Text/Headings'
import { useRouter } from 'next/router'

const { BASE_URL } = process.env

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
const Login: NextPage<LoginProps> = ({ cookie }) => {
  const [formData, setFormData] = useState<stateFormData>({
    username: '',
    password: '',
  })
  const router = useRouter()

  const submitForm = async (e: FormEvent) => {
    e.preventDefault()
    const res = await fetch(window?.location?.origin + '/api/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    if (res.ok) {
      const token = await res.text()
      cookie.set('auth-token', token)
      router.push('/admin/project/new')
    }
  }

  return (
    <>
      <Header />
      <HeadingOne centre>Inloggen</HeadingOne>
      <Form onSubmit={submitForm}>
        <InputField
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
        <InputField
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
        <Button>Inloggen</Button>
      </Form>
    </>
  )
}

Login.getInitialProps = async ({ cookie }: WithCookieContext) => {
  const user: LoginProps['user'] = await fetch(BASE_URL + '/api/authenticate', {
    headers: { Authorization: cookie.get('auth-token') },
  }).then(r => (r.ok ? r.json() : null))
  return { user }
}

export default withCookie(Login)
