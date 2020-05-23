import gql from 'graphql-tag'

export interface newProjectServicesData {
  services: Array<{
    name: string
    _id: string
  }>
}

export const NEW_PROJECT_SERVICES = gql`
  query newProjectServices {
    services {
      name
      _id
    }
  }
`
