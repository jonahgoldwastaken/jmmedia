import { Document, model, Schema, models, Model } from 'mongoose'

export interface ProjectType extends Document {
  name: string
  type: string
  serviceName: string
}

const ProjectTypeSchema: Schema<ProjectType> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      unique: true,
    },
    serviceName: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform: (doc, ret) => {
        delete ret.serviceName
      },
      virtuals: true,
    },
    toObject: {
      transform: (doc, ret) => {
        delete ret.serviceName
      },
      virtuals: true,
    },
  }
)

ProjectTypeSchema.virtual('service', {
  ref: 'Service',
  localField: 'serviceName',
  foreignField: 'name',
  justOne: true,
})

export const ProjectType: Model<ProjectType> =
  models.ProjectType || model('ProjectType', ProjectTypeSchema)
