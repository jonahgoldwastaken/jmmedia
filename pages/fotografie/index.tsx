import Head from 'next/head'
import Link from 'next/link'
import { NavButton } from '../../components/Common'
import Background from '../../components/Common/Background'
import Header, { HeaderHeading } from '../../components/Common/Header'
import Footer from '../../components/Footer'
import List from '../../components/Film/List'
import ListItem from '../../components/Film/List/Item'

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
        <List>
          <ListItem
            href="/films/stop"
            imgSrc="https://storage.googleapis.com/filmportfolio/film/haarlem/placeholder.png"
            vidSrc="https://storage.googleapis.com/filmportfolio/film/haarlem/preview.mp4"
            columns={[1, 2, 3]}
            rows={[1, 1, 2]}
          >
            Stop
          </ListItem>
          <ListItem
            href="/films/loriyiu"
            imgSrc="https://storage.googleapis.com/filmportfolio/film/loriyiu/placeholder.png"
            vidSrc="https://storage.googleapis.com/filmportfolio/film/loriyiu/preview.mp4"
            columns={[1, 2, 3]}
            rows={[1, 1, 2]}
          >
            Concert Lori Yiu
          </ListItem>
          <ListItem
            href="/films/plantapp"
            imgSrc="https://storage.googleapis.com/filmportfolio/film/plantapp/placeholder.png"
            vidSrc="https://storage.googleapis.com/filmportfolio/film/plantapp/preview.mp4"
            columns={[1, 2, 2]}
            rows={[1, 1, 1]}
          >
            PlantApp
          </ListItem>
          <ListItem
            href="/films/awakening"
            imgSrc="https://storage.googleapis.com/filmportfolio/film/awakening/placeholder.png"
            vidSrc="https://storage.googleapis.com/filmportfolio/film/awakening/preview.mp4"
            columns={[1, 2, 4]}
            rows={[1, 1, 1]}
          >
            Awakening
          </ListItem>
        </List>
        <Footer>Filmproject op de agenda?</Footer>
      </Background>
    </>
  )
}
