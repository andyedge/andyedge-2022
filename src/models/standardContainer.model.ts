import Image from './image.model'
import StepsContainer from './stepsContainer.model'

declare interface StandardContainer {
    preTitle?: string
    title: string
    subtitle?: string
    bulletsContainer?: StepsContainer[]
    logo: Image | {}
    text?: any
    ctaText?: string
    ctaPageLink?: string
    ctaVideoLink?: string
    image: Image | {}
    backgroundImage: Image | {}
    videoUrl?: string
    mediaPosition: 'left' | 'right'
}

export default StandardContainer