import { getModelForClass, prop as Property, Ref } from '@typegoose/typegoose'
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
export class Content {
  @Field(() => ID)
  readonly _id?: string

  @Field(() => ContentTypes)
  @Property({
    enum: ContentTypes,
    required: true,
  })
  type: string

  @Field()
  @Property({ required: true })
  data: string
}

@ObjectType({ description: 'The Project model' })
export class Project {
  @Field(() => ID)
  readonly _id: string

  @Field()
  @Property({ required: true })
  title: string

  @Field()
  @Property({ required: true })
  listImage: string

  @Field()
  @Property({ required: true, unique: true })
  slug: string

  @Field(() => Service)
  @Property({ ref: Service, required: true })
  service: Ref<Service>

  @Field()
  @Property({ required: true })
  callToAction: string

  @Field(() => [Content])
  @Property({ type: Content })
  content: Content[]

  @Field()
  @Property({ default: false })
  deleted: Boolean
}

export const ProjectModel = getModelForClass(Project)
