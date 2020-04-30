import Head from 'next/head'
import Background from '../../components/Common/Background'
import Header, { HeaderHeading } from '../../components/Header'
import List from '../../components/Film/List'
import ListItem from '../../components/Film/List/Item'
import Footer from '../../components/Footer'

export default () => {
  return (
    <>
      <Head>
        <title>Film - Jonah Meijers</title>
      </Head>
      <Background currentPage="/films">
        <Header>
          <HeaderHeading>Films</HeaderHeading>
        </Header>
        <List>
          <ListItem
            href="/films/stop"
            imgSrc="https://storage.googleapis.com/filmportfolio/film/haarlem/placeholder.png"
            vidSrc="https://storage.googleapis.com/filmportfolio/film/haarlem/preview.mp4"
            columns={[1, 2, 3]}
          >
            Stop
          </ListItem>
          <ListItem
            href="/films/loriyiu"
            imgSrc="https://storage.googleapis.com/filmportfolio/film/loriyiu/placeholder.png"
            vidSrc="https://storage.googleapis.com/filmportfolio/film/loriyiu/preview.mp4"
            columns={[1, 2, 3]}
          >
            Concert Lori Yiu
          </ListItem>
          <ListItem
            href="/films/plantapp"
            imgSrc="https://storage.googleapis.com/filmportfolio/film/plantapp/placeholder.png"
            vidSrc="https://storage.googleapis.com/filmportfolio/film/plantapp/preview.mp4"
            columns={[1, 2, 2]}
          >
            PlantApp
          </ListItem>
          <ListItem
            href="/films/awakening"
            imgSrc="https://storage.googleapis.com/filmportfolio/film/awakening/placeholder.png"
            vidSrc="https://storage.googleapis.com/filmportfolio/film/awakening/preview.mp4"
            columns={[1, 2, 4]}
          >
            Awakening
          </ListItem>
        </List>
        <Footer>Filmproject op de agenda?</Footer>
      </Background>
    </>
  )
}
