import { CaseStudyInfo } from '../generic/caseStudies.model'
import ImageType from '../generic/image.model'
import StandardCardContainer from '../generic/standardCardContainer.model'
import StandardContainer from '../generic/standardContainer.model'
import TextSlider from '../generic/textSlider.model'

export default interface SmallCaseStudy {
    slug: string
    hero: StandardContainer
    cards: StandardCardContainer[]
    banner: ImageType
    caseStudyInfo: CaseStudyInfo
    textSlider: TextSlider
}