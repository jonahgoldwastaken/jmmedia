import gql from 'graphql-tag'

export interface ImageUploadData {
  filename: string
  mimetype: string
  encoding: string
}

export interface ImageUploadVariables {
  imageFile: File
}

export const IMAGE_UPLOAD = gql`
  mutation($imageFile: Upload!) {
    uploadImage(file: $imageFile)
  }
`
