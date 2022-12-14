import HowItem from '../generic/howItem.model'
import SeoContent from '../generic/seoContent.model'
import { Document } from '@contentful/rich-text-types'
import ContactContainer from '../generic/contact.model'
import StandardContainer from '../generic/standardContainer.model'

export default interface Article {
    slug: string
    seo: SeoContent
    heroContainer: StandardContainer
    articleText: Document
    contactContainer: ContactContainer
    relatedArticles: HowItem[]
}