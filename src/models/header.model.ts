import ImageType from './image.model'
import Link from './link.model'

export default interface Header {
    logo: ImageType
    links: Link[]
    megaMenu: string
    ctaButton: Link
}