import { CoverImage } from '../components/CoverImage'
import { Footer } from '../components/Footer/Footer'
import Header from '../components/Header'
import Image from '../components/Image'
import { Logo } from '../components/Logo'
import { List } from '../components/Portfolio/List/List'
import { HeadingOne } from '../components/Text/Headings'
import { FooterLink } from '../components/Footer/Link'

export default () => (
  <>
    <Header>
      <Logo size="small" />
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
    <Footer>
      <FooterLink colour="primary" href="plopkoek">
        Hoi
      </FooterLink>
      <FooterLink colour="secondary" href="plopkoek">
        Hoi
      </FooterLink>
      <FooterLink colour="primary" href="plopkoek">
        Hoi
      </FooterLink>
    </Footer>
  </>
)
