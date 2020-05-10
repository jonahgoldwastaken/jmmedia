import { Document, model, Model, models, Schema } from 'mongoose'

export interface ProjectContent extends Document {
  type: 'heading' | 'paragraph' | 'image' | 'row' | 'film'
  content: string
  alt?: string
  size?: number
}

const ProjectContentSchema: Schema<ProjectContent> = new Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ['heading', 'paragraph', 'image', 'row', 'film'],
    },
    content: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
    },
    size: {
      type: Number,
    },
  },
  {
    toObject: {
      virtuals: true,
      transform: (doc, ret) => {
        delete ret._id
      },
    },
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        delete ret._id
      },
    },
  }
)

export const ProjectContent: Model<ProjectContent> =
  models.ProjectContent || model('ProjectContent', ProjectContentSchema)
