import { SelectInput } from 'components/Form'
import { ChangeEvent, useCallback, useContext } from 'react'
import styled from 'styled-components'
import { ProjectEditorContext } from '../Context'

const AddContentSelectContainer = styled.div`
  width: ${props => props.theme.widths[3]};
  padding: ${props => props.theme.spacing[2]} ${props => props.theme.spacing[3]};
  margin: ${props => props.theme.spacing[2]} 0;
  border: ${props => props.theme.spacing[0]} solid
    ${props => props.theme.colours.secondary};
`

export const AddContent = () => {
  const { onChange, content } = useContext(ProjectEditorContext)
  const addHandler = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const newContent = Array.from(content || [])
      newContent.push({ type: e.currentTarget.value, data: '' })
      onChange({ name: 'content', value: newContent })
    },
    [content]
  )

  return (
    <AddContentSelectContainer>
      <SelectInput
        name="addContent"
        onChange={addHandler}
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
