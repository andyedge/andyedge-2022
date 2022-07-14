import Entry from '../../../models/generic/entry.model'
import MediumCaseStudy from '../../../models/entities/mediumCaseStudy.model'
import { adaptStandardContainer } from '../generic/standardContainer.adapter'
import { adaptImage } from '../generic/image.adapter'
import { adaptStandardCardContainers } from '../generic/cardContainer.adapter'
import { adaptTextSlider } from '../generic/textSlider.adapter'
import { adaptCaseStudyInfo } from '../generic/caseStudies.adapter'
import { adaptSeoContent } from '../generic/seoContent.adapter'

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
            cards: adaptStandardCardContainers(fields.cards),
            banner: adaptImage(fields.banner),
            caseStudyInfo: adaptCaseStudyInfo(fields.caseStudyInfo),
            testimonial: adaptTextSlider(fields.testimonial),
            cardInfo: adaptStandardContainer(fields.cardInfo),
            caseExplanation: adaptStandardContainer(fields.caseExplanation),
        }
    })
}