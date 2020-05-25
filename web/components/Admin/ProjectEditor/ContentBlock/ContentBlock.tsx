import { useContext, useState, ChangeEvent } from 'react'
import styled from 'styled-components'
import { ProjectContent } from 'interfaces/Project'
import { ProjectEditorContext } from '../Context'
import { HeadingEditor, ParagraphEditor } from './BlockTypes'
import { SmallSelectInput } from 'components/Form'

type ContentBlockProps = {
  type: string
  data: string
  index: number
}

const Container = styled.div`
  display: inline-block;
  width: 100%;
  position: relative;
  cursor: text;

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
    const updatedContentBlock = {
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
      (type === 'image' && newType !== type) ||
      (type === 'row' && newType !== type)
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
    </Container>
  )
}
