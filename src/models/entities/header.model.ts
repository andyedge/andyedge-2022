import ImageContainer from '../generic/imageContainer.model'
import LinkType from '../generic/link.model'
import MegaMenu from './megaMenu.model'

export default interface Header {
    logo: ImageContainer
    links: LinkType[]
    megaMenu: MegaMenu
    ctaButton: LinkType
    formId: string
}