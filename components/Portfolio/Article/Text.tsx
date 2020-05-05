import styled from 'styled-components'
import { Paragraph } from '../../Text'
import { HeadingTwo, HeadingOne } from '../../Text/Headings'

export const ArticleTitle = styled(HeadingOne)`
  margin-bottom: ${props => props.theme.spacing[1]};
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
`
