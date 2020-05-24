import { ContentInput } from 'generated/graphql'
import { createContext } from 'react'

type ProjectEditorContext = {
  properties: Array<{
    name: string
    type: string
    value: string
    options?: Array<{ name: string; value: string }>
  }>
  content: ContentInput[]
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
