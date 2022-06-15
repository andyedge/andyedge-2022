import ImageType from '../generic/image.model'
import Link from '../generic/link.model'

export default interface Header {
    logo: ImageType
    links: Link[]
    megaMenu: string
    ctaButton: Link
}