import { createContext } from 'react'
import { ProjectContent } from '../../../interfaces/Project'

type ProjectEditorContext = {
  properties: {
    title: {
      type: 'text'
      value: string
    }
    slug: {
      type: 'text'
      value: string
    }
    listImage: {
      type: 'file'
      value: string
    }
    callToAction: {
      type: 'text'
      value: string
    }
    service: {
      type: 'select'
      value: string
      options: Array<{
        name: string
        value: string
      }>
    }
  }
  content: ProjectContent[]
  onChange: ({
    name,
    value,
  }: {
    name: string
    value: Array<any> | string | File
  }) => void
  onSubmit: () => void
}

export const ProjectEditorContext = createContext<ProjectEditorContext>(
  undefined
)
