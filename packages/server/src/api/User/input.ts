import { Field, InputType } from 'type-graphql'
import { User } from './model'

@InputType()
export class UserInput implements Partial<User> {
  @Field({ nullable: false })
  username!: string

  @Field({ nullable: false })
  password!: string
}
