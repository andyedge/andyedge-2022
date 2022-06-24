import ImageType from '../generic/image.model'
import StandardCardContainer from '../generic/standardCardContainer.model'
import StandardContainer from '../generic/standardContainer.model'
import TextSlider from '../generic/textSlider.model'
import Link from '../generic/link.model'
import ContactContainer from '../generic/contact.model'

export default interface Pearson {
    hero: StandardContainer
    cards: StandardCardContainer[]
    standardContainer1: StandardContainer
    bigTitle1: Link
    standardContainer2: StandardContainer
    bigTitle2: Link
    bigImage: ImageType
    standardContainer3: StandardContainer
    caseFeatures: StandardContainer[]
    mediumTitle: string
    underlappedImage: ImageType
    overlappedImage: ImageType
    bigTitle3 : Link
    bigImage2: ImageType
    standardContainer4: StandardContainer
    solutionList: StandardContainer[]
    testimonial: TextSlider
    bottomSection: ContactContainer
}