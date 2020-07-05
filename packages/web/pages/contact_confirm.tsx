import Footer from 'components/Footer'
import Header from 'components/Header'
import Section from 'components/Section'
import { HeadingOne } from 'components/Text/Headings'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Paragraph } from 'components/Text'
import CTA from 'components/CTA'

const ContactPage: NextPage = () => {
  const router = useRouter()
  const { name, email } = router.query

  useEffect(() => {
    if (!name || !email) router.push('/contact')
  }, [])

  if (name && email)
    return (
      <>
        <Head>
          <title>Contact is gelegd! - JM</title>
        </Head>
        <Header />
        <main>
          <Section centreContent background="secondary">
            <HeadingOne colour="secondary" centre>
              Hij is binnen!
            </HeadingOne>
            <Paragraph centre colour="secondary">
              We hebben je berichtje ontvangen {name}, en zullen je zo snel
              mogelijk terugmailen op dit e-mailadres: {email}. Fijne dag
              verder! :)
            </Paragraph>
            <CTA href="/">Naar homepagina</CTA>
          </Section>
        </main>
        <Footer />
      </>
    )
  else
    return (
      <>
        <Header />
        <Footer />
      </>
    )
}

export default ContactPage
