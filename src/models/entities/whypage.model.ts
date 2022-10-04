import SeoContent from '../generic/seoContent.model'
import StandardContainer from  '../generic/standardContainer.model'
import StepsContainer from '../generic/stepsContainer.model'
import Link from '../generic/link.model'
import PortfolioCaseStudy from '../generic/portfolioCaseStudy.model'

export default interface Whypage {
    name: string
    seo: SeoContent
    standardContainers: StandardContainer[]
    standardContainer1: StandardContainer
    title1: string
    stepsContainer: StepsContainer[]
    title2: string
    subtitle: string
    relatedCases: PortfolioCaseStudy[]
    cta: Link
}