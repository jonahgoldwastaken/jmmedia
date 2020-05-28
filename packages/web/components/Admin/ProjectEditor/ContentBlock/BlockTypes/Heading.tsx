import { Input } from 'components/Form'
import { ArticleHeading } from 'components/Project/Article'
import { EditorContainer, EditorProps } from './Editors'

interface HeadingEditorProps extends EditorProps<HTMLHeadingElement, string> {}

export const HeadingEditor: React.FunctionComponent<HeadingEditorProps> = ({
  value,
  onChange,
  onCancel,
  onSubmit,
  onClick,
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
        onChange={e => onChange(e.currentTarget.value)}
        onKeyUp={e => {
          if (e.key === 'Enter') onSubmit()
          else if (e.key === 'Escape') onCancel()
        }}
      />
    </EditorContainer>
  ) : (
    <ArticleHeading onClick={onClick}>{value}</ArticleHeading>
  )
