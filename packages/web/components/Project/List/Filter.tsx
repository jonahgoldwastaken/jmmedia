import { BaseRunning } from 'components/Text'
import { useProjectServiceOptionsQuery } from 'generated/graphql'
import { useContext, useRef } from 'react'
import styled from 'styled-components'
import { ProjectListContext } from './Context'

const Div = styled.div`
  color: ${props => props.theme.colours.secondary};
  @media screen and (max-width: ${props => props.theme.breakpoints[1]}) {
    margin-top: ${props => props.theme.spacing[0]};
  }
`

const StyledSelect = styled.select<{
  ref: any
}>`
  all: unset;
  ${BaseRunning};
  margin-right: calc(${props => props.theme.spacing[0]} / 2);
`

export const ProjectListFilter = () => {
  const { data } = useProjectServiceOptionsQuery()
  const { setFilter, currentFilter } = useContext(ProjectListContext)
  const ref = useRef<HTMLSelectElement>()
  return (
    <Div
      onMouseDown={() => {
        const evt = new MouseEvent('mousedown')
        if (typeof ref.current !== 'undefined') ref.current.dispatchEvent(evt)
      }}
    >
      <StyledSelect
        ref={ref}
        value={currentFilter}
        onChange={e => setFilter(e.currentTarget.value)}
      >
        <option value="">Filter op service</option>
        {data &&
          data.services.map(({ _id, name }) => (
            <option key={_id} value={_id}>
              {name}
            </option>
          ))}
      </StyledSelect>
      <span>&#9660;</span>
    </Div>
  )
}
