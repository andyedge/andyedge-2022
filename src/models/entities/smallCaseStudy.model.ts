import SeoContent from '../generic/seoContent.model'
import TextSlider from '../generic/textSlider.model'
import { CaseStudyInfo } from '../generic/caseStudies.model'
import ImageContainer from '../generic/imageContainer.model'
import StandardContainer from '../generic/standardContainer.model'
import StandardCardContainer from '../generic/standardCardContainer.model'
import PortfolioCaseStudy from '../generic/portfolioCaseStudy.model'
import LinkType from '../generic/link.model'

export default interface SmallCaseStudy {
    slug: string
    seo: SeoContent
    hero: StandardContainer
    templateDesign: string,
    cards: StandardCardContainer[]
    banner: ImageContainer[]
    caseStudyInfo: CaseStudyInfo
    testimonial: TextSlider
    nextCase: LinkType
    relatedCases: PortfolioCaseStudy[]
}