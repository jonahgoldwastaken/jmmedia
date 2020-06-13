import { Button, Input } from 'components/Form'
import { ArticleVideo } from 'components/Project/Article'
import { filmValue } from 'interfaces/Project'
import styled from 'styled-components'
import { EditorContainer, EditorProps } from './Editors'

interface FilmEditorProps extends EditorProps<HTMLButtonElement, filmValue> {}

const EditButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
`
export const FilmEditor: React.FC<FilmEditorProps> = ({
  editing,
  onChange,
  onCancel,
  onClick,
  onSave: onSubmit,
  value,
}) => {
  return editing ? (
    <EditorContainer>
      <Input
        type="text"
        label=""
        name=""
        value={value}
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
    <>
      <EditButton onClick={onClick}>Bewerken</EditButton>
      <ArticleVideo id={value} />
    </>
  )
}
