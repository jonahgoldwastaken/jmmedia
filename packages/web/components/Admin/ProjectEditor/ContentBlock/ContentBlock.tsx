import { SmallSelectInput } from 'components/Form'
import { ProjectContent } from 'interfaces/Project'
import {
  ChangeEvent,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react'
import styled from 'styled-components'
import { ProjectEditorContext } from '../Context'
import { HeadingEditor, ParagraphEditor, ImageEditor } from './BlockTypes'
import { useImageUploadMutation } from 'generated/graphql'

type ContentBlockProps = {
  type: string
  data: string
  index: number
}

const Container = styled.div`
  display: inline-block;
  width: 100%;
  position: relative;
  cursor: text !important;

  &:not(:hover) > label {
    display: none;
  }
`

export const ContentBlock: React.FunctionComponent<ContentBlockProps> = ({
  data,
  type,
  index,
}) => {
  const { onChange, content } = useContext(ProjectEditorContext)
  const [uploadImage, { data: imageData }] = useImageUploadMutation()
  const [editing, setEditing] = useState(!data)
  const [value, setValue] = useState(() => {
    if (type === 'image' || type === 'row') {
      let returnValue
      if (data) returnValue = JSON.parse(data)
      else returnValue = {}
      return returnValue
    }
    return data
  })

  useEffect(() => {
    if (type === 'image' && imageData)
      setValue({
        alt: value.alt || '',
        srcSet: imageData.uploadImage,
      })
  }, [imageData])

  const saveHandler = useCallback(() => {
    let updatedContentBlock
    if (type === 'image' || type === 'row')
      updatedContentBlock = {
        type,
        data: JSON.stringify(value),
      }
    else
      updatedContentBlock = {
        type,
        data: value,
      }

    let contentList = [...content]
    contentList.splice(index, 1, updatedContentBlock)
    onChange({
      name: 'content',
      value: contentList,
    })

    setEditing(false)
  }, [value])

  const changeTypeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const newType = e.currentTarget.value as ProjectContent['type']
    let newContentBlock = {} as ProjectContent

    if (
      (type === 'image' && newType !== type) ||
      (type === 'row' && newType !== type) ||
      (newType === 'image' && newType !== type) ||
      (newType === 'row' && newType !== type)
    )
      newContentBlock.data = ''
    else newContentBlock.data = value
    newContentBlock.type = newType
    const contentList = [...content]
    contentList[index] = newContentBlock
    onChange({ name: 'content', value: contentList })
  }

  const changeHandler = (value: any) => {
    if (type === 'image' || type === 'row') setValue(JSON.stringify(value))
    else setValue(value)
  }

  return (
    <Container>
      {editing && (
        <SmallSelectInput
          label="&#9776;"
          name=""
          onChange={changeTypeHandler}
          value={type}
          options={[
            { name: 'Tekstkop', value: 'heading' },
            { name: 'Paragraaf', value: 'paragraph' },
            { name: 'Afbeelding', value: 'image' },
            { name: 'Afbeeldingsrij', value: 'row' },
            { name: 'Film', value: 'film' },
          ]}
        />
      )}
      {type === 'heading' && (
        <HeadingEditor
          onClick={() => setEditing(true)}
          editing={editing}
          onChange={e => changeHandler(e.currentTarget.value)}
          onSubmit={saveHandler}
          value={value}
        />
      )}
      {type === 'paragraph' && (
        <ParagraphEditor
          onClick={() => setEditing(true)}
          editing={editing}
          onChange={e => changeHandler(e.currentTarget.value)}
          onSubmit={saveHandler}
          value={value}
        />
      )}
      {type === 'image' && (
        <ImageEditor
          onClick={() => setEditing(true)}
          editing={editing}
          onChange={e => {
            const {
              target: { value: alt, validity, files },
            } = e
            if (validity.valid && files?.length)
              uploadImage({ variables: { imageFile: files[0] } })
            else
              setValue({
                srcSet: value.srcSet,
                alt,
              })
          }}
          onSubmit={saveHandler}
          value={value}
        />
      )}
    </Container>
  )
}
