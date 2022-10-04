import ImageType from './image.model'
import { Document } from '@contentful/rich-text-types'

declare interface StandardCardContainer {
    icon: ImageType
    title: string
    subtitle?: string
    text: string
    modalText: Document
    leftCtaText: string
    leftCtaLink: string
    rightCtaText?: string
    rightCtaLink?: string
}

export default StandardCardContainer