import ImageType from './image.model'
import ContactContainer from './contact.model'
import StandardCardContainer from './standardCardContainer.model'
import StandardContainer from './standardContainer.model'
import TextSlider from './textSlider.model'
import Link from './link.model'

export default interface Bomou {
    hero: StandardContainer
    cards: StandardCardContainer[]
    subtitle1: string
    bigTitle1: Link
    standardContainer1: StandardContainer
    bigTitle2: Link
    standardContainer2: StandardContainer
    standardContainer3: StandardContainer
    consistencyItems: StandardContainer[]
    bigTitle3 : Link
    standardContainer4: StandardContainer
    imagesTitle: string
    image1: ImageType
    image2: ImageType
    image3: ImageType
    image4: ImageType
    image5: ImageType
    imagesBottomTitle: string
    bannerImages: ImageType[]
    bigTitle4 : Link
    standardContainer5: StandardContainer
    standardContainer6: StandardContainer
    design: StandardContainer[]
    image6: ImageType
    textSlider: TextSlider
    contact: ContactContainer
}