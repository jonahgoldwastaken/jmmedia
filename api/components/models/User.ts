import { model, Schema, Document } from 'mongoose'

interface User extends Document {
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

const User = model<User>('user', UserSchema)

export default User
