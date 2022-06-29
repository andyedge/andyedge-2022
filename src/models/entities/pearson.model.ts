import ImageType from '../generic/image.model'
import StandardCardContainer from '../generic/standardCardContainer.model'
import StandardContainer from '../generic/standardContainer.model'
import TextSlider from '../generic/textSlider.model'
import LinkType from '../generic/link.model'
import ContactContainer from '../generic/contact.model'

export default interface Pearson {
    hero: StandardContainer
    cards: StandardCardContainer[]
    standardContainer1: StandardContainer
    bigTitle1: LinkType
    standardContainer2: StandardContainer
    bigTitle2: LinkType
    bigImage: ImageType
    standardContainer3: StandardContainer
    caseFeatures: StandardContainer[]
    mediumTitle: string
    underlappedImage: ImageType
    overlappedImage: ImageType
    bigTitle3 : LinkType
    bigImage2: ImageType
    standardContainer4: StandardContainer
    solutionList: StandardContainer[]
    testimonial: TextSlider
    bottomSection: ContactContainer
}