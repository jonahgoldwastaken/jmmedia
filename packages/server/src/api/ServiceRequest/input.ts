import { EmailAddressResolver } from 'graphql-scalars'
import { Field, InputType } from 'type-graphql'

@InputType({ description: 'The Service Request Input Model' })
export class ServiceRequestInput {
  @Field()
  name: string

  @Field(() => EmailAddressResolver)
  email: string

  @Field()
  subject: string

  @Field()
  service: string

  @Field()
  message: string
}
