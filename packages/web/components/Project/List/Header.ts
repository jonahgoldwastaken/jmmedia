import styled from 'styled-components'

export const ProjectListHeader = styled.div`
  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  margin: 0 0 ${props => props.theme.spacing[2]};
`
