import { ChangeEvent } from 'react'
import { Button, TextAreaInput } from 'components/Form'
import { ArticleText } from 'components/Portfolio/Article'
import { EditorContainer, EditorProps } from './Editors'

interface ParagraphEditorProps extends EditorProps {
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export const ParagraphEditor: React.FunctionComponent<ParagraphEditorProps> = ({
  editing,
  onCancel,
  onChange,
  onSubmit,
  value,
}) =>
  editing ? (
    <EditorContainer>
      <TextAreaInput
        label=""
        name="paragraph"
        value={value}
        required
        onChange={onChange}
      />
      <Button
        onClick={e => {
          e.preventDefault()
          onSubmit()
        }}
      >
        Opslaan
      </Button>
      <Button
        onClick={e => {
          e.preventDefault()
          onCancel()
        }}
      >
        Annuleren
      </Button>
    </EditorContainer>
  ) : (
    <ArticleText>{value}</ArticleText>
  )
