import styled from 'styled-components'

export type EditorProps = {
  editing: boolean
  value: string
  onChange: (event: any) => void
  onSubmit: () => void
  onCancel: () => void
}

export const EditorContainer = styled.div`
  display: flex;
  flex-flow: row wrap;

  > :first-child {
    width: ${props => props.theme.spacing[4]};
    margin-bottom: 0;
  }

  button {
    display: inline-block;
    width: ${props => props.theme.widths[2]};
  }
`
