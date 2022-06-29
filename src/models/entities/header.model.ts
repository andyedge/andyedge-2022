import ImageType from '../generic/image.model'
import LinkType from '../generic/link.model'

export default interface Header {
    logo: ImageType
    links: LinkType[]
    megaMenu: string
    ctaButton: LinkType
}