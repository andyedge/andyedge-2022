import Entry, { Item } from '../../../models/generic/entry.model'
import Whypage from '../../../models/entities/whypage.model'
import { adaptStandardContainer, adaptStandardContainers } from '../generic/standardContainer.adapter'
import { adaptStepsSection } from '../generic/steps.adapter'
import { adaptSeoContent } from '../generic/seoContent.adapter'
import { adaptLink } from '../generic/link.adapter'
import { adaptPortfolioCaseStudy } from '../generic/portfolioCaseStudies.adapter'

export const adaptWhypage = (data: Entry): Whypage => {
    const [whyPage] = data.items
    const { fields } = whyPage
    return {
        name: fields.name,
        seo: adaptSeoContent(fields.seo),
        standardContainers: adaptStandardContainers(fields.standardContainers),
        standardContainer1: adaptStandardContainer(fields.standardContainer1),
        title1: fields.title1,
        stepsContainer: adaptStepsSection(fields.stepsContainer),
        title2: fields.title2,
        subtitle: fields.subtitle,
        relatedCases: fields.relatedCases ? fields.relatedCases.map((data: Item) => adaptPortfolioCaseStudy(data.fields.portfolioData)) : [],
        cta: adaptLink(fields.cta)
    }
}
