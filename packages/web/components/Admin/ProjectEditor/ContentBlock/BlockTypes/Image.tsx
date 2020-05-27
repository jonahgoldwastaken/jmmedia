import { FileInput, Input } from 'components/Form'
import { ArticleImage } from 'components/Portfolio/Article'
import { imageValue } from 'interfaces/Project'
import { EditorContainer, EditorProps } from './Editors'

interface ImageEditorProps
  extends EditorProps<HTMLInputElement, HTMLImageElement, imageValue> {}

export const ImageEditor: React.FunctionComponent<ImageEditorProps> = ({
  editing,
  onChange,
  onClick,
  onSubmit,
  value,
}) => {
  return editing ? (
    <EditorContainer>
      <Input
        type="text"
        label="Afbeelding"
        name=""
        value={value.alt}
        onChange={onChange}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            e.preventDefault()
            onSubmit()
          }
        }}
      />
      <FileInput
        name=""
        label=""
        value={value.srcSet ? value.srcSet[0] : ''}
        required
        onChange={onChange}
      />
    </EditorContainer>
  ) : (
    <ArticleImage
      onClick={onClick}
      src={value.srcSet ? value.srcSet[1] : ''}
      alt={value.alt}
    />
  )
}
