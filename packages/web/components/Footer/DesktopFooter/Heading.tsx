import { BaseHeading } from 'components/Text/Headings/BaseHeading'
import styled from 'styled-components'

export const DesktopFooterHeading = styled(BaseHeading).attrs({ as: 'h3' })`
  color: ${({ theme }) => theme.colours.tertiary};
  font-size: ${({ theme }) => theme.fontSizes[2]};
`
