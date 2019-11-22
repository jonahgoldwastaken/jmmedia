import Head from 'next/head'
import Link from 'next/link'
import { NavButton } from '../../components/Common'
import Background from '../../components/Common/Background'
import Header, { HeaderHeading } from '../../components/Common/Header'
import Footer from '../../components/Footer'
import List from '../../components/Photography/List'

export default () => {
  return (
    <>
      <Head>
        <title>Fotografie - Jonah Meijers</title>
      </Head>
      <Background currentPage="/fotografie">
        <Link href="/">
          <NavButton colour="white" icon="home" />
        </Link>
        <Header>
          <HeaderHeading>Fotografie</HeaderHeading>
        </Header>
        <List />
        <Footer>Ook op de foto?</Footer>
      </Background>
    </>
  )
}
