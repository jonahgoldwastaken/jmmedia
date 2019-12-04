import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styled } from '../../theme'
import { FooterContactLink } from './ContactLink'
import { FooterHeading } from './Heading'
import { FooterList } from './List'
import { FooterParagraph } from './Paragraph'

export const StyledFooter = styled.footer`
  padding: ${props => props.theme.space[3]};
  background: ${props => props.theme.colors.tertiary};

  @media screen and (max-width: ${props => props.theme.breakpoints[1]}) {
    padding: ${props => props.theme.space[3]};
  }

  .page-transition-enter & {
    opacity: 0;
  }

  .page-transition-enter-active & {
    opacity: 1;
    transition: opacity
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`};
  }
`

export const Footer: React.FunctionComponent = ({ children }) => (
  <StyledFooter>
    <FooterHeading>{children}</FooterHeading>
    <FooterParagraph>
      Neem dan contact met met op via een van deze kanalen en maken we er wat
      geweldigs van.
    </FooterParagraph>
    <FooterList>
      <FooterContactLink type="phone">
        <a rel="noreferrer" target="_blank" href="tel:+31623267536">
          <FontAwesomeIcon icon="phone" />
          <span>Geef een belletje</span>
        </a>
      </FooterContactLink>
      <FooterContactLink type="mail">
        <a rel="noreferrer" target="_blank" href="mailto:info@jonahmeijers.nl">
          <FontAwesomeIcon icon="envelope" />
          <span>Stuur een mailtje</span>
        </a>
      </FooterContactLink>
      <FooterContactLink type="instagram">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/jonahgold.jpg"
        >
          <FontAwesomeIcon icon={['fab', 'instagram']} />
          <span>Check mijn Instagram</span>
        </a>
      </FooterContactLink>
      <FooterContactLink type="linkedin">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/jonahmeijers/"
        >
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
          <span>Bekijk mijn LinkedIn</span>
        </a>
      </FooterContactLink>
    </FooterList>
  </StyledFooter>
)
