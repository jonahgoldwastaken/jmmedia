import { ApolloQueryResult } from 'apollo-client'
import { WithApolloClient } from 'apolloClient'
import Footer, { FooterLink } from 'components/Footer'
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
import { withApollo } from 'libs/apollo'
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
        </Article>
        <DarkRoom />
      </ArticleContext.Provider>
      <Footer background="secondary">
        <FooterLink colour="secondary" href="">
          Vorig project
        </FooterLink>
        <FooterLink
          colour="secondary"
          href={`/services/${project.service.slug}`}
        >
          {project.callToAction}
        </FooterLink>
        <FooterLink colour="secondary" href="">
          Volgend project
        </FooterLink>
      </Footer>
    </>
  )
}

ProjectPage.getInitialProps = async (
  ctx: WithApolloClient<NextPageContext>
) => {
  const slug = ctx.query.slug as string
  try {
    const result = await ctx.apolloClient.query<
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

export default withApollo({ ssr: true })(ProjectPage)
