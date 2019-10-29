import Head from 'next/head'
import Link from 'next/link'
import { NavButton } from '../../components/Common'
import Background from '../../components/Common/Background'
import Header, { HeaderHeading } from '../../components/Common/Header'
import Footer from '../../components/Footer'
import List from '../../components/List'
import ListItem from '../../components/List/Item'

export default () => {
  return (
    <>
      <Head>
        <title>Film - Jonah Meijers</title>
      </Head>
      <Background currentPage="/film">
        <Link href="/">
          <NavButton colour="white" icon="home" />
        </Link>
        <Header>
          <HeaderHeading>Film</HeaderHeading>
        </Header>
        <List>
          <ListItem
            href="/film/stop"
            imgSrc="https://storage.googleapis.com/filmportfolio/film/haarlem/placeholder.png"
            vidSrc="https://storage.googleapis.com/filmportfolio/film/haarlem/preview.mp4"
            columns={[1, 2, 6]}
            rows={[1, 1, 2]}
          >
            Stop
          </ListItem>
          <ListItem
            href="/film/loriyiu"
            imgSrc="https://storage.googleapis.com/filmportfolio/film/loriyiu/placeholder.png"
            vidSrc="https://storage.googleapis.com/filmportfolio/film/loriyiu/preview.mp4"
            columns={[1, 2, 3]}
            rows={[1, 1, 2]}
          >
            Concert Lori Yiu
          </ListItem>
          <ListItem
            href="/film/plantapp"
            imgSrc="https://storage.googleapis.com/filmportfolio/film/plantapp/placeholder.png"
            vidSrc="https://storage.googleapis.com/filmportfolio/film/plantapp/preview.mp4"
            columns={[1, 2, 1]}
            rows={[1, 1, 2]}
          >
            PlantApp
          </ListItem>
          <ListItem
            href="/film/awakening"
            imgSrc="https://storage.googleapis.com/filmportfolio/film/awakening/placeholder.png"
            vidSrc="https://storage.googleapis.com/filmportfolio/film/awakening/preview.mp4"
            columns={[1, 2, 2]}
            rows={[1, 1, 2]}
          >
            Awakening
          </ListItem>
        </List>
        <Footer>Filmproject op de agenda?</Footer>
      </Background>
    </>
  )
}
