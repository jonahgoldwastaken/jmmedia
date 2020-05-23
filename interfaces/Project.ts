export type headingValue = {
  level: number
  text: string
}
export type paragraphValue = string
export type imageValue = {
  alt: string
  srcSet: string[]
}
export type rowValue = Array<imageValue>
export type filmValue = string

export interface ProjectContent {
  type: 'heading' | 'paragraph' | 'image' | 'row' | 'film'
  data: string
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
