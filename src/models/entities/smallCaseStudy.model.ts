import SeoContent from '../generic/seoContent.model'
import TextSlider from '../generic/textSlider.model'
import { CaseStudyInfo } from '../generic/caseStudies.model'
import ImageContainer from '../generic/imageContainer.model'
import StandardContainer from '../generic/standardContainer.model'
import StandardCardContainer from '../generic/standardCardContainer.model'

export default interface SmallCaseStudy {
    slug: string
    seo: SeoContent
    hero: StandardContainer
    cards: StandardCardContainer[]
    banner: ImageContainer
    caseStudyInfo: CaseStudyInfo
    testimonial: TextSlider
}