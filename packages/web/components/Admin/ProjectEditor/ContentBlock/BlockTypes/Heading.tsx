import { Input } from 'components/Form'
import { ArticleHeading } from 'components/Portfolio/Article'
import { EditorContainer, EditorProps } from './Editors'

interface HeadingEditorProps
  extends EditorProps<HTMLInputElement, HTMLHeadingElement, string> {}

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
        onChange={onChange}
        onKeyUp={e => {
          if (e.key === 'Enter') onSubmit()
          else if (e.key === 'Escape') onCancel()
        }}
      />
    </EditorContainer>
  ) : (
    <ArticleHeading onClick={onClick}>{value}</ArticleHeading>
  )
