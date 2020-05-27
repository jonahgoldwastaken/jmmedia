import { TextAreaInput } from 'components/Form'
import { ArticleText } from 'components/Portfolio/Article'
import { EditorContainer, EditorProps } from './Editors'

interface ParagraphEditorProps
  extends EditorProps<HTMLTextAreaElement, HTMLParagraphElement, string> {}

export const ParagraphEditor: React.FunctionComponent<ParagraphEditorProps> = ({
  editing,
  onChange,
  onCancel,
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
        onKeyUp={e => {
          console.log(e.key)
          if (e.key === 'Enter') {
            e.preventDefault()
            onSubmit()
          } else if (e.key === 'Escape') {
            e.preventDefault()
            onCancel()
          }
        }}
      />
    </EditorContainer>
  ) : (
    <ArticleText onClick={onClick}>{value}</ArticleText>
  )
