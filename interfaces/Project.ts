interface ProjectContent {
  type: 'heading' | 'paragraph' | 'image' | 'row' | 'film'
  content: string
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
  content: ProjectContent[]
  callToAction: string
  service: ProjectService
}
