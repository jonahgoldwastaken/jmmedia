import { InputType, Field } from 'type-graphql'
import { EmailAddressResolver } from 'graphql-scalars'

@InputType({ description: 'The Message Input Model' })
export class MessageInput {
  @Field(() => EmailAddressResolver)
  email: string

  @Field()
  name: string

  @Field()
  subject: string

  @Field()
  message: string
}
