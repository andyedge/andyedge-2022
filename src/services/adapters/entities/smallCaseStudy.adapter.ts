import Entry from '../../../models/generic/entry.model'
import SmallCaseStudy from '../../../models/entities/smallCaseStudy.model'
import { adaptStandardContainer } from '../generic/standardContainer.adapter'
import { adaptImage } from '../generic/image.adapter'
import { adaptStandardCardContainers } from '../generic/cardContainer.adapter'
import { adaptTextSlider } from '../generic/textSlider.adapter'
import { adaptCaseStudyInfo } from '../generic/caseStudies.adapter'
import { adaptSeoContent } from '../generic/seoContent.adapter'

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
            cards: adaptStandardCardContainers(fields.cards),
            banner: adaptImage(fields.banner),
            caseStudyInfo: adaptCaseStudyInfo(fields.studyCaseInfo),
            testimonial: adaptTextSlider(fields.textSlider),
        }
    })
}