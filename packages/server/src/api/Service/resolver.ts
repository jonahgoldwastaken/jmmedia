import { UserInputError } from 'apollo-server-koa'
import { Arg, Authorized, Mutation, Query, Resolver } from 'type-graphql'
import { ProjectModel } from '../Project'
import { ServiceInput } from './input'
import { Service, ServiceModel } from './model'

@Resolver(() => Service)
export class ServiceResolver {
  @Query(() => Service, {
    nullable: true,
    description: 'Returns one service based on provided slug',
  })
  async service(@Arg('slug') slug: string): Promise<Service | null> {
    return await ServiceModel.findOne({ slug }).populate('service')
  }

  @Query(() => [Service], {
    description: 'Returns all services',
    nullable: false,
  })
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
    const newService = await ServiceModel.findOne({ _id: { $ne: id } })
    await ProjectModel.updateMany(
      { service: id },
      { $set: { service: newService?._id } }
    )
    await ServiceModel.findByIdAndDelete(id)
    return true
  }
}
