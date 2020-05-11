import { Document, model, Model, models, Schema } from 'mongoose'

export interface Project extends Document {
  title: string
  slug: string
  service: Schema.Types.ObjectId
  content: Schema.Types.ObjectId[]
  callToAction: string
  deleted: boolean
}

const ProjectSchema: Schema<Project> = new Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  service: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Service',
  },
  callToAction: {
    type: String,
    required: true,
  },
  content: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'ProjectContent',
    },
  ],
  deleted: {
    type: Boolean,
    required: false,
    default: false,
  },
})

export const Project: Model<Project> =
  models.Project || model<Project>('Project', ProjectSchema)
