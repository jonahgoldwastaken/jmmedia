import { UserInputError, ForbiddenError } from 'apollo-server-koa'
import argon2 from 'argon2'
import { MongoError } from 'mongodb'
import { authenticateUser, issueToken } from '../../authentication'
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import { Context } from '../../context'
import { UserInput } from './input'
import { User, UserModel } from './model'

@Resolver(() => User)
export class UserResolver {
  @Authorized()
  @Query(() => User, { nullable: true })
  async currentUser(@Ctx() context: Context) {
    return await UserModel.findById(context.user?.id)
  }

  @Mutation(() => String, { nullable: true })
  async loginUser(
    @Arg('user') { username, password }: UserInput
  ): Promise<string | null> {
    const [error, user, message] = await authenticateUser(username, password)
    if (error) throw error
    else if (message) throw new Error(message)
    else if (user) return issueToken(user._id)
    return null
  }

  @Mutation(() => User, { nullable: true })
  async registerUser(
    @Arg('user') { username, password: unhashed }: UserInput
  ): Promise<User> {
    const amtOfUsers = await UserModel.find().count()
    if (amtOfUsers > 1)
      throw new ForbiddenError('Amount of allowed users to register exceeded')
    try {
      const password = await argon2.hash(unhashed)
      const user = new UserModel({ username, password })
      const savedUser = await user.save()

      return savedUser.toObject() || null
    } catch (err) {
      if (err instanceof MongoError) {
        throw new UserInputError(err.message)
      } else {
        throw err
      }
    }
  }
}
