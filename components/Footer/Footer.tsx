import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { keyframes } from 'styled-components'
import { styled } from '../../theme'
import { FooterContactLink } from './ContactLink'
import { FooterHeading } from './Heading'
import { FooterList } from './List'
import { FooterParagraph } from './Paragraph'

const footerAnimation = keyframes`
  from {
    transform: translateY(100%);
  } to {
    transform: translateY(0%);
  }
`

export const StyledFooter = styled.footer`
  position: sticky;
  top: 100vh;
  padding: ${props => props.theme.space[3]};
  background: ${props => props.theme.colours.tertiary};

  .page-transition-enter & {
    opacity: 0;
  }

  .page-transition-enter-active & {
    opacity: 1;
    animation: ${footerAnimation}
      ${props =>
        `${props.theme.animation.timing[2]} ${props.theme.animation.curve}`}
      forwards;
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
