import { useContext } from 'react'
import Footer, { FooterLink } from 'components/Footer'
import { Article, ArticleTitle } from 'components/Portfolio/Article'
import Editor, { Sandbox, SideBar } from '../Editor'
import ContentEditor, { AddContent } from './ContentEditor'
import { ProjectEditorContext } from './Context'

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
          <ArticleTitle>{properties.title.value || 'Titel'}</ArticleTitle>
          {content.map(({ type, alt, size, content }, index) => (
            <ContentEditor
              index={index}
              type={type}
              alt={alt}
              size={size}
              content={content}
              key={content}
            />
          ))}
          <AddContent />
        </Article>
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
      </Sandbox>
    </Editor>
  )
}
