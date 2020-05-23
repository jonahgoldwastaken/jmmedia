import gql from 'graphql-tag'

export type LoginMutationData = {
  loginUser: string
}

export interface LoginMutationVariables {
  user: {
    username: string
    password: string
  }
}

export const LOGIN_MUTATION = gql`
  mutation($user: UserInput!) {
    loginUser(user: $user)
  }
`
