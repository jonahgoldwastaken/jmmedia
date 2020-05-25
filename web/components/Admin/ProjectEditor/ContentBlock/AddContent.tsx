import { ChangeEvent, useContext } from 'react'
import styled from 'styled-components'
import { SelectInput } from 'components/Form'
import { ProjectEditorContext } from '../Context'
import { ContentInput } from 'generated/graphql'

const AddContentSelectContainer = styled.div`
  width: ${props => props.theme.widths[3]};
  padding: ${props => props.theme.spacing[2]} ${props => props.theme.spacing[3]};
  margin: ${props => props.theme.spacing[2]} 0;
  border: ${props => props.theme.spacing[0]} solid
    ${props => props.theme.colours.secondary};
`

export const AddContent = () => {
  const context = useContext(ProjectEditorContext)
  const addHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const newContentBlock: ContentInput = {
      type: e.currentTarget.value,
      data: '',
    }

    context.onChange({
      name: 'content',
      value: [...context.content, newContentBlock],
    })
  }

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
