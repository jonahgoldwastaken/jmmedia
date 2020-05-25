import { ChangeEvent, KeyboardEvent } from 'react'
import { TextAreaInput } from 'components/Form'
import { ArticleText } from 'components/Portfolio/Article'
import { EditorContainer, EditorProps } from './Editors'

interface ParagraphEditorProps extends EditorProps<HTMLTextAreaElement> {
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export const ParagraphEditor: React.FunctionComponent<ParagraphEditorProps> = ({
  editing,
  onChange,
  onSubmit,
  onClick,
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
        onKeyPress={e => {
          if (e.key === 'Enter') {
            e.preventDefault()
            onSubmit()
          }
        }}
      />
    </EditorContainer>
  ) : (
    <ArticleText onClick={onClick}>{value}</ArticleText>
  )
