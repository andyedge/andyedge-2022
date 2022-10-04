import ImageType from '../generic/image.model'
import Link from '../generic/link.model'
import { Document } from '@contentful/rich-text-types'

declare interface SocialLink {
    icon: string
    url: string
    size: number
}

export default interface Footer {
    logo: ImageType
    pageLinks: Link[]
    contactText: string
    contactContent: Document
    getInTouchText: string
    getInTouchContent: Document
    button: Link
    copyrightText: string
    socialLinks: SocialLink[]
    formId: string
}