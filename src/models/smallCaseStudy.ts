import ImageType from './image.model'
import StandardCardContainer from './standardCardContainer.model'
import StandardContainer from './standardContainer.model'
import TextSlider from './textSlider.model'

export default interface SmallCaseStudy {
    slug: string
    hero: StandardContainer
    cards: StandardCardContainer[]
    banner: ImageType
    textSlider: TextSlider[]
}