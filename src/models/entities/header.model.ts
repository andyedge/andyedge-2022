import ImageType from '../generic/image.model'
import LinkType from '../generic/link.model'
import MegaMenu from './megaMenu.model'

export default interface Header {
    logo: ImageType
    links: LinkType[]
    megaMenu: MegaMenu
    ctaButton: LinkType
}