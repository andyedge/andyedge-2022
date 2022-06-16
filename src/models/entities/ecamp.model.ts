import ImageType from "../generic/image.model";
import ContactContainer from "../generic/contact.model"
import StandardCardContainer from "../generic/standardCardContainer.model";
import StandardContainer from "../generic/standardContainer.model";
import TextSlider from "../generic/textSlider.model";
import Link from "../generic/link.model";

declare interface Ecamp {
    hero: StandardContainer
    cardsContainer: StandardCardContainer[]
    cardsModalContainer: StandardCardContainer[]
    cardModal1: StandardCardContainer
    cardModal2: StandardCardContainer
    cardModal3: StandardCardContainer
    bigTitle1: Link
    standardContainer1: StandardContainer
    standardContainer2: StandardContainer
    standardContainer3: StandardContainer
    standardContainer4: StandardContainer
    standardContainer5: StandardContainer
    standardContainer6: StandardContainer
    standardContainer7: StandardContainer
    standardContainer8: StandardContainer
    standardContainer9: StandardContainer
    bigTitle2: Link
    pageImages: ImageType[]
    pageSubtitle: string
    pageText: string
    sliderImages: ImageType[]
    textSliderItems: TextSlider[]
    contactContainer: ContactContainer
}

export default Ecamp