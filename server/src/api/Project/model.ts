import {
  arrayProp as ArrayProperty,
  getModelForClass,
  prop as Property,
  Ref,
} from '@typegoose/typegoose'
import { Field, ID, ObjectType } from 'type-graphql'
import { Service } from '../Service'

@ObjectType({ description: 'The Project Content block model' })
class Content {
  @Field(() => String)
  @Property({
    enum: ['heading', 'paragraph', 'image', 'row', 'film'],
    required: true,
  })
  type!: String

  @Field()
  @Property({ required: true })
  data: string
}

@ObjectType({ description: 'The Project model' })
export class Project {
  @Field(() => ID)
  readonly _id: String

  @Field()
  @Property({ required: true })
  title!: String

  @Field()
  @Property({ required: true })
  listImage!: String

  @Field()
  @Property({ required: true, unique: true })
  slug!: String

  @Field(() => String)
  @Property({ ref: Service, required: true })
  service!: Ref<Service>

  @Field()
  @Property({ required: true })
  callToAction!: String

  @Field(() => [Content])
  @ArrayProperty({ items: Content })
  content!: Content[]

  @Field()
  @Property({ default: false })
  deleted: Boolean
}

export const ProjectModel = getModelForClass(Project)
