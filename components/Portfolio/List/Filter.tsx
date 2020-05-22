import { useContext, useRef } from 'react'
import styled from 'styled-components'
import { BaseRunning } from 'components/Text'
import { ProjectListContext } from './Context'

const Div = styled.div`
  color: ${props => props.theme.colours.secondary};
`

const StyledSelect = styled.select`
  all: unset;
  ${BaseRunning};
  margin-right: calc(${props => props.theme.spacing[0]} / 2);
`

export const ProjectListFilter = () => {
  const { setFilter } = useContext(ProjectListContext)
  const ref = useRef<HTMLSelectElement>()
  return (
    <Div
      onMouseDown={e => {
        e.preventDefault()
        const evt = new MouseEvent('mousedown')
        if (typeof ref.current !== 'undefined') ref.current.dispatchEvent(evt)
      }}
    >
      <StyledSelect
        ref={ref}
        onChange={e => {
          if (
            e.currentTarget.value === 'all' ||
            e.currentTarget.value === 'photography' ||
            e.currentTarget.value === 'film'
          )
            setFilter(e.currentTarget.value)
        }}
      >
        <option value="all">Alle soorten werk</option>
      </StyledSelect>
      <span>&#9660;</span>
    </Div>
  )
}
