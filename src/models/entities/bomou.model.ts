import ImageType from '../generic/image.model'
import ContactContainer from '../generic/contact.model'
import StandardCardContainer from '../generic/standardCardContainer.model'
import StandardContainer from '../generic/standardContainer.model'
import TextSlider from '../generic/textSlider.model'
import LinkType from '../generic/link.model'
import SeoContent from '../generic/seoContent.model'

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
    image1: ImageType
    image2: ImageType
    image3: ImageType
    image4: ImageType
    image5: ImageType
    imagesBottomTitle: string
    bannerImages: ImageType[]
    bigTitle4 : LinkType
    standardContainer5: StandardContainer
    standardContainer6: StandardContainer
    design: StandardContainer[]
    image6: ImageType
    textSlider: TextSlider
    contact: ContactContainer
}