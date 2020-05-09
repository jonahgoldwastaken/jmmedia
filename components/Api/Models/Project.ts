import { Document, model, Schema, models, Model } from 'mongoose'

export interface Project extends Document {
  title: string
  slug: string
  type: string
  ownWork: boolean
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
  type: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'ProjectType',
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
  ownWork: {
    type: Boolean,
    required: false,
    default: false,
  },
  deleted: {
    type: Boolean,
    required: false,
    default: false,
  },
})

export const Project: Model<Project> =
  models.Project || model<Project>('Project', ProjectSchema)
