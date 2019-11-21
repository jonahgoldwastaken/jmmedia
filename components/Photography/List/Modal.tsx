import Carousel, { ModalGateway, Modal } from 'react-images'
import theme from '../../../theme'
import { ListButton } from './Button'

const testPhotos = [
  {
    src: 'https://images.unsplash.com/photo-1574279789186-ac087a018561',
    width: 3,
    height: 2,
    title: 'je oma',
  },
  {
    src: 'https://images.unsplash.com/photo-1574279789186-ac087a018561',
    width: 3,
    height: 2,
    title: 'je oma',
  },
  {
    src: 'https://images.unsplash.com/photo-1574279789186-ac087a018561',
    width: 3,
    height: 2,
    title: 'je oma',
  },
]

type HeaderButtonProps = {
  innerProps: {
    onClick?: () => void
    title: string
  }
  isModal: boolean
  isFullscreen: boolean
  isOpen: boolean
}

type FooterCountProps = {
  currentIndex: number
  views: Array<{}>
}

const HeaderCloseButton: React.FunctionComponent<HeaderButtonProps> = ({
  innerProps,
}) => {
  return <ListButton icon="times" {...innerProps} />
}

const FooterCount: React.FunctionComponent<FooterCountProps> = ({
  currentIndex,
  views,
}) => {
  return (
    <span>
      {currentIndex + 1} van de {views.length}
    </span>
  )
}

const ModalStyles = {
  dialog: base => {
    return {
      ...base,
      zIndex: 1000,
    }
  },
  blanket: base => {
    return {
      ...base,
      zIndex: 999,
      background: 'black !important',
      transition: `all ${theme.animation.timing[0]} ${theme.animation.curve} !important`,
    }
  },
  positioner: (base, state) => {
    const styles = {
      ...base,
      zIndex: 999,
      transition: `all ${theme.animation.timing[0]} ${theme.animation.curve} !important`,
      background: 'black !important',
    }
    return styles
  },
}

const CarouselStyles = {
  header: (base, state) => {
    const styles = {
      ...base,
      background: '#505050 !important',
      padding: `${theme.space[2]} ${theme.space[3]}`,
      transition: `all ${theme.animation.timing[0]} ${theme.animation.curve} !important`,
    }
    if (state.interactionIsIdle) {
      styles.transform = 'translateY(-100%)'
      styles.opacity = 1
    }
    return styles
  },
  headerClose: (base, state) => {
    const styles = {
      ...base,
      color: theme.colors.primary,
      fontSize: theme.fontSizes[2],
    }
    return styles
  },
  headerFullscreen: (base, state) => {
    const styles = {
      ...base,
      color: theme.colors.primary,
      fontSize: theme.fontSizes[1],
    }
    return styles
  },
  footer: (base, state) => {
    const styles = {
      ...base,
      fontFamily: '"Red Hat Display", sans-serif',
      background: '#505050 !important',
      padding: `${theme.space[2]} ${theme.space[3]}`,
      color: theme.colors.primary,
      fontSize: theme.fontSizes[1],
      fontWeight: 'bold',
      transition: `all ${theme.animation.timing[0]} ${theme.animation.curve} !important`,
    }
    if (state.interactionIsIdle) {
      styles.transform = 'translateY(100%)'
      styles.opacity = 1
    }
    return styles
  },
  view: (base, state) => {
    const styles = {
      ...base,
    }
    if (state.currentView.rotation && state.currentView.rotation === 'left') {
      styles.transform = 'rotate(-90deg)'
    } else if (
      state.currentView.rotation &&
      state.currentView.rotation === 'right'
    ) {
      styles.transform = 'rotate(90deg)'
    }
    return styles
  },
  navigation: (base, state) => {
    const styles = {
      ...base,
      transition: `all ${theme.animation.timing[0]} ${theme.animation.curve} !important`,
    }
    return styles
  },
}

type ImageModalProps = {
  viewerIsOpen: boolean
  closeHandler: () => void
  currentImage: number
  photos: Array<{
    src: string
    width: number
    height: number
    title: string
  }>
}

export const ImageModal: React.FunctionComponent<ImageModalProps> = ({
  viewerIsOpen,
  closeHandler,
  currentImage,
  photos,
}) => (
  <ModalGateway>
    {viewerIsOpen && (
      <Modal
        allowFullscreen={false}
        onClose={closeHandler}
        styles={ModalStyles}
      >
        <Carousel
          currentIndex={currentImage}
          views={photos.map(x => ({
            ...x,
            caption: x.title,
          }))}
          components={{
            HeaderClose: HeaderCloseButton,
            FooterCount: FooterCount,
          }}
          styles={CarouselStyles}
        />
      </Modal>
    )}
  </ModalGateway>
)
