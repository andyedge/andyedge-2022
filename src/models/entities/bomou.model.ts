import ContactContainer from '../generic/contact.model'
import StandardCardContainer from '../generic/standardCardContainer.model'
import StandardContainer from '../generic/standardContainer.model'
import TextSlider from '../generic/textSlider.model'
import LinkType from '../generic/link.model'
import SeoContent from '../generic/seoContent.model'
import ImageContainer from '../generic/imageContainer.model'
import PortfolioCaseStudy from '../generic/portfolioCaseStudy.model'

export default interface Bomou {
    seo: SeoContent
    hero: StandardContainer
    cards: StandardCardContainer[]
    cardsModalContainer: StandardCardContainer[]
    subtitle1: string
    bigTitle1: LinkType
    standardContainer1: StandardContainer
    bigTitle2: LinkType
    standardContainer2: StandardContainer
    standardContainer3: StandardContainer
    consistencyItems: StandardContainer[]
    bigTitle3 : LinkType
    standardContainer4: StandardContainer
    imagesTitle: string
    image1: ImageContainer
    image2: ImageContainer
    image3: ImageContainer
    image4: ImageContainer
    image5: ImageContainer
    imagesBottomTitle: string
    bannerImages: ImageContainer[]
    bigTitle4 : LinkType
    standardContainer5: StandardContainer
    standardContainer6: StandardContainer
    design: StandardContainer[]
    image6: ImageContainer
    textSlider: TextSlider
    contact: ContactContainer
    relatedCases: PortfolioCaseStudy[]
}