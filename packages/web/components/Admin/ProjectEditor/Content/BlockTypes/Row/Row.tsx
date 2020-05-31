import { Button } from 'components/Form'
import { ArticleImage, ArticleImageRow } from 'components/Project/Article'
import { imageValue, rowValue } from 'interfaces/Project'
import { EditorContainer, EditorProps } from '../Editors'
import { RowImageEditor } from './Image'

interface ImageRowEditorProps extends EditorProps<HTMLImageElement, rowValue> {}

export const ImageRowEditor: React.FunctionComponent<ImageRowEditorProps> = ({
  editing,
  onClick,
  onSave,
  onCancel,
  value,
  onChange,
}) => {
  const changeHandler = (i: number) => (imgValue: imageValue) => {
    const newValue = [...value]
    newValue[i] = imgValue
    onChange(newValue)
  }

  const addImage = () => {
    const newValue = [...value]
    newValue.push({ srcSet: [], alt: '' })
    onChange(newValue)
  }

  const removeImage = (i: number) => {
    const newValue = [...value]
    const slicedArray = newValue.slice(i, 1)
    onChange(slicedArray)
  }

  return editing ? (
    <EditorContainer>
      {value &&
        value.map((value, i) => (
          <>
            <RowImageEditor value={value} onChange={changeHandler(i)} />
            <Button onClick={() => removeImage(i)}>
              Afbeelding verwijderen
            </Button>
          </>
        ))}
      <Button onClick={addImage}>Afbeelding toevoegen</Button>
      <Button onClick={onSave}>Opslaan</Button>
      <Button onClick={onCancel}>Annuleren</Button>
    </EditorContainer>
  ) : (
    <ArticleImageRow amount={value.length}>
      {value &&
        value.map(({ srcSet, alt }) => (
          <ArticleImage onClick={onClick} src={srcSet} alt={alt} />
        ))}
    </ArticleImageRow>
  )
}
