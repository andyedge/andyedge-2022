import Entry, { Item } from '../../../models/generic/entry.model'
import SmallCaseStudy from '../../../models/entities/smallCaseStudy.model'
import { adaptStandardContainer } from '../generic/standardContainer.adapter'
import { adaptStandardCardContainers } from '../generic/cardContainer.adapter'
import { adaptTextSliders } from '../generic/textSlider.adapter'
import { adaptCaseStudyInfo } from '../generic/caseStudies.adapter'
import { adaptSeoContent } from '../generic/seoContent.adapter'
import { adaptImagesContainer } from '../generic/imageContainer.adapter'
import { adaptPortfolioCaseStudy } from '../generic/portfolioCaseStudies.adapter'

export const adaptSmallCaseStudies = (data: Entry): SmallCaseStudy[] => {
    if(!data.items.length) {
        return []
    }

    return data.items.map((smallCaseStudy) => {
        const { fields } = smallCaseStudy

        return {
            slug: fields.slug,
            seo: adaptSeoContent(fields.seo),
            hero: adaptStandardContainer(fields.hero),
            templateDesign: fields.templateDesign,
            cards: adaptStandardCardContainers(fields.cards),
            banner: adaptImagesContainer(fields.bannerImages),
            caseStudyInfo: adaptCaseStudyInfo({
                data: fields.studyCaseInfo,
                categories: fields.portfolioData?.fields?.categories
            }),
            testimonial: adaptTextSliders(fields.testimonials),
            relatedCases: fields.relatedCases ? fields.relatedCases.map((data: Item) => adaptPortfolioCaseStudy(data.fields.portfolioData)) : []
        }
    })
}