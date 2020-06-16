import { DesktopFooterContainer } from './Container'
import { DesktopFooterHeading } from './Heading'
import { DesktopFooterList, DesktopFooterListItem } from './List'

export const DesktopFooterContact: React.FC = () => (
  <DesktopFooterContainer>
    <DesktopFooterHeading>Contactgegevens</DesktopFooterHeading>
    <DesktopFooterList>
      <DesktopFooterListItem>
        <a href="tel:+31623267536">+31 6 23 26 75 36</a>
      </DesktopFooterListItem>
      <DesktopFooterListItem>
        <a href="mailto:hoi@jmmedia.nl">hoi@jmmedia.nl</a>
      </DesktopFooterListItem>
    </DesktopFooterList>
    <DesktopFooterList>
      <DesktopFooterListItem>JMMedia</DesktopFooterListItem>
      <DesktopFooterListItem>Opaallaan 250</DesktopFooterListItem>
      <DesktopFooterListItem>2132LC Hoofddorp</DesktopFooterListItem>
    </DesktopFooterList>
  </DesktopFooterContainer>
)
