import { Logo } from '../components/Logo'
import Header from '../components/Header'
import { HeaderNav } from '../components/Header/HeaderNav/HeaderNav'
import Image from '../components/Image'
import { HeadingOne } from '../components/Text/Headings'
import { List } from '../components/Portfolio/List/List'
import { CoverImage } from '../components/CoverImage'

export default () => (
  <>
    <Header>
      <Logo size="small" />
      <HeaderNav />
    </Header>
    <HeadingOne>Je moeder is een plopkoek</HeadingOne>
    <Image
      src="https://storage.googleapis.com/filmportfolio/over/profielfoto.jpg"
      alt="Jonah Meijers"
    />
    <CoverImage
      src="https://storage.googleapis.com/filmportfolio/over/profielfoto.jpg"
      colour="orange"
    >
      Je moeder is een plopkoek
    </CoverImage>
    <List />
  </>
)
