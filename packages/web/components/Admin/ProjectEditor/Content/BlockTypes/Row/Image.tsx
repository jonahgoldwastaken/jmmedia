import { Input, ImageInput } from 'components/Form'
import { useImageUploadMutation } from 'generated/graphql'
import { imageValue } from 'interfaces/Project'
import { ChangeEvent, useEffect } from 'react'
import { EditorProps } from '../Editors'

interface RowImageEditorProps
  extends Pick<
    EditorProps<HTMLImageElement, imageValue>,
    'value' | 'onChange'
  > {}

export const RowImageEditor: React.FunctionComponent<RowImageEditorProps> = ({
  value,
  onChange,
}) => {
  const [uploadImage, { data }] = useImageUploadMutation()

  useEffect(() => {
    if (data) {
      onChange({
        ...value,
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
  return (
    <>
      <Input
        type="text"
        label="Afbeelding"
        name=""
        value={value.alt}
        onChange={e =>
          onChange({
            ...value,
            alt: e.currentTarget.value,
          })
        }
      />
      <ImageInput
        name=""
        label=""
        value={value.srcSet ? value.srcSet[0] : ''}
        required
        onChange={imageUploader}
      />
    </>
  )
}
