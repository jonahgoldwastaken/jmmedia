import Footer, { FooterLink } from 'components/Footer'
import { Article, ArticleTitle } from 'components/Project/Article'
import {
  NewProjectInput,
  useProjectServiceOptionsQuery,
} from 'generated/graphql'
import { useCallback } from 'react'
import Editor, { Sandbox, SideBar } from '../Editor'
import ContentBlock, { AddContent } from './ContentBlock'
import { ProjectEditorContext } from './Context'

type Props = {
  project: NewProjectInput
  onChange: ({
    name,
    value,
  }: {
    name: keyof NewProjectInput
    value: any
  }) => void
  onSubmit: () => void
}

export const ProjectEditor: React.FunctionComponent<Props> = ({
  project,
  onChange: onChange,
  onSubmit: onSubmit,
}) => {
  const { data, loading } = useProjectServiceOptionsQuery()
  const { content } = project

  const addContentBlock = useCallback(() => {
    const copiedContent = [...content]
    copiedContent.push({ type: 'paragraph', data: '' })
    onChange({ name: 'content', value: copiedContent })
  }, [content])

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
        content: content,
        properties,
        addContentBlock,
        onChange,
        onSubmit,
      }}
    >
      <Editor>
        <SideBar
          title="Nieuw project"
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
            {content.map(({ type, data }, index) => (
              <ContentBlock index={index} type={type} data={data} key={data} />
            ))}
            {!content.length && <AddContent />}
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
