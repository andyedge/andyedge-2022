import Image from '../generic/image.model'
import Category from '../generic/category.model'
import Link from '../generic/link.model'
import PortfolioCaseStudy from '../generic/portfolioCaseStudy.model'
import SeoContent from '../generic/seoContent.model'

export default interface Portfolio {
    seo: SeoContent
    title: string
    subtitle: string
    featuredCaseTitle: string
    featuredCaseCategories: Category[]
    featuredCaseText: string
    featuredCaseImages: Image[]
    featuredCaseStudyButton: Link
    portfolioTitle: string
    portfolioDescription: string
    allText: string
    categories: Category[]
    caseStudies: PortfolioCaseStudy[]
}