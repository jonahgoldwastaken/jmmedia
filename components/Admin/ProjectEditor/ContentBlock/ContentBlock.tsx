import { useContext, useState, ChangeEvent } from 'react'
import styled from 'styled-components'
import { ProjectContent } from 'interfaces/Project'
import { ProjectEditorContext } from '../Context'
import { HeadingEditor, ParagraphEditor } from './BlockTypes'
import { SmallSelectInput } from 'components/Form'

type ContentBlockProps = {
  type: ProjectContent['type']
  data: string
  index: number
}

const Container = styled.div`
  display: inline-block;
  width: 100%;
  position: relative;

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
  const [editing, setEditing] = useState(!data)
  const [value, setValue] = useState(data)

  const saveHandler = async () => {
    const updatedContentBlock: ProjectContent = {
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
  }

  const changeTypehandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const newType = e.currentTarget.value as ProjectContent['type']
    let newContentBlock = {} as ProjectContent

    if (
      (newType === 'heading' && type === 'image') ||
      (newType === 'heading' && type === 'row') ||
      (newType === 'paragraph' && type === 'image') ||
      (newType === 'paragraph' && type === 'row') ||
      (newType === 'film' && type === 'image') ||
      (newType === 'film' && type === 'row') ||
      (type === 'heading' && newType === 'image') ||
      (type === 'heading' && newType === 'row') ||
      (type === 'paragraph' && newType === 'image') ||
      (type === 'paragraph' && newType === 'row') ||
      (type === 'film' && newType === 'image') ||
      (type === 'film' && newType === 'row')
    )
      newContentBlock.data = ''
    else newContentBlock.data = value
    newContentBlock.type = newType
    const contentList = [...content]
    contentList[index] = newContentBlock
    onChange({ name: 'content', value: contentList })
  }

  const changeHandler = (value: any) => {
    if (type === 'image' || type === 'row' || type === 'heading')
      setValue(JSON.stringify(value))
    else setValue(value)
  }

  return (
    <Container>
      {editing && (
        <SmallSelectInput
          label="&#9776;"
          name=""
          onChange={changeTypehandler}
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
          editing={editing}
          onChange={e => changeHandler(e.currentTarget.value)}
          onSubmit={saveHandler}
          value={value}
        />
      )}
      {type === 'paragraph' && (
        <ParagraphEditor
          editing={editing}
          onChange={e => changeHandler(e.currentTarget.value)}
          onSubmit={saveHandler}
          value={value}
        />
      )}
    </Container>
  )
}
