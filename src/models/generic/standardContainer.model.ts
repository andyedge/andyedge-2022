import ImageType from './image.model'
import StepsContainer from './stepsContainer.model'
import { Document } from '@contentful/rich-text-types'
import LinkType from './link.model'
import ImageContainer from './imageContainer.model'

declare interface StandardContainer {
    preTitle?: string
    title: string
    strikeThroughTitle?: string
    complementTitle?: string
    subtitle?: string
    bulletsContainer?: StepsContainer[]
    logoC: ImageContainer
    primaryButtonCta: LinkType
    secondaryButtonCta: LinkType
    text?: Document
    imagesContainer?: ImageContainer[]
    backgroundImage: ImageContainer
    videoUrl?: string
    mediaPosition: 'left' | 'right'
}

export default StandardContainer