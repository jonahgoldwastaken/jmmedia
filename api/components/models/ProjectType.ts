import { Document, model, Schema } from 'mongoose'

interface ProjectType extends Document {
  name: string
  type: string
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
})

const ProjectType = model('ProjectType', ProjectTypeSchema)

export default ProjectType
