import { ContentInput, ProjectInput } from 'generated/graphql'
import { createContext } from 'react'

type ProjectEditorContext = {
  properties: Array<{
    name: string
    type: string
    value: string
    options?: Array<{ name: string; value: string }>
  }>
  content: ContentInput[]
  onChange: ({ name, value }: { name: keyof ProjectInput; value: any }) => void
  onSubmit: () => void
}

export const ProjectEditorContext = createContext<ProjectEditorContext>({
  properties: [],
  content: [],
  onChange: () => undefined,
  onSubmit: () => undefined,
})
