import fetch from 'isomorphic-unfetch'
import { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Footer, { FooterLink } from '../../components/Footer'
import Header from '../../components/Header'
import {
  Article,
  ArticleContext,
  ArticleHeading,
  ArticleImage,
  ArticleImageRow,
  ArticleText,
  ArticleTitle,
} from '../../components/Portfolio/Article'
import { ArticleVideo } from '../../components/Portfolio/Article/Video'
import DarkRoom from '../../components/Portfolio/Darkroom'
import { Project } from '../../interfaces/Project'

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
          {project.content.map(contentBlock => {
            if (contentBlock.type === 'heading')
              return <ArticleHeading>{contentBlock.content}</ArticleHeading>
            else if (contentBlock.type === 'paragraph')
              return <ArticleText>{contentBlock.content}</ArticleText>
            else if (contentBlock.type === 'row') {
              const images = JSON.parse(contentBlock.content)
              return (
                <ArticleImageRow
                  key={contentBlock.content}
                  amount={contentBlock.size || 3}
                >
                  {images.map((image: string) => (
                    <ArticleImage src={image} />
                  ))}
                </ArticleImageRow>
              )
            } else if (contentBlock.type === 'image')
              return (
                <ArticleImage
                  src={contentBlock.content}
                  alt={contentBlock.alt}
                />
              )
            else if (contentBlock.type === 'film')
              return <ArticleVideo controls src={contentBlock.content} />
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
