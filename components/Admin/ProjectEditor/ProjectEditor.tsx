import { useContext } from 'react'
import Footer, { FooterLink } from '../../Footer'
import { Article, ArticleTitle } from '../../Portfolio/Article'
import Editor, { Sandbox, SideBar } from '../Editor'
import ContentEditor from './ContentEditor'
import { ProjectEditorContext } from './Context'
import { AddContent } from './ContentEditor'

export const ProjectEditor = () => {
  const { properties, content, onChange, onSubmit } = useContext(
    ProjectEditorContext
  )
  return (
    <Editor>
      <SideBar
        title="Nieuw project"
        onChange={onChange}
        onSubmit={onSubmit}
        properties={properties}
      />
      <Sandbox>
        <Article>
          <ArticleTitle>{properties.title.value}</ArticleTitle>
          {content.map(({ _id, type, alt, size, content }) => (
            <ContentEditor
              id={_id}
              type={type}
              alt={alt}
              size={size}
              content={content}
              key={_id}
            />
          ))}
          <AddContent />
        </Article>
        {properties.callToAction.value && (
          <Footer>
            <FooterLink colour="secondary" href="#">
              Vorig project
            </FooterLink>
            <FooterLink colour="secondary" href="#">
              {properties.callToAction.value}
            </FooterLink>
            <FooterLink colour="secondary" href="#">
              Volgend project
            </FooterLink>
          </Footer>
        )}
      </Sandbox>
    </Editor>
  )
}
