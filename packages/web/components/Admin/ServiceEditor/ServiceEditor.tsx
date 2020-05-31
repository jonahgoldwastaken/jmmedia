import Footer, { FooterLink } from 'components/Footer'
import Image from 'components/Image'
import Section from 'components/Section'
import ServiceOptions from 'components/ServiceOptions'
import { Paragraph } from 'components/Text'
import { HeadingOne, HeadingTwo } from 'components/Text/Headings'
import { useFormikContext } from 'formik'
import { ServiceInput } from 'generated/graphql'
import Editor, { Sandbox, SideBar } from '../Editor'

type Props = {
  sideBarTitle?: string
  onDelete?: () => void
}

export const ServiceEditor: React.FunctionComponent<Props> = ({
  onDelete,
  sideBarTitle,
}) => {
  const { values } = useFormikContext<ServiceInput>()
  const properties = [
    {
      name: 'name',
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
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'baseOptions',
      type: 'textarea',
    },
    {
      name: 'additionalOptions',
      type: 'textarea',
    },
    {
      name: 'callToAction',
      type: 'text',
    },
  ]

  return (
    <Editor>
      <SideBar
        title={sideBarTitle || 'Nieuwe Service'}
        onDelete={onDelete}
        properties={properties}
      />
      <Sandbox>
        <main>
          <Section grid background="secondary">
            <HeadingOne noMargin colour="secondary">
              {values.name}
            </HeadingOne>
            <div>
              {values.description.map(paragraph => (
                <Paragraph noMargin colour="secondary">
                  {paragraph}
                </Paragraph>
              ))}
            </div>
            <Image src={values.listImage} />
          </Section>
          <Section grid background="primary">
            <div>
              <HeadingTwo noMargin>De basis</HeadingTwo>
              <ServiceOptions options={values.baseOptions} />
            </div>
            <div>
              <HeadingTwo noMargin>Extra opties</HeadingTwo>
              <ServiceOptions options={values.additionalOptions} />
            </div>
          </Section>
        </main>
        <Footer>
          <FooterLink colour="secondary" href="#">
            {values.callToAction}
          </FooterLink>
        </Footer>
      </Sandbox>
    </Editor>
  )
}
