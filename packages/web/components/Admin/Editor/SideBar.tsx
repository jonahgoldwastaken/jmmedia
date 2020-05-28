import Form, {
  Button,
  FileInput,
  Input,
  SelectInput,
  TextAreaInput,
} from 'components/Form'
import { HeadingOne } from 'components/Text/Headings'
import styled from 'styled-components'
import { useListImageUploadMutation } from 'generated/graphql'
import { useEffect } from 'react'
import Link from 'next/link'

type SideBarProps = {
  onSubmit: () => void
  onChange: ({ name, value }: { name: string; value: any }) => void
  properties:
    | Array<{
        name: string
        type: string
        value: string | string[] | null | undefined
        options?: Array<{ name: string; value: string }>
      }>
    | null
    | undefined
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
  const [mutation, { data }] = useListImageUploadMutation()

  useEffect(() => {
    if (data) {
      onChange({
        name: 'listImage',
        value: data.uploadListImage,
      })
    }
  }, [data])

  return (
    <SideBarContainer>
      <HeadingOne>{title}</HeadingOne>
      <Form
        onSubmit={e => {
          e.preventDefault()
          onSubmit()
        }}
      >
        {properties?.map(({ name, type, value, options }) => {
          if (type === 'file')
            return (
              <FileInput
                key={name}
                label={name}
                name={name}
                value={(value as string) || ''}
                onChange={e => {
                  const { files, validity } = e.currentTarget
                  if (validity.valid && files?.length) {
                    const file = files[0]
                    mutation({ variables: { imageFile: file } })
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
                onChange={e => {
                  onChange({ name, value: e.currentTarget.value })
                }}
              />
            )
          else if (type === 'textarea')
            return (
              <TextAreaInput
                key={name}
                label={name}
                name={name}
                value={
                  typeof value !== 'string' && value ? value.join('\n') : value
                }
                onChange={e => {
                  onChange({
                    name,
                    value: e.currentTarget.value.split('\n'),
                  })
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
        <Link href="/admin">
          <Button>Annuleren</Button>
        </Link>
      </Form>
    </SideBarContainer>
  )
}
