import { useMutation } from '@apollo/react-hooks'
import { FileInput } from 'components/Form'
import { HeadingOne } from 'components/Text/Headings'
import {
  ImageUploadData,
  ImageUploadVariables,
  IMAGE_UPLOAD,
} from 'gql/imageUpload'
import { withApollo } from 'libs/apollo'
import Head from 'next/head'

const UploadTest = () => {
  const [uploadImage, { data, loading, error }] = useMutation<
    ImageUploadData,
    ImageUploadVariables
  >(IMAGE_UPLOAD)
  console.log(data, loading, error)

  return (
    <>
      <Head>
        <title>upload test</title>
      </Head>
      <main>
        <HeadingOne>Upload test</HeadingOne>
        <FileInput
          label="single upload"
          name=""
          required
          onChange={({ currentTarget: { validity, files } }) => {
            if (validity.valid)
              uploadImage({ variables: { imageFile: files[0] } })
          }}
        />
      </main>
    </>
  )
}
export default withApollo({ ssr: true })(UploadTest)