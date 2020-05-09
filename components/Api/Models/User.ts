import { Document, model, Schema, models, Model } from 'mongoose'

export interface User extends Document {
  username: string
  password: string
}

const UserSchema: Schema<User> = new Schema({
  username: {
    required: true,
    type: String,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
})

export const User: Model<User> = models.User || model('User', UserSchema)
