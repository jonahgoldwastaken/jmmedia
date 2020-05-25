import { Paragraph } from 'components/Text'
import { HeadingOne, HeadingTwo } from 'components/Text/Headings'
import styled from 'styled-components'

export const ArticleTitle = styled(HeadingOne)`
  margin-bottom: ${props => props.theme.spacing[1]};
  text-align: center;
`

export const ArticleHeading = styled(HeadingTwo)`
  max-width: 34.375rem;
  margin: 0 auto 0;

  + p {
    margin-top: ${props => props.theme.spacing[0]};
  }
`

export const ArticleText = styled(Paragraph)`
  max-width: 34.375rem;
  margin: 0 auto ${props => props.theme.spacing[2]};
  + p {
    margin-top: -${props => props.theme.spacing[1]};
  }
`
