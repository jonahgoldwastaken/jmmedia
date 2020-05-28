import { Field, InputType } from 'type-graphql'
import { Project } from './model'

@InputType()
class ContentInput {
  @Field(() => String)
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
