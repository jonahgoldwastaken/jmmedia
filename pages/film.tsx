import Header, { HeaderHeading } from '../components/Header'
import { Background } from '../components/Common'
import Head from 'next/head'
import List from '../components/List/'
import ListItem from '../components/List/Item/'

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
        <List>
          <ListItem
            vidSrc="https://ak6.picdn.net/shutterstock/videos/27590086/preview/stock-footage-attractive-young-businesswoman-working-at-night-via-computer-at-office-with-closeup-of-hipster.mp4"
            columns={1}
            rows={1}
          >
            Mooi flimpie
          </ListItem>
        </List>
      </Background>
    </>
  )
}
