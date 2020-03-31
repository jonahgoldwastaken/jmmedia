import Head from 'next/head'
import Background from '../components/Common/Background'
import List from '../components/Film/List'
import ListItem from '../components/Film/List/Item'
import Footer from '../components/Footer'

export default () => {
  return (
    <>
      <Head>
        <title>Film - Jonah Meijers</title>
      </Head>
      <Background currentPage="/">
        <List>
          <ListItem
            href="/films/voorstellen"
            imgSrc="https://storage.googleapis.com/filmportfolio/film/voorstellen/placeholder.png"
            vidSrc="https://storage.googleapis.com/filmportfolio/film/voorstellen/preview.mov"
            year="2020"
          >
            Even Voorstellen
          </ListItem>
          <ListItem
            href="/films/stop"
            imgSrc="https://storage.googleapis.com/filmportfolio/film/haarlem/placeholder.png"
            vidSrc="https://storage.googleapis.com/filmportfolio/film/haarlem/preview.mp4"
            year="2019"
          >
            Stop
          </ListItem>
          <ListItem
            href="/films/loriyiu"
            imgSrc="https://storage.googleapis.com/filmportfolio/film/loriyiu/placeholder.png"
            vidSrc="https://storage.googleapis.com/filmportfolio/film/loriyiu/preview.mp4"
            year="2019"
          >
            Concert Lori Yiu
          </ListItem>
          <ListItem
            href="/films/plantapp"
            imgSrc="https://storage.googleapis.com/filmportfolio/film/plantapp/placeholder.png"
            vidSrc="https://storage.googleapis.com/filmportfolio/film/plantapp/preview.mp4"
            year="2018"
          >
            PlantApp
          </ListItem>
          <ListItem
            href="/films/awakening"
            imgSrc="https://storage.googleapis.com/filmportfolio/film/awakening/placeholder.png"
            vidSrc="https://storage.googleapis.com/filmportfolio/film/awakening/preview.mp4"
            year="2017"
          >
            Awakening
          </ListItem>
        </List>
        <Footer>Filmproject op de agenda?</Footer>
      </Background>
    </>
  )
}
