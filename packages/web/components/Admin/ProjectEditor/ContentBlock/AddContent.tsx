import { SelectInput } from 'components/Form'
import { useCallback, useContext } from 'react'
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
  const { addContentBlock } = useContext(ProjectEditorContext)
  const addHandler = useCallback(() => addContentBlock(), [])

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
