import { useContext, useRef } from 'react'
import styled from 'styled-components'
import { BaseRunning } from '../../Text'
import { ListContext } from './Context'

const StyledSelect = styled.select`
  all: unset;
  ${BaseRunning};
  margin-right: calc(${props => props.theme.spacing[0]} / 2);
`

export const ListFilter = () => {
  const { setFilter } = useContext(ListContext)
  const ref = useRef<HTMLSelectElement>()
  return (
    <div
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
        <option value="photography">Fotografie</option>
        <option value="film">Film</option>
      </StyledSelect>
      <span>&#9660;</span>
    </div>
  )
}
