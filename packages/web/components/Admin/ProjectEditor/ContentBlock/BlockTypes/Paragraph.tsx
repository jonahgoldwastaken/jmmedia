import { TextAreaInput } from 'components/Form'
import { ArticleText } from 'components/Project/Article'
import { EditorContainer, EditorProps } from './Editors'

interface ParagraphEditorProps
  extends EditorProps<HTMLParagraphElement, string> {}

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
        onChange={e => onChange(e.currentTarget.value)}
        onKeyUp={e => {
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
