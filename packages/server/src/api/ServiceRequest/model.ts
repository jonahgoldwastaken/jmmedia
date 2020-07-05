import { ObjectType, Field } from 'type-graphql'
import { EmailAddressResolver } from 'graphql-scalars'

@ObjectType({ description: 'The Service Request Model' })
export class ServiceRequest {
  @Field()
  name: string

  @Field(() => EmailAddressResolver)
  email: string
}
