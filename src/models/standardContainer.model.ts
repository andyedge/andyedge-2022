import Image from './image.model'

declare interface StandardContainer {
    title: string
    subtitle?: string
    logo: Image | {}
    ctaText?: string
    ctaPageLink?: string
    image: Image | {}
    backgroundImage: Image | {}
    mediaPosition: 'left' | 'right'
}

export default StandardContainer