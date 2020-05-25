import { ChangeEvent, MouseEvent } from 'react'
import styled from 'styled-components'

export interface EditorProps<InputElement, ArticleElement> {
  editing: boolean
  value: string
  onClick: (e: MouseEvent<ArticleElement>) => void
  onChange: (event: ChangeEvent<InputElement>) => void
  onSubmit: () => void
}

export const EditorContainer = styled.div`
  display: flex;
  flex-flow: row wrap;

  > :first-child {
    width: ${props => props.theme.spacing[4]};
    margin-bottom: 0;
  }
`
