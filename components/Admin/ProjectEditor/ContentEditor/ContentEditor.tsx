import fetch from 'isomorphic-unfetch'
import { useCookie } from 'next-cookie'
import { useContext, useState } from 'react'
import styled from 'styled-components'
import { ProjectContent } from '../../../../interfaces/Project'
import { Button } from '../../../Form'
import { ProjectEditorContext } from '../Context'
import { HeadingEditor, ParagraphEditor } from './Editors'

type ContentEditorProps = {
  type: ProjectContent['type']
  id: string
  alt: string
  size: number
  content: string
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
  id,
  size,
  type,
}) => {
  const context = useContext(ProjectEditorContext)
  const cookie = useCookie()
  const [editing, setEditing] = useState(!content)
  const [value, setValue] = useState(content)

  const submitHandler = async () => {
    const updatedContentBlock: ProjectContent = await fetch(
      `${
        process?.env?.BASE_URL || window?.location?.origin
      }/api/content/edit?id=${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${cookie.get('auth-token')}`,
        },
        body: JSON.stringify({
          size: size,
          type: type,
          content: value,
          alt: alt,
        }),
      }
    ).then(r => (r.ok ? r.json() : null))

    let contentList = [...context.content]
    const i = contentList.findIndex(
      ({ _id }) => _id === updatedContentBlock._id
    )
    contentList.splice(i, 1, updatedContentBlock)
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
      const succeeded = await fetch(
        `${
          process?.env?.BASE_URL || window?.location?.origin
        }/api/content/delete?id=${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `bearer ${cookie.get('auth-token')}`,
          },
        }
      ).then(r => r.ok)
      if (succeeded) {
        let contentList = [...context.content]
        contentList.splice(contentList.length - 1, 1)
        context.onChange({ name: 'content', value: contentList })
        setEditing(false)
      }
    } else {
      setEditing(false)
    }
  }

  const deleteHandler = async () => {
    const succeeded = await fetch(
      `${
        process?.env?.BASE_URL || window?.location?.origin
      }/api/content/delete?id=${id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `bearer ${cookie.get('auth-token')}`,
        },
      }
    ).then(r => r.ok)
    if (succeeded) {
      let contentList = [...context.content]
      contentList.splice(contentList.length - 1, 1)
      context.onChange({ name: 'content', value: contentList })
      setEditing(false)
    }
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
          onSubmit={submitHandler}
          value={value}
        />
      )}
      {type === 'paragraph' && (
        <ParagraphEditor
          editing={editing}
          onChange={e => changeHandler(e.currentTarget.value)}
          onCancel={cancelHandler}
          onSubmit={submitHandler}
          value={value}
        />
      )}
    </Container>
  )
}
