import ImageType from './image.model'

declare interface StandardCardContainer {
    icon: ImageType | {}
    title: string
    subtitle?: string
    text: string
    modalText: any
    leftCtaText: string
    leftCtaLink: string
    rightCtaText?: string
    rightCtaLink?: string
}

export default StandardCardContainer