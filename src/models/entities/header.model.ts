import ImageType from '../generic/image.model'
import Link from '../generic/link.model'
import MegaMenu from './megaMenu.model'

export default interface Header {
    logo: ImageType
    links: Link[]
    megaMenu: MegaMenu
    ctaButton: Link
}