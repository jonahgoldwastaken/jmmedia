import { Resolver, Query, Arg, Authorized, Mutation } from 'type-graphql'
import { Service, ServiceModel } from './model'
import { UserInputError } from 'apollo-server-koa'
import { ServiceInput } from './input'
import { ProjectModel } from '../Project'

@Resolver(() => Service)
export class ServiceResolver {
  @Query(() => Service, {
    nullable: true,
    description: 'Returns one service based on provided slug or id',
  })
  async service(
    @Arg('slug', { nullable: true }) slug?: string,
    @Arg('id', { nullable: true }) id?: string
  ): Promise<Service | null> {
    if (!id && !slug) throw new UserInputError('Provide one search argument')
    if (slug && id) throw new UserInputError('Provide only one search argument')
    let query = {}
    if (slug) query = { slug }
    else query = { _id: id }
    return await ServiceModel.findOne(query).populate('service')
  }

  @Query(() => [Service], { description: 'Returns all services' })
  async services(): Promise<Service[]> {
    return await ServiceModel.find()
  }

  @Authorized()
  @Mutation(() => Service)
  async createService(
    @Arg('service')
    {
      name,
      slug,
      listImage,
      description,
      baseOptions,
      additionalOptions,
      callToAction,
    }: ServiceInput
  ): Promise<Service> {
    const newService = new ServiceModel({
      name,
      slug,
      listImage,
      description,
      baseOptions,
      additionalOptions,
      callToAction,
    })
    const savedService = await newService.save()
    return savedService
  }

  @Authorized()
  @Mutation(() => Service)
  async updateService(
    @Arg('id') id: string,
    @Arg('service') service: ServiceInput
  ): Promise<Service> {
    const serviceToUpdate = await ServiceModel.findById(id)
    if (serviceToUpdate) {
      const updatedValues = {
        ...serviceToUpdate.toObject(),
        ...service,
      } as Service
      serviceToUpdate.overwrite(updatedValues)
      return await (await serviceToUpdate.save()).toObject()
    } else throw new UserInputError('Invalid Service ID')
  }

  @Authorized()
  @Mutation(() => Boolean)
  async deleteService(@Arg('id') id: string) {
    await ProjectModel.updateMany(
      { service: id },
      { $set: { service: 'none' } }
    )
    await ServiceModel.findByIdAndDelete(id)
    return true
  }
}