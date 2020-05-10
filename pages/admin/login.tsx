import fetch from 'isomorphic-unfetch'
import { NextPage } from 'next'
import { withCookie, WithCookieContext } from 'next-cookie'
import { FormEvent, useState } from 'react'
import Form, { Button, InputField } from '../../components/Form'
import Header from '../../components/Header'
import { HeadingOne } from '../../components/Text/Headings'

const { BASE_URL } = process.env

type stateFormData = {
  username: string
  password: string
}

type LoginProps = {
  user: {
    username: string
    _id: string
  }
}

const Login: NextPage<LoginProps> = () => {
  const [formData, setFormData] = useState<stateFormData>({
    username: '',
    password: '',
  })

  const submitForm = (e: FormEvent) => {
    e.preventDefault()
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

Login.getInitialProps = async (ctx: WithCookieContext) => {
  const user = await fetch(BASE_URL + '/api/authenticate', {
    headers: { Authorization: ctx.cookie.get('auth-token') },
  }).then(r => (r.status !== 200 ? null : r.json()))
  return { user }
}

export default withCookie(Login)
