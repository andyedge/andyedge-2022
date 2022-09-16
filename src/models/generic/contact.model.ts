import ImageType from './image.model'
import { Document } from '@contentful/rich-text-types'

declare interface ContactContainer {
    preTitle?: string
    title: string
    text?: any
    contactImage?: ImageType | {}
    contactVideoUrl?: string
    inputPlaceholder?: string
    inputBottomText?: Document
    ctaText?: string
    ctaPageLink?: string    
}

export default ContactContainer