import Head from 'next/head'
import { Background } from '../../components/Common'
import ContentSection from '../../components/Section'
import Header, { HeaderHeading } from '../../components/Header'

export default () => (
  <>
    <Head>
      <title>Lori Yiu - Jonah Meijers</title>
    </Head>
    <Background route="/film/loriyiu">
      <Header>
        <HeaderHeading>Integrale Eindpresentatie Lori Yiu</HeaderHeading>
      </Header>
      <ContentSection route="/film/loriyiu" light>
        hoi
      </ContentSection>
    </Background>
  </>
)
