import {
  arrayProp as ArrayProperty,
  getModelForClass,
  prop as Property,
  Ref,
} from '@typegoose/typegoose'
import { Field, ID, ObjectType, registerEnumType } from 'type-graphql'
import { Service } from '../Service'

export enum ContentTypes {
  heading = 'heading',
  paragraph = 'paragraph',
  image = 'image',
  row = 'row',
  film = 'film',
}

registerEnumType(ContentTypes, {
  name: 'ContentTypes',
  description: 'The different available content types',
})

@ObjectType({ description: 'The Project Content block model' })
class Content {
  @Field(() => ContentTypes)
  @Property({
    enum: ContentTypes,
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

  @Field(() => Service)
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
