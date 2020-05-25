import Footer, { FooterLink } from 'components/Footer'
import { Article, ArticleTitle } from 'components/Portfolio/Article'
import { ProjectInput, useProjectServiceOptionsQuery } from 'generated/graphql'
import Editor, { Sandbox, SideBar } from '../Editor'
import ContentBlock, { AddContent } from './ContentBlock'
import { ProjectEditorContext } from './Context'
import { useEffect } from 'react'

type Props = {
  project: ProjectInput
  onChange: ({
    name,
    value,
  }: {
    name: string
    value: Array<any> | string | File
  }) => void
  onSubmit: () => void
}

export const ProjectEditor: React.FunctionComponent<Props> = ({
  project: { content, ...project },
  onChange: onChange,
  onSubmit: onSubmit,
}) => {
  const { data, loading } = useProjectServiceOptionsQuery()

  useEffect(() => {
    const lastIndex = content.length - 1
    if (content[lastIndex]?.data) {
      const newContent = [...content]
      newContent.push({ data: '', type: 'paragraph' })
      onChange({ name: 'content', value: newContent })
    }
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
        onChange: onChange,
        onSubmit: onSubmit,
      }}
    >
      <Editor>
        <SideBar
          title="Nieuw project"
          onChange={onChange}
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
