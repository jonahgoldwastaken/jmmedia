import { Input } from 'components/Form'
import { ArticleHeading } from 'components/Portfolio/Article'
import { EditorContainer, EditorProps } from './Editors'

interface HeadingEditorProps
  extends EditorProps<HTMLInputElement, HTMLHeadingElement, string> {}

export const HeadingEditor: React.FunctionComponent<HeadingEditorProps> = ({
  value,
  onChange,
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
        onKeyPress={e => {
          if (e.key === 'Enter') onSubmit()
        }}
      />
    </EditorContainer>
  ) : (
    <ArticleHeading onClick={onClick}>{value}</ArticleHeading>
  )
