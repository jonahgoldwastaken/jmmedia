import { Field, ObjectType } from 'type-graphql'

@ObjectType({ description: 'The Media model' })
export class Media {
  @Field()
  filename!: String

  @Field()
  mimetype!: String

  @Field()
  encoding!: String
}
