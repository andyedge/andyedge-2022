import ImageType from './image.model'
import StepsContainer from './stepsContainer.model'
import { Document } from '@contentful/rich-text-types'

declare interface StandardContainer {
    preTitle?: string
    title: string
    strikeThroughTitle?: string
    complementTitle?: string
    subtitle?: string
    bulletsContainer?: StepsContainer[]
    logo: ImageType
    text?: Document
    ctaText?: string
    ctaPageLink?: string
    ctaVideoLink?: string
    images?: ImageType[]
    backgroundImage: ImageType
    videoUrl?: string
    mediaPosition: 'left' | 'right'
}

export default StandardContainer