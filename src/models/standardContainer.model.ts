import ImageType from './image.model'
import StepsContainer from './stepsContainer.model'

declare interface StandardContainer {
    preTitle?: string
    title: string
    subtitle?: string
    bulletsContainer?: StepsContainer[]
    logo: ImageType | {}
    text?: any
    ctaText?: string
    ctaPageLink?: string
    ctaVideoLink?: string
    images?: ImageType[]
    backgroundImage: ImageType | {}
    videoUrl?: string
    mediaPosition: 'left' | 'right'
}

export default StandardContainer