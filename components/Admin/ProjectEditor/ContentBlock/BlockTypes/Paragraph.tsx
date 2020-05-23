import { ChangeEvent } from 'react'
import { TextAreaInput } from 'components/Form'
import { ArticleText } from 'components/Portfolio/Article'
import { EditorContainer, EditorProps } from './Editors'

interface ParagraphEditorProps extends EditorProps {
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export const ParagraphEditor: React.FunctionComponent<ParagraphEditorProps> = ({
  editing,
  onChange,
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
    </EditorContainer>
  ) : (
    <ArticleText>{value}</ArticleText>
  )
