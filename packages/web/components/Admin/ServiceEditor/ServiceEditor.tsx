import Footer, { FooterLink } from 'components/Footer'
import Image from 'components/Image'
import Section from 'components/Section'
import ServiceOptions from 'components/ServiceOptions'
import { Paragraph } from 'components/Text'
import { HeadingOne, HeadingTwo } from 'components/Text/Headings'
import { ServiceInput } from 'generated/graphql'
import Editor, { Sandbox, SideBar } from '../Editor'

type Props = {
  sideBarTitle?: string
  service: ServiceInput
  onChange: ({ name, value }: { name: keyof ServiceInput; value: any }) => void
  onSubmit: () => void
  onDelete?: () => void
}

export const ServiceEditor: React.FunctionComponent<Props> = ({
  service,
  onChange,
  onSubmit,
  onDelete,
  sideBarTitle,
}) => {
  const properties = [
    {
      name: 'name',
      type: 'text',
      value: service.name,
    },
    {
      name: 'slug',
      type: 'text',
      value: service.slug,
    },
    {
      name: 'listImage',
      type: 'file',
      value: service.listImage,
    },
    {
      name: 'description',
      type: 'textarea',
      value: service.description,
    },
    {
      name: 'baseOptions',
      type: 'textarea',
      value: service.baseOptions,
    },
    {
      name: 'additionalOptions',
      type: 'textarea',
      value: service.additionalOptions,
    },
    {
      name: 'callToAction',
      type: 'text',
      value: service.callToAction,
    },
  ]

  return (
    <Editor>
      <SideBar
        title={sideBarTitle || 'Nieuwe Service'}
        onChange={({ name, value }) => {
          if (Object.keys(service).includes(name))
            onChange({ name: name as keyof ServiceInput, value })
        }}
        onSubmit={onSubmit}
        onDelete={onDelete}
        properties={properties}
      />
      <Sandbox>
        <main>
          <Section grid background="secondary">
            <HeadingOne noMargin colour="secondary">
              {service.name}
            </HeadingOne>
            <div>
              {service.description.map(paragraph => (
                <Paragraph noMargin colour="secondary">
                  {paragraph}
                </Paragraph>
              ))}
            </div>
            <Image src={service.listImage} />
          </Section>
          <Section grid background="primary">
            <div>
              <HeadingTwo noMargin>De basis</HeadingTwo>
              <ServiceOptions options={service.baseOptions} />
            </div>
            <div>
              <HeadingTwo noMargin>Extra opties</HeadingTwo>
              <ServiceOptions options={service.additionalOptions} />
            </div>
          </Section>
        </main>
        <Footer>
          <FooterLink colour="secondary" href="#">
            {service.callToAction}
          </FooterLink>
        </Footer>
      </Sandbox>
    </Editor>
  )
}
