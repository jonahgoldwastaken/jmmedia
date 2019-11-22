import { useCallback, useState } from 'react'
import Gallery from 'react-photo-gallery'
import { Image } from './Image'
import { ImageModal } from './Modal'

const testPhotos = [
  {
    src:
      'https://storage.googleapis.com/filmportfolio/fotografie/afwas-zweden.jpeg',
    width: 3,
    height: 2,
    title: 'Afwas die ligt te drogen op een houten plank in het bos.',
  },
  {
    src:
      'https://storage.googleapis.com/filmportfolio/fotografie/big-ben-en-de-tower.jpeg',
    width: 3,
    height: 2,
    title: 'De big ben in de stijgers naast de tower bij nacht.',
  },
  {
    src:
      'https://storage.googleapis.com/filmportfolio/fotografie/bloem-macro.jpeg',
    width: 3,
    height: 2,
    title: 'Macro shot van een paarse bloem.',
  },
  {
    src:
      'https://storage.googleapis.com/filmportfolio/fotografie/boom-met-zon.jpeg',
    width: 2,
    height: 3,
    title: 'De zon die door de bomen in Zweden schemert.',
  },
  {
    src: 'https://storage.googleapis.com/filmportfolio/fotografie/crea.jpeg',
    width: 3,
    height: 2,
    title: 'Het CREA gebouw in Amsterdam bij zonsondergang.',
  },
  {
    src: 'https://storage.googleapis.com/filmportfolio/fotografie/ketel.jpeg',
    width: 3,
    height: 2,
    title: 'Foto van een zwartgeblakerde ketel.',
  },
  {
    src:
      'https://storage.googleapis.com/filmportfolio/fotografie/klokkentoren-st.-pauls-cathedral.jpeg',
    width: 2,
    height: 3,
    title:
      'Foto van een van de klokkentorens van sint pauls kathedraal in Londen.',
  },
  {
    src:
      'https://storage.googleapis.com/filmportfolio/fotografie/koffie-na-houthakken.jpeg',
    width: 3,
    height: 2,
    title:
      'Een lekkere kop koffie na het houthakken, de hakbijl rustend in de achtergrond.',
  },
  {
    src:
      'https://storage.googleapis.com/filmportfolio/fotografie/leidse-gracht.jpeg',
    width: 3,
    height: 2,
    title: 'Foto van een van de grachten in Leiden.',
  },
  {
    src:
      'https://storage.googleapis.com/filmportfolio/fotografie/londen-appartement.jpeg',
    width: 3,
    height: 2,
    title: 'Foto van het uiterste puntje van een Londens appartement.',
  },
  {
    src:
      'https://storage.googleapis.com/filmportfolio/fotografie/nachtfoto-buslichten.jpeg',
    width: 3,
    height: 2,
    title:
      'Nachtfoto op lange sluitertijd van de Kanaalkade in Alkmaar, terwijl er een bus langsreedt.',
  },
  {
    src:
      'https://storage.googleapis.com/filmportfolio/fotografie/silhouette.jpeg',
    width: 2,
    height: 3,
    title: 'Silhouette van een kleien mannetje.',
  },
  {
    src:
      'https://storage.googleapis.com/filmportfolio/fotografie/toolenburg.jpeg',
    width: 3,
    height: 2,
    title: 'Foto van een picknickbankje bij de Toolenburgerplas.',
  },
]

const imageRenderer = props => {
  return <Image {...props} />
}

export const List: React.FunctionComponent = props => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }
  return (
    <>
      <Gallery
        photos={testPhotos}
        onClick={openLightbox}
        renderImage={imageRenderer}
        margin={0}
        targetRowHeight={400}
      />
      <ImageModal
        viewerIsOpen={viewerIsOpen}
        closeHandler={closeLightbox}
        currentImage={currentImage}
        photos={testPhotos}
      />
    </>
  )
}
