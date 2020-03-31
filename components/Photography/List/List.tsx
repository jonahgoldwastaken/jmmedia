import { RefObject, useState } from 'react'
import List from '../../Common/List'
import { ListContext } from './Context'
import Image from './Image'
import { ListImageCallbacks } from './Image/Image'
import Lightbox from './Lightbox'

const testPhotos = {
  small: [
    {
      src:
        'https://storage.googleapis.com/filmportfolio/fotografie/klein/afwas-zweden.jpeg',
      title: 'Afwas die ligt te drogen op een houten plank in het bos.',
    },
    {
      src:
        'https://storage.googleapis.com/filmportfolio/fotografie/klein/big-ben-en-de-tower.jpeg',
      title: 'De big ben in de stijgers naast de tower bij nacht.',
    },
    {
      src:
        'https://storage.googleapis.com/filmportfolio/fotografie/klein/bloem-macro.jpeg',
      title: 'Macro shot van een paarse bloem.',
    },
    {
      src:
        'https://storage.googleapis.com/filmportfolio/fotografie/klein/boom-met-zon.jpeg',
      title: 'De zon die door de bomen in Zweden schemert.',
    },
    {
      src:
        'https://storage.googleapis.com/filmportfolio/fotografie/klein/crea.jpeg',
      title: 'Het CREA gebouw in Amsterdam bij zonsondergang.',
    },
    {
      src:
        'https://storage.googleapis.com/filmportfolio/fotografie/klein/ketel.jpeg',
      title: 'Foto van een zwartgeblakerde ketel.',
    },
    {
      src:
        'https://storage.googleapis.com/filmportfolio/fotografie/klein/klokkentoren-st.-pauls-cathedral.jpeg',
      title:
        'Foto van een van de klokkentorens van sint pauls kathedraal in Londen.',
    },
    {
      src:
        'https://storage.googleapis.com/filmportfolio/fotografie/klein/koffie-na-houthakken.jpeg',
      title:
        'Een lekkere kop koffie na het houthakken, de hakbijl rustend in de achtergrond.',
    },
    {
      src:
        'https://storage.googleapis.com/filmportfolio/fotografie/klein/leidse-gracht.jpeg',
      title: 'Foto van een van de grachten in Leiden.',
    },
    {
      src:
        'https://storage.googleapis.com/filmportfolio/fotografie/klein/londen-appartement.jpeg',
      title: 'Foto van het uiterste puntje van een Londens appartement.',
    },
    {
      src:
        'https://storage.googleapis.com/filmportfolio/fotografie/klein/nachtfoto-buslichten.jpeg',
      title:
        'Nachtfoto op lange sluitertijd van de Kanaalkade in Alkmaar, terwijl er een bus langsreedt.',
    },
    {
      src:
        'https://storage.googleapis.com/filmportfolio/fotografie/klein/silhouette.jpeg',
      title: 'Silhouette van een kleien mannetje.',
    },
    {
      src:
        'https://storage.googleapis.com/filmportfolio/fotografie/klein/toolenburg.jpeg',
      title: 'Foto van een picknickbankje bij de Toolenburgerplas.',
    },
  ],
  large: [
    {
      src:
        'https://storage.googleapis.com/filmportfolio/fotografie/groot/afwas-zweden.jpeg',
      title: 'Afwas die ligt te drogen op een houten plank in het bos.',
    },
    {
      src:
        'https://storage.googleapis.com/filmportfolio/fotografie/groot/big-ben-en-de-tower.jpeg',
      title: 'De big ben in de stijgers naast de tower bij nacht.',
    },
    {
      src:
        'https://storage.googleapis.com/filmportfolio/fotografie/groot/bloem-macro.jpeg',
      title: 'Macro shot van een paarse bloem.',
    },
    {
      src:
        'https://storage.googleapis.com/filmportfolio/fotografie/groot/boom-met-zon.jpeg',
      title: 'De zon die door de bomen in Zweden schemert.',
    },
    {
      src:
        'https://storage.googleapis.com/filmportfolio/fotografie/groot/crea.jpeg',
      title: 'Het CREA gebouw in Amsterdam bij zonsondergang.',
    },
    {
      src:
        'https://storage.googleapis.com/filmportfolio/fotografie/groot/ketel.jpeg',
      title: 'Foto van een zwartgeblakerde ketel.',
    },
    {
      src:
        'https://storage.googleapis.com/filmportfolio/fotografie/groot/klokkentoren-st.-pauls-cathedral.jpeg',
      title:
        'Foto van een van de klokkentorens van sint pauls kathedraal in Londen.',
    },
    {
      src:
        'https://storage.googleapis.com/filmportfolio/fotografie/groot/koffie-na-houthakken.jpeg',
      title:
        'Een lekkere kop koffie na het houthakken, de hakbijl rustend in de achtergrond.',
    },
    {
      src:
        'https://storage.googleapis.com/filmportfolio/fotografie/groot/leidse-gracht.jpeg',
      title: 'Foto van een van de grachten in Leiden.',
    },
    {
      src:
        'https://storage.googleapis.com/filmportfolio/fotografie/groot/londen-appartement.jpeg',
      title: 'Foto van het uiterste puntje van een Londens appartement.',
    },
    {
      src:
        'https://storage.googleapis.com/filmportfolio/fotografie/groot/nachtfoto-buslichten.jpeg',
      title:
        'Nachtfoto op lange sluitertijd van de Kanaalkade in Alkmaar, terwijl er een bus langsreedt.',
    },
    {
      src:
        'https://storage.googleapis.com/filmportfolio/fotografie/groot/silhouette.jpeg',
      title: 'Silhouette van een kleien mannetje.',
    },
    {
      src:
        'https://storage.googleapis.com/filmportfolio/fotografie/groot/toolenburg.jpeg',
      title: 'Foto van een picknickbankje bij de Toolenburgerplas.',
    },
  ],
}

const imageRenderer = (callbacks: ListImageCallbacks) => props => {
  return <Image {...props} {...callbacks} />
}

export const PhotographyList: React.FunctionComponent = () => {
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(undefined)
  const [lightboxAnimating, setLightboxAnimating] = useState<boolean>(undefined)
  const [currentIndex, setCurrentIndex] = useState<number>(undefined)
  const [ref, setRef] = useState<RefObject<any>>(undefined)

  const setImageRef = (ref: RefObject<any>) => {
    if (typeof currentIndex === 'number') setRef(ref)
  }

  const imageClickHandler = (ref: RefObject<any>, index: number) => {
    setRef(ref)
    setCurrentIndex(index)
  }

  const lightboxClickHandler = () => {
    setLightboxOpen(false)
    setLightboxAnimating(true)
  }

  const lightboxOnLoad = () => {
    setLightboxOpen(true)
    setLightboxAnimating(true)
  }

  const lightboxOnTransitionEnd = () => {
    setLightboxAnimating(false)
    if (!lightboxOpen) setCurrentIndex(undefined)
  }

  return (
    <ListContext.Provider
      value={{
        currentIndex,
        ref,
        lightboxOpen,
        lightboxAnimating,
        photos: testPhotos,
      }}
    >
      <List>
        {testPhotos.small.map((image, index) =>
          imageRenderer({
            setRef: setImageRef,
            clickHandler: imageClickHandler,
          })({ photo: image, index, key: image.src })
        )}
      </List>
      {typeof currentIndex !== 'undefined' && (
        <Lightbox
          lightboxClickHandler={lightboxClickHandler}
          lightboxOnLoad={lightboxOnLoad}
          lightboxOnTransitionEnd={lightboxOnTransitionEnd}
        />
      )}
    </ListContext.Provider>
  )
}
