import { Field, InputType } from 'type-graphql'
import { EmailAddressResolver } from 'graphql-scalars'

@InputType({ description: 'The Service Request Model' })
export class ServiceRequestInput {
  @Field(() => EmailAddressResolver)
  email: string

  @Field()
  subject: string

  @Field()
  service: string

  @Field()
  message: string
}
