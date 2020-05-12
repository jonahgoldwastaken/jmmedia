import { ChangeEvent } from 'react'
import { Button, InputField } from '../../../../Form'
import { ArticleHeading } from '../../../../Portfolio/Article'
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
      <InputField
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
