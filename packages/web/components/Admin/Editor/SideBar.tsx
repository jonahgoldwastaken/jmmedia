import Form, {
  Button,
  Input,
  ListImageInput,
  SelectInput,
  TextAreaInput,
} from 'components/Form'
import { HeadingOne } from 'components/Text/Headings'
import { Field, useFormikContext } from 'formik'
import Link from 'next/link'
import styled from 'styled-components'

type SideBarProps = {
  onDelete?: () => void
  properties: Array<{
    name: string
    type: string
    options?: Array<{ name: string; value: string }>
  }>
  title: string
}

const SideBarContainer = styled.div`
  height: 100vh;
  background: ${props => props.theme.colours.tertiary};
  padding: 0 ${props => `${props.theme.spacing[2]} ${props.theme.spacing[2]}`};
  border-right: calc(${props => props.theme.spacing[0]}) solid
    ${props => props.theme.colours.secondary};
  width: ${props => props.theme.widths[2]};
  overflow-y: scroll;

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    width: ${props => props.theme.widths[0]};
  }

  form {
    max-width: none;
    width: ${props => props.theme.widths[3]};
    margin: 0;
  }
`

export const SideBar: React.FC<SideBarProps> = ({
  properties,
  onDelete,
  title,
}) => {
  const { handleSubmit, handleReset } = useFormikContext()
  return (
    <SideBarContainer>
      <HeadingOne>{title}</HeadingOne>
      <Form onSubmit={handleSubmit} onReset={handleReset}>
        {properties.map(({ name, type, options }) => {
          if (type === 'file')
            return <ListImageInput key={name} label={name} name={name} />
          else if (type === 'select')
            return (
              <Field
                key={name}
                label={name}
                name={name}
                options={options || []}
                as={SelectInput}
              />
            )
          else if (type === 'textarea')
            return <TextAreaInput key={name} label={name} name={name} />
          else
            return (
              <Field
                key={name}
                type={type}
                label={name}
                name={name}
                as={Input}
              />
            )
        })}
        <Button>Opslaan</Button>
        <Link href="/admin" scroll={false}>
          <Button type="button">Annuleren</Button>
        </Link>
        {onDelete && (
          <Button type="button" onClick={() => onDelete()}>
            Verwijderen
          </Button>
        )}
      </Form>
    </SideBarContainer>
  )
}
