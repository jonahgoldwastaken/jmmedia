import { SmallSelectInput } from 'components/Form'
import { ContentTypes } from 'generated/graphql'
import { ChangeEvent, useCallback, useContext, useState } from 'react'
import styled from 'styled-components'
import { ProjectEditorContext } from '../Context'
import {
  FilmEditor,
  HeadingEditor,
  ImageEditor,
  ImageRowEditor,
  ParagraphEditor,
} from './BlockTypes'

type ContentBlockProps = {
  type: ContentTypes
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
  type: givenType,
  index,
}) => {
  const { onChange, content } = useContext(ProjectEditorContext)
  const [editing, setEditing] = useState(!data)
  const [type, setType] = useState(givenType)
  const [value, setValue] = useState(() => {
    if (type === 'image') {
      let returnValue
      if (data) returnValue = JSON.parse(data)
      else returnValue = {}
      return returnValue
    }
    if (type === 'row') {
      let returnValue
      if (data) returnValue = JSON.parse(data)
      else returnValue = []
      return returnValue
    }
    return data
  })

  const changeTypeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const newType = e.currentTarget.value as ContentTypes

    if (
      type === 'image' ||
      type === 'row' ||
      newType === 'image' ||
      newType === 'row'
    )
      setValue('')
    setType(newType)
  }

  const changeHandler = useCallback((value: any) => setValue(value), [])

  const cancelEditing = useCallback(() => {
    if (content && !content[index].data) {
      let contentList = [...content]
      contentList.splice(index, 1)
      onChange({
        name: 'content',
        value: contentList,
      })
    }
    setEditing(false)
  }, [value])

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
          onChange={value => changeHandler(value)}
          onCancel={cancelEditing}
          onSubmit={saveHandler}
          value={value}
        />
      )}
      {type === 'paragraph' && (
        <ParagraphEditor
          onClick={() => setEditing(true)}
          editing={editing}
          onChange={value =>
            changeHandler(value.replace(/(\r\n|\n|\r)/gm, ' '))
          }
          onCancel={cancelEditing}
          onSubmit={saveHandler}
          value={value}
        />
      )}
      {type === 'image' && (
        <ImageEditor
          onClick={() => setEditing(true)}
          editing={editing}
          onChange={value => changeHandler(value)}
          onCancel={cancelEditing}
          onSubmit={saveHandler}
          value={value}
        />
      )}
      {type === 'film' && (
        <FilmEditor
          onClick={() => setEditing(true)}
          editing={editing}
          onChange={value => changeHandler(value)}
          onCancel={cancelEditing}
          onSubmit={saveHandler}
          value={value}
        />
      )}
      {type === 'row' && (
        <ImageRowEditor
          onClick={() => setEditing(true)}
          editing={editing}
          onChange={value => changeHandler(value)}
          onCancel={cancelEditing}
          onSubmit={saveHandler}
          value={value}
        />
      )}
    </Container>
  )
}
