import styled from 'styled-components'
import Form, { Button, InputField } from '../../Form'
import { HeadingOne } from '../../Text/Headings'

type SideBarProps = {
  onSubmit: () => void
  onChange: ({ name, value }: { name: string; value: string | File }) => void
  properties: {
    [key: string]: {
      type: 'text' | 'number' | 'select' | 'file'
      value: string
      options?: Array<{ name: string; value: string }>
    }
  }
  title: string
}

const SideBarContainer = styled.div`
  height: ${props => props.theme.heights[4]};
  background: ${props => props.theme.colours.tertiary};
  padding: 0 ${props => props.theme.spacing[2]};
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
        {Object.keys(properties).map(name => {
          const { type, value, options } = properties[name]
          return (
            <InputField
              onChange={e => {
                console.log(name, 'veranderd!')
                if (type === 'file') {
                  onChange({
                    name,
                    value: (e.currentTarget as HTMLInputElement).files[0],
                  })
                } else {
                  onChange({ name, value: e.currentTarget.value })
                }
              }}
              label={name}
              name={name}
              type={type}
              value={value}
              options={options}
            />
          )
        })}
        <Button>Opslaan</Button>
      </Form>
    </SideBarContainer>
  )
}
