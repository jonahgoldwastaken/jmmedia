import { EmailAddressResolver } from 'graphql-scalars'
import { Arg, Mutation, Resolver } from 'type-graphql'
import { ServiceRequestInput } from './input'

@Resolver()
export class ServiceRequestResolver {
  EmailAddress = EmailAddressResolver
  @Mutation(() => String, { description: 'Submit a contact form' })
  async submitRequest(
    @Arg('request') request: ServiceRequestInput
  ): Promise<string> {
    console.log(request)
    return 'gelukt!'
  }
}
