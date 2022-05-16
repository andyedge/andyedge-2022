import ImageType from './image.model'

declare interface ContactContainer {
    preTitle?: string
    title: string
    text?: any
    contactImage?: ImageType | {}
    contactVideoUrl?: string
    ctaText?: string
    ctaPageLink?: string    
}

export default ContactContainer