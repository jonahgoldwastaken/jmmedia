import Form, { Button, FileInput, Input, SelectInput } from 'components/Form'
import { HeadingOne } from 'components/Text/Headings'
import styled from 'styled-components'

type SideBarProps = {
  onSubmit: () => void
  onChange: ({ name, value }: { name: string; value: any }) => void
  properties: Array<{
    name: string
    type: string
    value: string
    options?: Array<{ name: string; value: string }>
  }>
  title: string
}

const SideBarContainer = styled.div`
  height: ${props => props.theme.heights[4]};
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

export const SideBar: React.FunctionComponent<SideBarProps> = ({
  properties,
  onChange,
  title,
  onSubmit,
}) => {
  return (
    <SideBarContainer>
      <HeadingOne>{title}</HeadingOne>
      <Form
        onSubmit={e => {
          e.preventDefault()
          onSubmit()
        }}
      >
        {properties.map(({ name, type, value, options }) => {
          if (type === 'file')
            return (
              <FileInput
                key={name}
                label={name}
                name={name}
                value={value}
                required
                onChange={e => {
                  const reader = new FileReader()
                  const { files, validity } = e.currentTarget
                  if (validity.valid && files?.length) {
                    const file = files[0]
                    reader.readAsDataURL(file as File)
                    reader.addEventListener('load', () => {
                      onChange({
                        name,
                        value: reader.result as string,
                      })
                    })
                  }
                }}
              />
            )
          else if (type === 'select')
            return (
              <SelectInput
                key={name}
                label={name}
                name={name}
                value={value as string}
                options={options || []}
                required
                onChange={e => {
                  onChange({ name, value: e.currentTarget.value })
                }}
              />
            )
          else
            return (
              <Input
                key={name}
                type={type}
                label={name}
                name={name}
                value={value as string}
                onChange={e => onChange({ name, value: e.currentTarget.value })}
              />
            )
        })}
        <Button>Opslaan</Button>
      </Form>
    </SideBarContainer>
  )
}
