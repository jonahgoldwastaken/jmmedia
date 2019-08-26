import Header from '../components/Header'
import Hero, { HeroHeading } from '../components/Hero'
import List, { ListItem } from '../components/List'

export default () => (
  <>
    <Header active={0} />
    <Hero>
      <HeroHeading>Gepassioneerde filmmaker.</HeroHeading>
    </Hero>
    <List heading="2018">
      <ListItem highlight>Hoi</ListItem>
      <ListItem large>Hoi</ListItem>
      <ListItem>Hoi</ListItem>
      <ListItem>Hoi</ListItem>
      <ListItem large>Hoi</ListItem>
      <ListItem large>Hoi</ListItem>
      <ListItem>Hoi</ListItem>
    </List>
  </>
)
