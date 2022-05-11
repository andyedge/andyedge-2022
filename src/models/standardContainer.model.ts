import Image from './image.model'
import StepsContainer from './stepsContainer.model'

declare interface StandardContainer {
    preTitle?: string
    title: string
    subtitle?: string
    bulletsContainer?: StepsContainer[]
    logo: Image | {}
    ctaText?: string
    ctaPageLink?: string
    image: Image | {}
    backgroundImage: Image | {}
    mediaPosition: 'left' | 'right'
}

export default StandardContainer