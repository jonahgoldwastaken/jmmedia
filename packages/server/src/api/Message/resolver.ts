import { Resolver, Mutation, Arg } from 'type-graphql'
import { MessageInput } from './input'
import { createTransport } from 'nodemailer'
import { Message } from './model'

@Resolver(Message)
export class MessageResolver {
  @Mutation(() => Message, { description: 'Submit a message form' })
  async submitMessage(@Arg('message') message: MessageInput): Promise<Message> {
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
      from: '"JM Media" <no-reply@jmmedia.nl>',
      replyTo: `${message.email}`,
      to: 'info@jmmedia.nl',
      subject: `${message.subject} van ${message.name}`,
      text: `Nieuw bericht van ${message.name}:\n\n${message.message}`,
    })
    return { name: message.name, email: message.email }
  }
}
