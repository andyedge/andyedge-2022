import Entry from '../../../models/entry.model'
import SmallCaseStudy from '../../../models/smallCaseStudy'
import { adaptStandardContainer } from '../generic/standardContainer.adapter'
import { adaptImage } from '../generic/image.adapter'
import { adaptStandardCardContainers } from '../generic/cardContainer.adapter'
import { adaptTextSliders } from '../generic/textSlider.adapter'

export const adaptSmallCaseStudies = (data: Entry): SmallCaseStudy[] => {
    if(!data.items.length) {
        return []
    }

    return data.items.map((smallCaseStudy) => {
        const { fields } = smallCaseStudy
        return {
            slug: fields.slug,
            hero: adaptStandardContainer(fields.hero),
            cards: adaptStandardCardContainers(fields.cards),
            banner: adaptImage(fields.banner),
            textSlider: adaptTextSliders(fields.textSlider),
        }
    })
}