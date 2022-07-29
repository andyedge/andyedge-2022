import { Document } from '@contentful/rich-text-types'
import SeoContent from '../generic/seoContent.model'

export default interface Privacy {
    title: string
    seo: SeoContent
    content: Document
}