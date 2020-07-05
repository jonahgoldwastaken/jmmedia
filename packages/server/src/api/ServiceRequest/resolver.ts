import { EmailAddressResolver } from 'graphql-scalars'
import { createTransport } from 'nodemailer'
import { Arg, Mutation, Resolver } from 'type-graphql'
import { ServiceRequestInput } from './input'
import { ServiceRequest } from './model'

@Resolver(ServiceRequest)
export class ServiceRequestResolver {
  EmailAddress = EmailAddressResolver
  @Mutation(() => ServiceRequest, {
    description: 'Submit a service request form',
  })
  async submitRequest(
    @Arg('request') request: ServiceRequestInput
  ): Promise<ServiceRequest> {
    const transporter = createTransport({
      host: 'smtp.transip.email',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })
    await transporter.sendMail({
      from: `"JM Media" <no-reply@jmmedia.nl>`,
      to: 'hoi@jmmedia.nl',
      subject: request.subject,
      text: `${request.name} wil graag een aanvraag doen voor ${request.service}: \n \n ${request.message} \n Ik ben bereikbaar op e-mailadres op ${request.email}.`,
    })
    return { name: request.name, email: request.email }
  }
}
