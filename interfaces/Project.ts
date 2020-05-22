type headingValue = string
type paragraphValue = string
type imageValue = {
  alt: string
  srcSet: string[]
}
type rowValue = Array<imageValue>
type filmValue = string

type contentValue =
  | headingValue
  | paragraphValue
  | imageValue
  | rowValue
  | filmValue

export interface ProjectContent {
  type: 'heading' | 'paragraph' | 'image' | 'row' | 'film'
  content: contentValue
  alt?: string
  size?: number
}

interface ProjectService {
  slug: string
}

export interface Project {
  _id: string
  title: string
  slug: string
  listImage: string
  content: ProjectContent[]
  callToAction: string
  service: ProjectService
}
