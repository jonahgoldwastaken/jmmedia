import { SmallSelectInput } from 'components/Form'
import { FieldArrayRenderProps, useField } from 'formik'
import { ContentInput, ContentTypes } from 'generated/graphql'
import { useCallback, useState } from 'react'
import styled from 'styled-components'
import {
  FilmEditor,
  HeadingEditor,
  ImageEditor,
  ImageRowEditor,
  ParagraphEditor,
} from './BlockTypes'

type ContentBlockProps = {
  value: ContentInput
  onTypeChange: (type: ContentTypes) => void
  onCancel: () => void
  onChange: (data: string) => void
  onSave: () => void
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

export const Content: React.FC<FieldArrayRenderProps> = ({
  replace,
  remove,
  push,
}) => {
  const [{ value }] = useField<ContentInput[]>('content')

  const changeHandler = (index: number) => (data: string) =>
    replace(index, { type: value[index].type, data })

  const cancelHandler = (index: number) => () =>
    !value[index].data && remove(index)

  const saveHandler = () =>
    value[value.length - 1].data && push({ type: 'paragraph', data: '' })

  const typeChangeHandler = (value: ContentInput, index: number) => (
    type: ContentTypes
  ) => {
    const newValue = value
    if (
      type === 'image' ||
      type === 'row' ||
      value.type === 'image' ||
      value.type === 'row'
    )
      newValue.data = ''
    newValue.type = type
    replace(index, newValue)
  }

  return (
    <>
      {value.map((value, index) => (
        <ContentBlock
          value={value}
          key={index}
          onTypeChange={typeChangeHandler(value, index)}
          onCancel={cancelHandler(index)}
          onChange={changeHandler(index)}
          onSave={saveHandler}
        />
      ))}
    </>
  )
}

const ContentBlock: React.FC<ContentBlockProps> = ({
  value: { data, type },
  onTypeChange,
  onCancel,
  onChange,
  onSave,
}) => {
  const [editing, setEditing] = useState(true)

  const cancelHandler = useCallback(() => {
    setEditing(false)
    onCancel()
  }, [data, type])

  const saveHandler = useCallback(() => {
    setEditing(false)
    onSave()
  }, [data, type])

  return (
    <Container>
      {editing && (
        <SmallSelectInput
          label="&#9776;"
          name=""
          onChange={e => onTypeChange(e.currentTarget.value as ContentTypes)}
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
          onChange={value => onChange(value)}
          onCancel={cancelHandler}
          onSave={saveHandler}
          value={data}
        />
      )}
      {type === 'paragraph' && (
        <ParagraphEditor
          onClick={() => setEditing(true)}
          editing={editing}
          onChange={value => onChange(value.replace(/\n/gm, ''))}
          onCancel={cancelHandler}
          onSave={saveHandler}
          value={data}
        />
      )}
      {type === 'image' && (
        <ImageEditor
          onClick={() => setEditing(true)}
          editing={editing}
          onChange={value => onChange(JSON.stringify(value))}
          onCancel={cancelHandler}
          onSave={saveHandler}
          value={data ? JSON.parse(data) : { alt: '', srcSet: [] }}
        />
      )}
      {type === 'film' && (
        <FilmEditor
          onClick={() => setEditing(true)}
          editing={editing}
          onChange={value => onChange(value)}
          onCancel={cancelHandler}
          onSave={saveHandler}
          value={data}
        />
      )}
      {type === 'row' && (
        <ImageRowEditor
          onClick={() => setEditing(true)}
          editing={editing}
          onChange={value => onChange(value.toString())}
          onCancel={cancelHandler}
          onSave={saveHandler}
          value={data ? JSON.parse(data) : []}
        />
      )}
    </Container>
  )
}
