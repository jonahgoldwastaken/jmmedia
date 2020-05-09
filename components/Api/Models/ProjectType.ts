import { Document, model, Schema, models, Model } from 'mongoose'

export interface ProjectType extends Document {
  name: string
  type: string
  service: string
}

const ProjectTypeSchema: Schema<ProjectType> = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    unique: true,
  },
  service: {
    type: String,
    required: true,
  },
})

export const ProjectType: Model<ProjectType> =
  models.ProjectType || model('ProjectType', ProjectTypeSchema)
