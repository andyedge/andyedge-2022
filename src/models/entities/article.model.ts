import ImageType from '../generic/image.model'
import StandardContainer from '../generic/standardContainer.model'
import { Document } from '@contentful/rich-text-types'
import ContactContainer from '../generic/contact.model'
import ImageContainer from '../generic/imageContainer.model'
import SeoContent from '../generic/seoContent.model'

export default interface Article {
    slug: string
    seo: SeoContent
    heroContainer: StandardContainer
    standardContainer1: StandardContainer
    standardContainer2: StandardContainer
    mediaCarousel: ImageType[]
    articleText: Document
    pageImage1: ImageContainer
    pageImage2: ImageContainer
    pageImage3: ImageContainer
    contactContainer: ContactContainer
}