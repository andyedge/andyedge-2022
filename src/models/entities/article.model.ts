import ImageType from '../generic/image.model'
import StandardContainer from '../generic/standardContainer.model'
import { Document } from '@contentful/rich-text-types'
import ContactContainer from '../generic/contact.model'

export default interface Article {
    slug: string
    heroContainer: StandardContainer
    standardContainer1: StandardContainer
    standardContainer2: StandardContainer
    mediaCarousel: ImageType[]
    articleText: Document
    pageImage1: ImageType
    pageImage2: ImageType
    pageImage3: ImageType
    contactContainer: ContactContainer
}