import { Field, InputType } from 'type-graphql'
import { Service } from './model'

@InputType()
export class ServiceInput implements Partial<Service> {
  @Field()
  name: String

  @Field()
  slug: String

  @Field()
  listImage: String

  @Field(() => [String])
  description: String[]

  @Field(() => [String])
  baseOptions: String[]

  @Field(() => [String])
  additionalOptions: String[]

  @Field()
  callToAction: String
}
