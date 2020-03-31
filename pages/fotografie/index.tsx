import Head from 'next/head'
import Background from '../../components/Common/Background'
import Footer from '../../components/Footer'
import List from '../../components/Photography/List'

export default () => {
  return (
    <>
      <Head>
        <title>Fotografie - Jonah Meijers</title>
      </Head>
      <Background currentPage="/fotografie">
        <List />
        <Footer>Ook op de foto?</Footer>
      </Background>
    </>
  )
}
