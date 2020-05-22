import { ChangeEvent } from 'react'
import { Button, Input } from 'components/Form'
import { ArticleHeading } from 'components/Portfolio/Article'
import { EditorContainer, EditorProps } from './Editors'

interface HeadingEditorProps extends EditorProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const HeadingEditor: React.FunctionComponent<HeadingEditorProps> = ({
  value,
  onSubmit,
  onChange,
  onCancel,
  editing,
}) =>
  editing ? (
    <EditorContainer>
      <Input
        label=""
        type="text"
        name="heading"
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
    <ArticleHeading>{value}</ArticleHeading>
  )
