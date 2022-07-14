import { adaptLink } from '../generic/link.adapter'
import { adaptImages } from '../generic/image.adapter'
import { adaptCategories } from '../generic/categories.adapter'
import { Item } from '../../../models/generic/entry.model'
import Entry from '../../../models/generic/entry.model'
import Portfolio from '../../../models/entities/portfolio.model'
import { adaptPortfolioCaseStudy } from '../generic/portfolioCaseStudies.adapter'
import PortfolioCaseStudy from '../../../models/generic/portfolioCaseStudy.model'
import { adaptSeoContent } from '../generic/seoContent.adapter'

declare interface adapterProps {
    data: Entry,
    caseStudies: any,
    categories: Entry
}

export const adaptPortfolio = ( {data, caseStudies, categories } : adapterProps) : Portfolio => {
    const [portfolio] = data.items
    const { fields } = portfolio
    
    let portfolioCaseStudies: PortfolioCaseStudy[] = []
    caseStudies.forEach((caseStudy: Item) => {
        const portfolioData = caseStudy.fields?.portfolioData
        if(portfolioData) {
            portfolioCaseStudies = [...portfolioCaseStudies, adaptPortfolioCaseStudy(portfolioData)]
        }
    })

    return {
        seo: adaptSeoContent(fields.seo),
        title: fields.title,
        subtitle: fields.subtitle,
        featuredCaseTitle: fields.featuredCaseTitle,
        featuredCaseCategories: adaptCategories(fields.featuredCaseStudyCategories),
        featuredCaseText: fields.featuredCaseText,
        featuredCaseStudyButton: adaptLink(fields.featuredCaseStudyButton),
        featuredCaseImages: adaptImages(fields.featuredCaseImages),
        portfolioTitle: fields.portfolioTitle,
        portfolioDescription: fields.portfolioDescription,
        allText: fields.all,
        caseStudies: portfolioCaseStudies,
        categories: adaptCategories(categories.items)
    }
}