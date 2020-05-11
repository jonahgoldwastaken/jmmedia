import fetch from 'isomorphic-unfetch'
import { useCookie } from 'next-cookie'
import { ChangeEvent, useContext } from 'react'
import styled from 'styled-components'
import { InputField } from '../../../Form'
import { ProjectEditorContext } from '../Context'

const AddContentSelectContainer = styled.div`
  width: ${props => props.theme.widths[3]};
  padding: ${props => props.theme.spacing[3]};
  margin: ${props => props.theme.spacing[2]} 0;
  border: ${props => props.theme.spacing[0]} solid
    ${props => props.theme.colours.secondary};
`

export const AddContent = () => {
  const cookie = useCookie()
  const context = useContext(ProjectEditorContext)
  const addHandler = async (e: ChangeEvent<HTMLSelectElement>) => {
    const newContentBlock = await fetch(
      (process?.env?.BASE_URL || window?.location?.origin) +
        '/api/content/create',
      {
        method: 'POST',
        headers: {
          Authorization: `bearer ${cookie.get<string>('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: e.currentTarget.value,
          content: '',
          alt: '',
          size: '',
        }),
      }
    ).then(r => (r.ok ? r.json() : null))
    context.onChange({
      name: 'content',
      value: [...context.content, newContentBlock],
    })
  }

  return (
    <AddContentSelectContainer>
      <InputField
        name="addContent"
        onChange={addHandler}
        type="select"
        label="Voeg content toe"
        value=""
        options={[
          { name: 'Tekstkop', value: 'heading' },
          { name: 'Paragraaf', value: 'paragraph' },
          { name: 'Afbeelding', value: 'image' },
          { name: 'Afbeeldingsrij', value: 'row' },
          { name: 'Film', value: 'film' },
        ]}
      />
    </AddContentSelectContainer>
  )
}
