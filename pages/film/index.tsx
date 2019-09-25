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
          <NavButton colour="black" icon="home" />
        </Link>
        <Header>
          <HeaderHeading dark>Film</HeaderHeading>
        </Header>
        <List>
          <ListItem
            href="/film/loriyiu"
            imgAlt="Lori Yiu achter de toetsen"
            imgSrc="https://storage.googleapis.com/filmportfolio/film/loriyiu/placeholder.png"
            vidSrc="https://storage.googleapis.com/filmportfolio/film/loriyiu/preview.mp4"
            columns={2}
            rows={2}
          >
            Integrale eindpresentatie Lori Yiu
          </ListItem>
        </List>
      </Background>
    </>
  )
}
