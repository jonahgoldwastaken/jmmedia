import Footer, { FooterLink } from 'components/Footer'
import { Article, ArticleTitle } from 'components/Project/Article'
import { FieldArray, useFormikContext } from 'formik'
import { ProjectInput, useProjectServiceOptionsQuery } from 'generated/graphql'
import Editor, { Sandbox, SideBar } from '../Editor'
import Content from './Content'

type Props = {
  sideBarTitle?: string
  onDelete?: () => void
}

export const ProjectEditor: React.FunctionComponent<Props> = ({
  onDelete,
  sideBarTitle,
}) => {
  const { data, loading } = useProjectServiceOptionsQuery()
  const {
    values: { title, callToAction },
  } = useFormikContext<ProjectInput>()
  const properties = [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'slug',
      type: 'text',
    },
    {
      name: 'listImage',
      type: 'file',
    },
    {
      name: loading ? 'laden...' : 'service',
      type: 'select',
      options: data
        ? data.services.map(({ name, _id }) => ({ name, value: _id }))
        : [],
    },
    {
      name: 'callToAction',
      type: 'text',
    },
  ]

  return (
    <Editor>
      <SideBar
        title={sideBarTitle || 'Nieuw project'}
        onDelete={onDelete}
        properties={properties}
      />
      <Sandbox>
        <Article>
          <ArticleTitle>{title || 'Titel'}</ArticleTitle>
          <FieldArray name="content" component={Content} />
        </Article>
        <Footer>
          <FooterLink colour="secondary" href="#">
            Vorig project
          </FooterLink>
          <FooterLink colour="secondary" href="#">
            {callToAction}
          </FooterLink>
          <FooterLink colour="secondary" href="#">
            Volgend project
          </FooterLink>
        </Footer>
      </Sandbox>
    </Editor>
  )
}
