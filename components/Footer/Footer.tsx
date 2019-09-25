import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styled } from '../../theme'
import { FooterContactLink } from './ContactLink'
import { FooterHeading } from './Heading'
import { FooterList } from './List'
import { FooterParagraph } from './Paragraph'

export const StyledFooter = styled.footer`
  padding: ${props => props.theme.space[3]};
  height: ${props => props.theme.sizes.static[1]};
  background: ${props => props.theme.colors.tertiary};
`

export const Footer: React.FunctionComponent = ({ children }) => (
  <StyledFooter>
    <FooterHeading>{children}</FooterHeading>
    <FooterParagraph>
      Neem dan contact met met op via een van deze kanalen, dan maken we er wat
      geweldigs van.
    </FooterParagraph>
    <FooterList>
      <FooterContactLink>
        <a href="tel:+31623267536">
          <FontAwesomeIcon icon="phone" />
        </a>
      </FooterContactLink>
      <FooterContactLink>
        <a href="mailto:info@jonahmeijers.nl">
          <FontAwesomeIcon icon="envelope" />
        </a>
      </FooterContactLink>
      <FooterContactLink>
        <a href="https://www.instagram.com/jonahgold.jpg">
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </a>
      </FooterContactLink>
      <FooterContactLink>
        <a href="https://www.linkedin.com/in/jonahmeijers/">
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </a>
      </FooterContactLink>
    </FooterList>
  </StyledFooter>
)
