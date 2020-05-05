export interface VideoItem {
  id: number
  title: string
  videoEmbed: string
  placeholder: {
    image?: string
    video: string
  }
  type: string
  year: number
  description: string[]
  highlight?: boolean
  large?: boolean
}
