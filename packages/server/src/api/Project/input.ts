import { Field, InputType } from 'type-graphql'
import { Project, Content, ContentTypes } from './model'

@InputType()
class ContentInput implements Partial<Content> {
  @Field(() => ContentTypes)
  type: string

  @Field()
  data: string
}

@InputType()
export class ProjectInput implements Partial<Project> {
  @Field()
  title: string

  @Field()
  slug: string

  @Field()
  listImage: string

  @Field(() => String)
  service: string

  @Field()
  callToAction: string

  @Field(() => [ContentInput])
  content: ContentInput[]
}
