import Head from 'next/head'
import Header from '../../components/Header'
import {
  Article,
  ArticleImage,
  ArticleHeading,
  ArticleTitle,
  ArticleText,
  ArticleImageRow,
  ArticleContext,
} from '../../components/Portfolio/Article'
import Footer, { FooterLink } from '../../components/Footer'
import { ArticleVideo } from '../../components/Portfolio/Article/Video'
import { useState } from 'react'
import DarkRoom from '../../components/Portfolio/Darkroom'

export default () => {
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
          <ArticleTitle centre>Titel</ArticleTitle>
          <ArticleImage src="https://unsplash.com/photos/Fk600Fgg_24/download?force=true" />
          <ArticleVideo
            controls
            src="https://00e9e64bacd60008e6845a78306ec6d6a4c526ade9e4e725ed-apidata.googleusercontent.com/download/storage/v1/b/filmportfolio/o/film%2Fvoorstellen%2Fpreview.mov?qk=AD5uMEtdFLwbLH5D3YwGCPwQnkkr-P0XHru0vrR9nmlmdsU--FiowC2tHHvApLev0qAXwOWKvCNiNyjKUPDzy9XcUpfj82lxOEacFhQ9fiAU6Y47ogI16PgE7FtuORio9_k03J-dJrMPqFkIDCZe9GE9fQhzhZPverJFmG7JQxoqrvgXjjYst5ftsZIro4j0Xql7eC-DBC0DBPyJ-UPr1bK-WkO96n3ZHkkWeFKqp37OilMYZwg8JGSeanJ8ke0Q7__ri4-LEChXuyTkrpuICdv-RCoyYnBn17as8D19Kpy_Y6ZVeO87HAWvt7QoL57m2nOVnlRqZVBGl8kNk8PDd_c7WmgfqK5zy8l9Cp2O51UXHWmQBUs-Cu-fP6jbQUjlYbK7w394kA-qMur4N8lSnlNEswrgOueYLxB-SnqfWAvEWiYyX8_akOrOXbjcLs6yjI-zcvOXRPO3UY0D4QT4xjZEfs8Kn037mbI8T8c4KjjGkgy7PsYmqpYzX3GLnvQRSvUR7UYIn3SgRl_QvkUxRPZShziMRxX6Tw9jYZIcWO5QlZIyzUA-eEVBCP8t4XLuYl54oQ3oxM5oGJwyR-5YpoShy84GgBUMjHFkLufokGVqKqUaaFHq4RlMVDe9irw7C5F8iiLPkgUsq3S52-BEeSx1pVd25m7ZaBPIdDxUrPCBXDKhkvUv_ZdYeIt__p1_FKUojcOwTLuM1M34uCi8gJV4jso-MaIZH59nRkmoVqgNF5pGhDBnI_xEbXuc4uYGIfOcA4d0ha-EQMnykRE0yRxK7dGOHONZ6r46hyedvrCGSGYLWLr5bZjGxOUIwd57FSiLaaAz0M4o&isca=1"
          />
          <ArticleHeading>Een geweldige titel</ArticleHeading>
          <ArticleText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            eveniet qui, deleniti exercitationem libero provident omnis, eius
            illum sunt velit deserunt ducimus quo consequuntur aliquid, debitis
            amet facilis dolores itaque.
          </ArticleText>
          <ArticleText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            eveniet qui, deleniti exercitationem libero provident omnis, eius
            illum sunt velit deserunt ducimus quo consequuntur aliquid, debitis
            amet facilis dolores itaque.
          </ArticleText>
          <ArticleImageRow amount={3}>
            <ArticleImage src="https://unsplash.com/photos/Fk600Fgg_24/download?force=true" />
            <ArticleImage src="https://unsplash.com/photos/Fk600Fgg_24/download?force=true" />
            <ArticleImage src="https://unsplash.com/photos/Fk600Fgg_24/download?force=true" />
          </ArticleImageRow>
          <ArticleText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            eveniet qui, deleniti exercitationem libero provident omnis, eius
            illum sunt velit deserunt ducimus quo consequuntur aliquid, debitis
            amet facilis dolores itaque.
          </ArticleText>
          <ArticleImageRow amount={3}>
            <ArticleImage src="https://unsplash.com/photos/Fk600Fgg_24/download?force=true" />
            <ArticleImage src="https://unsplash.com/photos/Fk600Fgg_24/download?force=true" />
            <ArticleImage src="https://unsplash.com/photos/Fk600Fgg_24/download?force=true" />
          </ArticleImageRow>
          <ArticleImageRow amount={5}>
            <ArticleImage src="https://unsplash.com/photos/Fk600Fgg_24/download?force=true" />
            <ArticleImage src="https://unsplash.com/photos/Fk600Fgg_24/download?force=true" />
            <ArticleImage src="https://unsplash.com/photos/Fk600Fgg_24/download?force=true" />
            <ArticleImage src="https://unsplash.com/photos/Fk600Fgg_24/download?force=true" />
            <ArticleImage src="https://unsplash.com/photos/Fk600Fgg_24/download?force=true" />
          </ArticleImageRow>
          <ArticleHeading>Nog een geweldige titel</ArticleHeading>
          <ArticleText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            eveniet qui, deleniti exercitationem libero provident omnis, eius
            illum sunt velit deserunt ducimus quo consequuntur aliquid, debitis
            amet facilis dolores itaque.
          </ArticleText>
          <DarkRoom />
        </ArticleContext.Provider>
      </Article>
      <Footer>
        <FooterLink colour="primary" href="">
          Vorig project
        </FooterLink>
        <FooterLink colour="primary" href="">
          Call to action
        </FooterLink>
        <FooterLink colour="primary" href="">
          Volgend project
        </FooterLink>
      </Footer>
    </>
  )
}
