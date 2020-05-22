import gql from 'graphql-tag'

interface ProjectItem {
  slug: string
  listImage: string
  title: string
}

export type ProjectListData = ProjectItem[]

export interface ProjectListVariables {
  service?: string
}

export const PROJECT_LIST = gql`
  query projectList($service: String) {
    projects(service: $service) {
      slug
      listImage
      title
    }
  }
`
