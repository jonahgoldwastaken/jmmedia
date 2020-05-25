import styled from 'styled-components'
import { ChangeEvent, MouseEvent } from 'react'

export interface EditorProps<Element> {
  editing: boolean
  value: string
  onClick: (e: MouseEvent<Element>) => void
  onChange: (event: ChangeEvent<Element>) => void
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
