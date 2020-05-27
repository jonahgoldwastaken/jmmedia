import { getModelForClass, prop as Property } from '@typegoose/typegoose'
import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType({ description: 'The User model' })
export class User {
  @Field(() => ID)
  _id: string

  @Field()
  @Property({ required: true, unique: true })
  username: String

  @Property({ required: true })
  password: String
}

export const UserModel = getModelForClass(User, {
  schemaOptions: {
    toJSON: {
      transform: (_doc, ret) => {
        const { username, _id } = ret
        return { username, _id }
      },
    },
    toObject: {
      transform: (_doc, ret) => {
        const { username, _id } = ret
        return { username, _id }
      },
    },
  },
})
