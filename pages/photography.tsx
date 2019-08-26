import Head from 'next/head'
import Header from '../components/Header'
import Hero, { HeroHeading } from '../components/Hero'
import List, { ListItem } from '../components/List'

export default () => (
  <>
    <Head>
      <title>Fotografie - Jonah Meijers</title>
    </Head>
    <Header active={1} />
    <Hero>
      <HeroHeading>Hobbyistische fotograaf.</HeroHeading>
    </Hero>
    <List heading="2018">
      <ListItem large>Hoi</ListItem>
      <ListItem large>Hoi</ListItem>
      <ListItem>Hoi</ListItem>
      <ListItem>Hoi</ListItem>
      <ListItem large>Hoi</ListItem>
      <ListItem large>Hoi</ListItem>
      <ListItem>Hoi</ListItem>
    </List>
  </>
)
