import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styled } from '../../theme'
import { FooterContactLink } from './ContactLink'
import { FooterHeading } from './Heading'
import { FooterList } from './List'
import { FooterParagraph } from './Paragraph'

export const StyledFooter = styled.footer`
  padding: ${props => props.theme.space[3]};
  min-height: ${props => props.theme.sizes.static[1]};
  background: ${props => props.theme.colors.tertiary};

  .page-transition-enter & {
    opacity: 0;
  }

  .page-transition-enter-active & {
    opacity: 1;
    transition: opacity
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`};
  }

  .page-transition-exit & {
    opacity: 1;
  }

  .page-transition-exit-active & {
    opacity: 0;
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
      <FooterContactLink>
        <a target="_blank" href="tel:+31623267536">
          <FontAwesomeIcon icon="phone" />
          <span>Geef een belletje</span>
        </a>
      </FooterContactLink>
      <FooterContactLink>
        <a target="_blank" href="mailto:info@jonahmeijers.nl">
          <FontAwesomeIcon icon="envelope" />
          <span>Stuur een mailtje</span>
        </a>
      </FooterContactLink>
      <FooterContactLink>
        <a target="_blank" href="https://www.instagram.com/jonahgold.jpg">
          <FontAwesomeIcon icon={['fab', 'instagram']} />
          <span>Check mijn Instagram</span>
        </a>
      </FooterContactLink>
      <FooterContactLink>
        <a target="_blank" href="https://www.linkedin.com/in/jonahmeijers/">
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
          <span>Bekijk mijn LinkedIn</span>
        </a>
      </FooterContactLink>
    </FooterList>
  </StyledFooter>
)
