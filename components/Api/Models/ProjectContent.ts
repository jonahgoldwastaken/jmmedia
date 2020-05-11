import { Document, model, Model, models, Schema } from 'mongoose'

export interface ProjectContent extends Document {
  type: 'heading' | 'paragraph' | 'image' | 'row' | 'film'
  content: string
  alt?: string
  size?: number
}

const ProjectContentSchema: Schema<ProjectContent> = new Schema({
  type: {
    type: String,
    required: true,
    enum: ['heading', 'paragraph', 'image', 'row', 'film'],
  },
  content: {
    type: String,
  },
  alt: {
    type: String,
  },
  size: {
    type: Number,
  },
})

export const ProjectContent: Model<ProjectContent> =
  models.ProjectContent || model('ProjectContent', ProjectContentSchema)
