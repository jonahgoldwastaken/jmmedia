import { UserInputError } from 'apollo-server-koa'
import { Arg, Authorized, Mutation, Query, Resolver } from 'type-graphql'
import { ProjectInput } from './input'
import { Project, ProjectModel } from './model'

@Resolver(() => Project)
export class ProjectResolver {
  @Query(() => Project, {
    nullable: true,
    description: 'Returns one project based on provided slug or id',
  })
  async project(@Arg('slug') slug: string): Promise<Project | null> {
    return await ProjectModel.findOne({ slug }).populate('service')
  }

  @Query(() => [Project], {
    description: 'Returns all projects, with possible filtering by service',
    nullable: false,
  })
  async projects(
    @Arg('service', {
      nullable: true,
      description: 'ObjectID of service to filter on',
    })
    service?: string,
    @Arg('includeDeleted', {
      nullable: true,
      description: 'Include deleted projects',
    })
    includeDeleted: boolean = false
  ): Promise<Project[]> {
    if (service)
      return ProjectModel.find(
        includeDeleted ? { service } : { service, deleted: includeDeleted }
      ).populate('service')
    return await ProjectModel.find(
      includeDeleted ? {} : { deleted: includeDeleted }
    ).populate('service')
  }

  @Authorized()
  @Mutation(() => Project)
  async createProject(
    @Arg('project')
    { callToAction, content, service, listImage, slug, title }: ProjectInput
  ): Promise<Project> {
    const newProject = new ProjectModel({
      callToAction,
      content,
      service,
      listImage,
      slug,
      title,
      deleted: false,
    })
    const savedProject = await newProject.save()
    return savedProject
  }

  @Authorized()
  @Mutation(() => Project)
  async updateProject(
    @Arg('id') id: string,
    @Arg('project') project: ProjectInput
  ): Promise<Project> {
    const projectToUpdate = await ProjectModel.findById(id)
    if (projectToUpdate) {
      const updatedValues = {
        ...projectToUpdate.toObject(),
        ...project,
      }
      projectToUpdate.overwrite(updatedValues)
      return await (await projectToUpdate.save()).toObject()
    } else throw new UserInputError('Invalid Project ID.')
  }

  @Authorized()
  @Mutation(() => Boolean)
  async deleteProject(@Arg('id') id: string): Promise<boolean> {
    await ProjectModel.findByIdAndUpdate(id, { $set: { deleted: true } })
    return true
  }
}
