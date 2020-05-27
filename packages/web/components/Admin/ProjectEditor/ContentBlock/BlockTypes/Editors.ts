import { ChangeEvent, MouseEvent } from 'react'
import styled from 'styled-components'

export interface EditorProps<InputElement, ArticleElement, VType = string> {
  editing: boolean
  value: VType
  onClick: (e: MouseEvent<ArticleElement>) => void
  onCancel: () => void
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
