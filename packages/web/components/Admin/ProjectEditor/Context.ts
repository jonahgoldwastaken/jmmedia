import { ContentInput, NewProjectInput, ProjectInput } from 'generated/graphql'
import { createContext } from 'react'

type ProjectEditorContext = {
  properties:
    | Array<{
        name: string
        type: string
        value: string | null | undefined
        options?: Array<{ name: string; value: string }>
      }>
    | null
    | undefined
  content: ContentInput[] | null | undefined
  onChange: ({
    name,
    value,
  }: {
    name: keyof NewProjectInput | keyof ProjectInput
    value: any
  }) => void
  onSubmit: () => void
}

export const ProjectEditorContext = createContext<ProjectEditorContext>({
  properties: [],
  content: [],
  onChange: () => undefined,
  onSubmit: () => undefined,
})
