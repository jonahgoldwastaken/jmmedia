import fetch from 'isomorphic-unfetch'
import { useCookie } from 'next-cookie'
import { KeyboardEvent, useContext, useState } from 'react'
import styled from 'styled-components'
import { ProjectContent } from '../../../../interfaces/Project'
import { Button, InputField } from '../../../Form'
import {
  ArticleHeading,
  ArticleImage,
  ArticleImageRow,
  ArticleText,
} from '../../../Portfolio/Article'
import { ArticleVideo } from '../../../Portfolio/Article/Video'
import { ProjectEditorContext } from '../Context'

type ContentEditorProps = {
  type: ProjectContent['type']
  id: string
  alt: string
  size: number
  content: string
}

const Container = styled.div`
  position: relative;

  button {
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
  }

  &:not(:hover) button {
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
  const [editingValue, setEditingValue] = useState(content)

  const updateContentBlock = async (e: KeyboardEvent<HTMLDivElement>) => {
    if (!editing) return
    if (e.key === 'Enter') {
      e.preventDefault()

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
            content: editingValue,
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

      setEditingValue('')
      setEditing(false)
    }
  }

  let block: any
  if (!editing) {
    if (type === 'heading') block = <ArticleHeading>{content}</ArticleHeading>
    else if (type === 'paragraph') block = <ArticleText>{content}</ArticleText>
    else if (type === 'film') block = <ArticleVideo src={content} />
    else if (type === 'image') block = <ArticleImage src={content} alt={alt} />
    else {
      const images: string[] = JSON.parse(content)
      block = (
        <ArticleImageRow amount={size}>
          {images.map((image: string) => (
            <ArticleImage src={image} />
          ))}
        </ArticleImageRow>
      )
    }
  } else {
    if (type === 'heading')
      block = (
        <InputField
          label="Tekstkop bewerken:"
          value={editingValue}
          name="heading"
          onChange={e => {
            setEditingValue(e.currentTarget.value)
          }}
          type="text"
        />
      )
    else if (type === 'paragraph')
      block = (
        <InputField
          label="Paragraaf bewerken:"
          value={editingValue}
          name="paragraph"
          onChange={e => {
            setEditingValue(e.currentTarget.value)
          }}
          type="textarea"
        />
      )
    else if (type === 'film') block = <ArticleVideo src={content} />
    else if (type === 'image') block = <ArticleImage src={content} alt={alt} />
    else {
      const images: string[] = JSON.parse(content)
      block = (
        <ArticleImageRow amount={size}>
          {images.map((image: string) => (
            <ArticleImage src={image} />
          ))}
        </ArticleImageRow>
      )
    }
  }

  return (
    <Container onKeyDown={updateContentBlock}>
      {!editing && (
        <Button
          small
          onClick={() => {
            setEditing(true)
            setEditingValue(content)
          }}
        >
          Bewerken
        </Button>
      )}
      {block}
    </Container>
  )
}
