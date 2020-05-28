import Footer, { FooterLink } from 'components/Footer'
import { Article, ArticleTitle } from 'components/Project/Article'
import {
  NewProjectInput,
  ProjectInput,
  useProjectServiceOptionsQuery,
  ContentInput,
} from 'generated/graphql'
import { useCallback } from 'react'
import Editor, { Sandbox, SideBar } from '../Editor'
import ContentBlock, { AddContent } from './ContentBlock'
import { ProjectEditorContext } from './Context'

type Props = {
  sideBarTitle?: string
  project: NewProjectInput | ProjectInput
  onChange: ({
    name,
    value,
  }: {
    name: keyof NewProjectInput | keyof ProjectInput
    value: any
  }) => void
  onSubmit: () => void
}

export const ProjectEditor: React.FunctionComponent<Props> = ({
  project,
  onChange,
  onSubmit,
  sideBarTitle,
}) => {
  const { data, loading } = useProjectServiceOptionsQuery()
  const { content } = project

  const addContentBlock = useCallback(
    (newContentValue: NewProjectInput['content']) => {
      newContentValue.push({ type: 'paragraph', data: '' })
      onChange({ name: 'content', value: newContentValue })
    },
    [project]
  )

  const changeHandler = useCallback(
    ({ name, value }: { name: keyof ProjectInput; value: any }) => {
      if (
        name === 'content' &&
        value.length >= (content as ContentInput[]).length &&
        value[value.length - 1].data
      ) {
        console.log('value', value)
        addContentBlock(value)
        return
      }
      onChange({ name, value })
    },
    [project]
  )

  const properties = [
    {
      name: 'title',
      type: 'text',
      value: project.title,
    },
    {
      name: 'slug',
      type: 'text',
      value: project.slug,
    },
    {
      name: 'listImage',
      type: 'file',
      value: project.listImage,
    },
    {
      name: loading ? 'laden...' : 'service',
      type: 'select',
      options: data
        ? data.services.map(({ name, _id }) => ({ name, value: _id }))
        : [],
      value: project.service,
    },
    {
      name: 'callToAction',
      type: 'text',
      value: project.callToAction,
    },
  ]

  return (
    <ProjectEditorContext.Provider
      value={{
        content,
        properties,
        onChange: changeHandler,
        onSubmit,
      }}
    >
      <Editor>
        <SideBar
          title={sideBarTitle || 'Nieuw project'}
          onChange={({ name, value }) => {
            if (Object.keys(project).includes(name))
              onChange({ name: name as keyof NewProjectInput, value })
          }}
          onSubmit={onSubmit}
          properties={properties}
        />
        <Sandbox>
          <Article>
            <ArticleTitle>{project.title || 'Titel'}</ArticleTitle>
            {content?.map(({ type, data }, index) => (
              <ContentBlock
                key={JSON.stringify({ type, data, index })}
                index={index}
                type={type}
                data={data}
              />
            ))}
            {content &&
              (!content.length || content[content.length - 1].data) && (
                <AddContent />
              )}
          </Article>
          <Footer>
            <FooterLink colour="secondary" href="#">
              Vorig project
            </FooterLink>
            <FooterLink colour="secondary" href="#">
              {project.callToAction}
            </FooterLink>
            <FooterLink colour="secondary" href="#">
              Volgend project
            </FooterLink>
          </Footer>
        </Sandbox>
      </Editor>
    </ProjectEditorContext.Provider>
  )
}
