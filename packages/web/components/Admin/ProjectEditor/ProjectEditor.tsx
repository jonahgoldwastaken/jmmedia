import Footer from 'components/Footer'
import { Article, ArticleTitle } from 'components/Project/Article'
import { FieldArray, useFormikContext } from 'formik'
import { ProjectInput, useServiceSelectQuery } from 'generated/graphql'
import Editor, { Sandbox, SideBar } from '../Editor'
import Content from './Content'
import CTA from 'components/CTA'

type Props = {
  sideBarTitle?: string
  onDelete?: () => void
}

export const ProjectEditor: React.FC<Props> = ({ onDelete, sideBarTitle }) => {
  const { data, loading } = useServiceSelectQuery()
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
          <CTA centre href="#">
            {callToAction}
          </CTA>
        </Article>
        <Footer />
      </Sandbox>
    </Editor>
  )
}
