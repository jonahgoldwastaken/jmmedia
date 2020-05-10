import { Document, Model, model, models, Schema } from 'mongoose'

export interface Service extends Document {
  name: string
  slug: string
  image: string
  description: string[]
  options: string[]
  callToAction: string
}

const ServiceSchema: Schema<Service> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: [
      {
        type: String,
        required: true,
      },
    ],
    options: [
      {
        type: String,
        required: true,
      },
    ],
    callToAction: {
      type: String,
      required: true,
    },
  },
  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
)

export const Service: Model<Service> =
  models.Service || model<Service>('Service', ServiceSchema)
