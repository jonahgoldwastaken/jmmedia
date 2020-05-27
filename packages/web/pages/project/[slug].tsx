import { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import { useState } from 'react'
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
} from 'components/Portfolio/Article'
import { ArticleVideo } from 'components/Portfolio/Article/Video'
import DarkRoom from 'components/Portfolio/Darkroom'
import { Project, imageValue, rowValue } from 'interfaces/Project'

type Props = {
  project: Project
}

const ProjectPage: NextPage<Props> = ({ project }) => {
  const [darkRoomOpen, setDarkRoomOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState<{
    src: string
    alt?: string
  }>({ src: '', alt: '' })

  return (
    <>
      <Head>
        <title>Project - JM</title>
      </Head>
      <Header />
      <Article>
        <ArticleContext.Provider
          value={{
            currentImage,
            setCurrentImage,
            darkRoomOpen,
            setDarkRoomOpen,
          }}
        >
          <ArticleTitle>{project.title}</ArticleTitle>
          {project.content.map(({ type, data }) => {
            if (type === 'heading')
              return <ArticleHeading>{data}</ArticleHeading>
            else if (type === 'paragraph')
              return <ArticleText>{data}</ArticleText>
            else if (type === 'row') {
              const images: rowValue = JSON.parse(data)
              return (
                <ArticleImageRow key={data} amount={images.length}>
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
                  onClick={() => {
                    setCurrentImage({ src: srcSet[2], alt })
                    setDarkRoomOpen(true)
                  }}
                  src={srcSet}
                  alt={alt}
                />
              )
            } else return <ArticleVideo controls src={data} />
          })}

          <DarkRoom />
        </ArticleContext.Provider>
      </Article>
      <Footer>
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

ProjectPage.getInitialProps = async (ctx: NextPageContext) => {
  const project = await fetch(
    (process?.env?.BASE_URL || window?.location?.origin) +
      `/api/projects/get/${ctx.query.slug}`
  )
    .then(r => r.json())
    .catch(console.log)

  return { project: project || null }
}

export default ProjectPage
