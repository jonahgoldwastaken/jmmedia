import { Document, model, Schema } from 'mongoose'

interface ProjectContent extends Document {
  type: string
  conrtent: string
  alt?: string
}

const ProjectContentSchema: Schema<ProjectContent> = new Schema({
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
})

const ProjectContent = model('ProjectContent', ProjectContentSchema)

export default ProjectContent
