import Head from 'next/head'
import { Background, NavButton } from '../../components/Common'
import Header, { HeaderHeading } from '../../components/Common/Header'
import List from '../../components/List'
import ListItem from '../../components/List/Item'
import Link from 'next/link'

export default () => {
  return (
    <>
      <Head>
        <title>Film - Jonah Meijers</title>
      </Head>
      <Background currentPage="/film">
        <Link href="/">
          <NavButton colour="black" icon="arrow-left" />
        </Link>
        <Header>
          <HeaderHeading dark>Film</HeaderHeading>
        </Header>
        <List>
          <ListItem
            href="/film/loriyiu"
            vidSrc="https://ak6.picdn.net/shutterstock/videos/27590086/preview/stock-footage-attractive-young-businesswoman-working-at-night-via-computer-at-office-with-closeup-of-hipster.mp4"
            columns={2}
            rows={3}
          >
            Integrale eindpresentatie Lori Yiu
          </ListItem>
        </List>
      </Background>
    </>
  )
}
