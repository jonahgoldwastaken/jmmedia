import styled, { css } from 'styled-components'
import { BaseRunning } from 'components/Text'
import Link from 'next/link'

interface Props {
  href: string
  as?: string
  centre?: boolean
}

interface CTAButtonProps {
  centre?: boolean
}

const CTAButton = styled.a<CTAButtonProps>`
  ${BaseRunning};
  display: block;
  width: max-content;
  text-align: center;

  ${({ theme, centre }) => css`
    margin: ${theme.spacing[2]} ${centre ? 'auto' : '0'};
    padding: ${theme.spacing[2]} ${theme.spacing[3]};
    font-size: ${theme.fontSizes[3]};
    font-weight: ${theme.fontWeights[2]};
    color: ${theme.colours.tertiary};
    background: ${theme.colours.secondary};
  `}

  &:not(:hover) {
    text-decoration: none;
  }
`

export const CTA: React.FC<Props> = ({ children, href, as, centre }) => (
  <Link as={as} href={href} scroll={false} passHref>
    <CTAButton centre={centre} role="button">
      {children}
    </CTAButton>
  </Link>
)
