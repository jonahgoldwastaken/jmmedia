import { useContext, useState } from 'react'
import styled from 'styled-components'
import { ProjectContent } from '../../../../interfaces/Project'
import { Button } from '../../../Form'
import { ProjectEditorContext } from '../Context'
import { HeadingEditor, ParagraphEditor } from './Editors'

type ContentEditorProps = {
  type: ProjectContent['type']
  alt: string
  size: number
  content: string
  index: number
}

const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: ${props => props.theme.widths[0]};
  display: flex;
`

const Container = styled.div`
  position: relative;

  &:not(:hover) > ${ButtonContainer} {
    display: none;
  }
`

export const ContentEditor: React.FunctionComponent<ContentEditorProps> = ({
  alt,
  content,
  size,
  type,
  index,
}) => {
  const context = useContext(ProjectEditorContext)
  const [editing, setEditing] = useState(!content)
  const [value, setValue] = useState(content)

  const saveHandler = async () => {
    const updatedContentBlock: ProjectContent = {
      size,
      type,
      content: value,
      alt,
    }

    let contentList = [...context.content]
    contentList.splice(index, 1, updatedContentBlock)
    context.onChange({
      name: 'content',
      value: contentList,
    })

    setEditing(false)
  }

  const changeHandler = (value: string) => {
    setValue(value)
  }

  const cancelHandler = async () => {
    if (!content) {
      let contentList = [...context.content]
      contentList.splice(index, 1)
      context.onChange({ name: 'content', value: contentList })
      setEditing(false)
    } else {
      setEditing(false)
    }
  }

  const deleteHandler = async () => {
    let contentList = [...context.content]
    contentList.splice(index, 1)
    context.onChange({ name: 'content', value: contentList })
    setEditing(false)
  }

  return (
    <Container>
      {!editing && (
        <ButtonContainer>
          <Button
            small
            onClick={() => {
              setEditing(true)
            }}
          >
            Bewerken
          </Button>
          <Button small onClick={deleteHandler}>
            Verwijderen
          </Button>
        </ButtonContainer>
      )}
      {type === 'heading' && (
        <HeadingEditor
          editing={editing}
          onChange={e => changeHandler(e.currentTarget.value)}
          onCancel={cancelHandler}
          onSubmit={saveHandler}
          value={value}
        />
      )}
      {type === 'paragraph' && (
        <ParagraphEditor
          editing={editing}
          onChange={e => changeHandler(e.currentTarget.value)}
          onCancel={cancelHandler}
          onSubmit={saveHandler}
          value={value}
        />
      )}
    </Container>
  )
}
