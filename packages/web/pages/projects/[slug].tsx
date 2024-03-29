import { ApolloQueryResult } from 'apollo-client'
import CTA from 'components/CTA'
import Footer from 'components/Footer'
import Header from 'components/Header'
import {
  Article,
  ArticleContext,
  ArticleHeading,
  ArticleImage,
  ArticleImageRow,
  ArticleText,
  ArticleTitle,
} from 'components/Project/Article'
import { ArticleVideo } from 'components/Project/Article/Video'
import DarkRoom from 'components/Project/Darkroom'
import {
  ProjectDocument,
  ProjectQuery,
  ProjectQueryVariables,
} from 'generated/graphql'
import { imageValue, rowValue } from 'interfaces/Project'
import { initializeApollo } from 'libs/apolloClient'
import { NextPage, NextPageContext } from 'next'
import Error from 'next/error'
import Head from 'next/head'
import { useState } from 'react'

type Props = {
  result: ApolloQueryResult<ProjectQuery> | null
}

const ProjectPage: NextPage<Props> = ({ result }) => {
  if (!result?.data?.project) return <Error statusCode={404} />
  const { project } = result.data
  const [darkRoomOpen, setDarkRoomOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState<{
    src: string
    alt?: string
  }>({ src: '', alt: '' })

  return (
    <>
      <Head>
        <title>{project.title} - JM</title>
      </Head>
      <Header />
      <ArticleContext.Provider
        value={{
          currentImage,
          setCurrentImage,
          darkRoomOpen,
          setDarkRoomOpen,
        }}
      >
        <Article>
          <ArticleTitle>{project.title}</ArticleTitle>
          {project.content.map(({ type, data, _id }) => {
            if (type === 'heading')
              return <ArticleHeading key={_id}>{data}</ArticleHeading>
            else if (type === 'paragraph')
              return <ArticleText key={_id}>{data}</ArticleText>
            else if (type === 'row') {
              const images: rowValue = JSON.parse(data)
              return (
                <ArticleImageRow key={_id} amount={images.length}>
                  {images.map(({ srcSet, alt }) => (
                    <ArticleImage
                      onClick={() => {
                        setCurrentImage({ src: srcSet[2], alt })
                        setDarkRoomOpen(true)
                      }}
                      src={srcSet}
                      alt={alt}
                    />
                  ))}
                </ArticleImageRow>
              )
            } else if (type === 'image') {
              const { srcSet, alt }: imageValue = JSON.parse(data)
              return (
                <ArticleImage
                  key={_id}
                  onClick={() => {
                    setCurrentImage({ src: srcSet[2], alt })
                    setDarkRoomOpen(true)
                  }}
                  src={srcSet}
                  alt={alt}
                />
              )
            } else return <ArticleVideo key={_id} id={data} />
          })}
          <CTA
            centre
            href="/services/[slug]"
            as={`/services/${project.service.slug}`}
          >
            {project.callToAction}
          </CTA>
        </Article>
        <DarkRoom />
      </ArticleContext.Provider>
      <Footer />
    </>
  )
}

ProjectPage.getInitialProps = async (ctx: NextPageContext) => {
  const apolloClient = initializeApollo()
  const slug = ctx.query.slug as string
  try {
    const result = await apolloClient.query<
      ProjectQuery,
      ProjectQueryVariables
    >({
      query: ProjectDocument,
      variables: { slug },
    })
    return { result }
  } catch (err) {
    return { result: null }
  }
}

export default ProjectPage
