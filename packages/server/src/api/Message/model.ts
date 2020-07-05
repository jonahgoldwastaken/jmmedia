import { ObjectType, Field } from 'type-graphql'
import { EmailAddressResolver } from 'graphql-scalars'

@ObjectType({ description: 'The Message Model' })
export class Message {
  @Field()
  name: string

  @Field(() => EmailAddressResolver)
  email: string
}
