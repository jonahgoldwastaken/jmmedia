import { model, Schema, Document } from 'mongoose'

export interface UserDocument extends Document {
  username: string
  password: string
}

const UserSchema: Schema<UserDocument> = new Schema({
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

const User = model<UserDocument>('user', UserSchema)

export default User
