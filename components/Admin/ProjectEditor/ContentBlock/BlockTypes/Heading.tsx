import { ChangeEvent } from 'react'
import { Input } from 'components/Form'
import { ArticleHeading } from 'components/Portfolio/Article'
import { EditorContainer, EditorProps } from './Editors'

interface HeadingEditorProps extends EditorProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const HeadingEditor: React.FunctionComponent<HeadingEditorProps> = ({
  value,
  onChange,
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
    </EditorContainer>
  ) : (
    <ArticleHeading>{value}</ArticleHeading>
  )
