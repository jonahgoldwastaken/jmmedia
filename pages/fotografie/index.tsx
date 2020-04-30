import Head from 'next/head'
import Background from '../../components/Common/Background'
import Header, { HeaderHeading } from '../../components/Header'
import Footer from '../../components/Footer'
import List from '../../components/Photography/List'

export default () => {
  return (
    <>
      <Head>
        <title>Fotografie - Jonah Meijers</title>
      </Head>
      <Background currentPage="/fotografie">
        <Header>
          <HeaderHeading>Fotografie</HeaderHeading>
        </Header>
        <List />
        <Footer>Ook op de foto?</Footer>
      </Background>
    </>
  )
}
