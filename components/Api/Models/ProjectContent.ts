import { Document, model, Schema, models, Model } from 'mongoose'

export interface ProjectContent extends Document {
  type: string
  conrtent: string
  alt?: string
}

const ProjectContentSchema: Schema<ProjectContent> = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
    },
  },
  {
    toObject: {
      transform: (doc, ret) => {
        delete ret._id
      },
    },
    toJSON: {
      transform: (doc, ret) => {
        delete ret._id
      },
    },
  }
)

export const ProjectContent: Model<ProjectContent> =
  models.ProjectContent || model('ProjectContent', ProjectContentSchema)
