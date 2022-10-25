import SeoContent from '../generic/seoContent.model'
import ContactContainer from '../generic/contact.model'
import StandardContainer from  '../generic/standardContainer.model'

export default interface Page404 {    
    name: string
    seoContent: SeoContent
    hero: StandardContainer
    contactContainer: ContactContainer
}