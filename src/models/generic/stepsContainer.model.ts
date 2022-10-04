import ImageType from './image.model'
import LinkType from './link.model'

export default interface StepsContainer {
    title: string
    preTitle: string
    text: string
    image: ImageType | {}
    link: LinkType
}