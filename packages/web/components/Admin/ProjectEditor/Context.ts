import { ContentInput, NewProjectInput } from 'generated/graphql'
import { createContext } from 'react'

type ProjectEditorContext = {
  properties: Array<{
    name: string
    type: string
    value: string
    options?: Array<{ name: string; value: string }>
  }>
  content: ContentInput[]
  addContentBlock: () => void
  onChange: ({
    name,
    value,
  }: {
    name: keyof NewProjectInput
    value: any
  }) => void
  onSubmit: () => void
}

export const ProjectEditorContext = createContext<ProjectEditorContext>({
  properties: [],
  content: [],
  addContentBlock: () => undefined,
  onChange: () => undefined,
  onSubmit: () => undefined,
})
