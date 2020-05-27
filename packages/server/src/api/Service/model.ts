import {
  arrayProp as ArrayProperty,
  getModelForClass,
  prop as Property,
} from '@typegoose/typegoose'
import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType({ description: 'The Service model' })
export class Service {
  @Field(() => ID)
  readonly _id: string

  @Field()
  @Property({ required: true })
  name!: String

  @Field()
  @Property({ required: true, unique: true })
  slug!: String

  @Field()
  @Property({ required: true })
  listImage!: String

  @Field(() => [String])
  @ArrayProperty({ items: String, required: true })
  description!: String[]

  @Field(() => [String])
  @ArrayProperty({ items: String, required: true })
  baseOptions!: String[]

  @Field(() => [String])
  @ArrayProperty({ items: String, required: true })
  additionalOptions!: String[]

  @Field()
  @Property({ required: true })
  callToAction!: String
}

export const ServiceModel = getModelForClass(Service)
