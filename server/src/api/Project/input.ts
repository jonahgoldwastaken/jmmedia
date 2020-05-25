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
  @Field({ nullable: true })
  title?: string

  @Field({ nullable: true })
  slug?: string

  @Field({ nullable: true })
  listImage?: string

  @Field(() => String, { nullable: true })
  service?: string

  @Field({ nullable: true })
  callToAction?: string

  @Field(() => [ContentInput], { nullable: true })
  content?: ContentInput[]
}

@InputType()
export class NewProjectInput implements Partial<Project> {
  @Field()
  title?: string

  @Field()
  slug?: string

  @Field()
  listImage?: string

  @Field(() => String)
  service?: string

  @Field()
  callToAction?: string

  @Field(() => [ContentInput])
  content?: ContentInput[]
}
