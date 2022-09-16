import Entry, { Item } from '../../../models/generic/entry.model'
import { adaptTextSlider } from '../generic/textSlider.adapter'
import { adaptSeoContent } from '../generic/seoContent.adapter'
import { adaptCaseStudyInfo } from '../generic/caseStudies.adapter'
import { adaptImagesContainer } from '../generic/imageContainer.adapter'
import MediumCaseStudy from '../../../models/entities/mediumCaseStudy.model'
import { adaptStandardContainer } from '../generic/standardContainer.adapter'
import { adaptStandardCardContainers } from '../generic/cardContainer.adapter'
import { adaptPortfolioCaseStudy } from '../generic/portfolioCaseStudies.adapter'
import { adaptLink } from '../generic/link.adapter'

export const adaptMediumCaseStudies = (data: Entry): MediumCaseStudy[] => {
    if(!data.items.length) {
        return []
    }

    return data.items.map((mediumCaseStudy) => {
        const { fields } = mediumCaseStudy

        return {
            slug: fields.slug,
            seo: adaptSeoContent(fields.seo),
            hero: adaptStandardContainer(fields.hero),
            templateDesign: fields.templateDesign,
            cards: adaptStandardCardContainers(fields.cards),
            banner: adaptImagesContainer(fields.bannerImages),
            caseStudyInfo: adaptCaseStudyInfo({
                data: fields.caseStudyInfo,
                categories: fields.portfolioData?.fields?.categories
            }),
            testimonial: adaptTextSlider(fields.testimonial),
            nextCase: adaptLink(fields.nextCase),
            cardInfo: adaptStandardContainer(fields.cardInfo),
            caseExplanation: adaptStandardContainer(fields.caseExplanation),
            relatedCases: fields.relatedCases ? fields.relatedCases.map((data: Item) => adaptPortfolioCaseStudy(data.fields.portfolioData)) : []
        }
    })
}