import { Paragraph } from 'components/Text'
import { HeadingOne, HeadingTwo } from 'components/Text/Headings'
import styled from 'styled-components'

export const ArticleTitle = styled(HeadingOne)`
  margin-bottom: ${props => props.theme.spacing[1]};
  text-align: center;
`

export const ArticleHeading = styled(HeadingTwo)`
  max-width: 34.375rem;
  margin-left: auto !important;
  margin-right: auto !important;

  + p {
    margin-top: ${props => props.theme.spacing[0]};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    max-width: 55rem;
  }
`

export const ArticleText = styled(Paragraph)`
  margin: 0 auto ${props => props.theme.spacing[2]};
  + p {
    margin-top: -${props => props.theme.spacing[1]};
  }
`
