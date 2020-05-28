import { Input, Button } from 'components/Form'
import { ArticleVideo } from 'components/Project/Article'
import { filmValue } from 'interfaces/Project'
import { EditorContainer, EditorProps } from './Editors'
import styled from 'styled-components'

interface FilmEditorProps
  extends EditorProps<HTMLInputElement, HTMLButtonElement, filmValue> {}

const EditButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
`
export const FilmEditor: React.FunctionComponent<FilmEditorProps> = ({
  editing,
  onChange,
  onCancel,
  onClick,
  onSubmit,
  value,
}) => {
  return editing ? (
    <EditorContainer>
      <Input
        type="text"
        label=""
        name=""
        value={value}
        onChange={onChange}
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
    <>
      <EditButton onClick={onClick}>Bewerken</EditButton>
      <ArticleVideo id={value} />
    </>
  )
}
