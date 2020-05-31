import { ImageInput, Input } from 'components/Form'
import { ArticleImage } from 'components/Project/Article'
import { useImageUploadMutation } from 'generated/graphql'
import { imageValue } from 'interfaces/Project'
import { ChangeEvent, useEffect } from 'react'
import { EditorContainer, EditorProps } from './Editors'

interface ImageEditorProps extends EditorProps<HTMLImageElement, imageValue> {}

export const ImageEditor: React.FunctionComponent<ImageEditorProps> = ({
  editing,
  onChange,
  onClick,
  onSave: onSubmit,
  value,
}) => {
  const [uploadImage, { data }] = useImageUploadMutation()

  useEffect(() => {
    if (data) {
      onChange({
        alt: value.alt,
        srcSet: data.uploadImage,
      })
    }
  }, [data])

  const imageUploader = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { validity, files },
    } = e
    if (validity.valid && files?.length)
      uploadImage({ variables: { imageFile: files[0] } })
  }

  return editing ? (
    <EditorContainer>
      <Input
        type="text"
        label="Afbeelding"
        name=""
        value={value.alt}
        onChange={e =>
          onChange({
            srcSet: value.srcSet,
            alt: e.currentTarget.value,
          })
        }
        onKeyUp={e => {
          if (e.key === 'Enter') {
            e.preventDefault()
            onSubmit()
          }
        }}
      />
      <ImageInput
        name=""
        label=""
        value={value.srcSet ? value.srcSet[0] : ''}
        required
        onChange={imageUploader}
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
