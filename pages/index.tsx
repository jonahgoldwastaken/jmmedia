import Head from 'next/head'
import Header from '../components/Header'
import Hero, { HeroHeading } from '../components/Hero'
import List, { ListItem } from '../components/List'
import { ItemVideo } from '../components/List/Item/Media'
import { ItemHeading } from '../components/List/Item/Heading'

export default () => (
  <>
    <Head>
      <title>Jonah Meijers</title>
    </Head>
    <Header active={0} />
    <Hero>
      <HeroHeading>Gepassioneerde filmmaker.</HeroHeading>
    </Hero>
    <List heading="2018">
      <ListItem highlight>
        <ItemVideo
          placeholder="https://miro.medium.com/max/3150/1*KOiaTWFJoDphFszMOeA78Q.jpeg"
          src="https://ak0.picdn.net/shutterstock/videos/1021491520/preview/stock-footage-the-information-on-the-bills-are-fake-placeholder-name-is-use-paying-bills-using-a-laptop.mp4"
        />
        <ItemHeading>Hoi</ItemHeading>
      </ListItem>
      <ListItem>
        <ItemVideo
          placeholder="https://miro.medium.com/max/3150/1*KOiaTWFJoDphFszMOeA78Q.jpeg"
          src="https://ak0.picdn.net/shutterstock/videos/1021491520/preview/stock-footage-the-information-on-the-bills-are-fake-placeholder-name-is-use-paying-bills-using-a-laptop.mp4"
        />
        <ItemHeading>Hoi</ItemHeading>
      </ListItem>
      <ListItem large>
        <ItemVideo
          placeholder="https://miro.medium.com/max/3150/1*KOiaTWFJoDphFszMOeA78Q.jpeg"
          src="https://ak0.picdn.net/shutterstock/videos/1021491520/preview/stock-footage-the-information-on-the-bills-are-fake-placeholder-name-is-use-paying-bills-using-a-laptop.mp4"
        />
        <ItemHeading>Hoi</ItemHeading>
      </ListItem>
      <ListItem large>
        <ItemVideo
          placeholder="https://miro.medium.com/max/3150/1*KOiaTWFJoDphFszMOeA78Q.jpeg"
          src="https://ak0.picdn.net/shutterstock/videos/1021491520/preview/stock-footage-the-information-on-the-bills-are-fake-placeholder-name-is-use-paying-bills-using-a-laptop.mp4"
        />
        <ItemHeading>Hoi</ItemHeading>
      </ListItem>
      <ListItem>
        <ItemVideo
          placeholder="https://miro.medium.com/max/3150/1*KOiaTWFJoDphFszMOeA78Q.jpeg"
          src="https://ak0.picdn.net/shutterstock/videos/1021491520/preview/stock-footage-the-information-on-the-bills-are-fake-placeholder-name-is-use-paying-bills-using-a-laptop.mp4"
        />
        <ItemHeading>Hoi</ItemHeading>
      </ListItem>
      <ListItem>
        <ItemVideo
          placeholder="https://miro.medium.com/max/3150/1*KOiaTWFJoDphFszMOeA78Q.jpeg"
          src="https://ak0.picdn.net/shutterstock/videos/1021491520/preview/stock-footage-the-information-on-the-bills-are-fake-placeholder-name-is-use-paying-bills-using-a-laptop.mp4"
        />
        <ItemHeading>Hoi</ItemHeading>
      </ListItem>
      <ListItem>
        <ItemVideo
          placeholder="https://miro.medium.com/max/3150/1*KOiaTWFJoDphFszMOeA78Q.jpeg"
          src="https://ak0.picdn.net/shutterstock/videos/1021491520/preview/stock-footage-the-information-on-the-bills-are-fake-placeholder-name-is-use-paying-bills-using-a-laptop.mp4"
        />
        <ItemHeading>Hoi</ItemHeading>
      </ListItem>
      <ListItem>
        <ItemVideo
          placeholder="https://miro.medium.com/max/3150/1*KOiaTWFJoDphFszMOeA78Q.jpeg"
          src="https://ak0.picdn.net/shutterstock/videos/1021491520/preview/stock-footage-the-information-on-the-bills-are-fake-placeholder-name-is-use-paying-bills-using-a-laptop.mp4"
        />
        <ItemHeading>Hoi</ItemHeading>
      </ListItem>
    </List>
  </>
)
