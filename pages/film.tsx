import { Header, HeaderHeading, HeaderVideo } from '../components/Header'
import { Background } from '../components/Common/Background'
import Head from 'next/head'

export default () => {
  return (
    <>
      <Head>
        <title>Film - Jonah Meijers</title>
      </Head>
      <Background route="/film">
        <Header>
          <HeaderHeading dark>Film</HeaderHeading>
        </Header>
      </Background>
    </>
  )
}
