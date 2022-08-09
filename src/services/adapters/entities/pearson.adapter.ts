import Entry, { Item } from '../../../models/generic/entry.model'
import Pearson from '../../../models/entities/pearson.model'
import { adaptStandardContainer, adaptStandardContainers } from '../generic/standardContainer.adapter'
import { adaptStandardCardContainers } from '../generic/cardContainer.adapter'
import { adaptImage } from '../generic/image.adapter'
import { adaptTextSlider } from '../generic/textSlider.adapter'
import { adaptLink } from '../generic/link.adapter'
import { adaptContactContainer } from '../generic/contactContainer.adapter'
import { adaptSeoContent } from '../generic/seoContent.adapter'
import { adaptPortfolioCaseStudy } from '../generic/portfolioCaseStudies.adapter'

export const adaptPearson = (data: Entry): Pearson => {
    const [pearson] = data.items
    const { fields } = pearson
    return {
        seo: adaptSeoContent(fields.seo),
        hero: adaptStandardContainer(fields.hero),
        cards: adaptStandardCardContainers(fields.cards),
        standardContainer1: adaptStandardContainer(fields.standardContainer1),
        bigTitle1: adaptLink(fields.bigTitle1),
        standardContainer2: adaptStandardContainer(fields.standardContainer2),
        bigTitle2: adaptLink(fields.bigTitle2),
        bigImage: adaptImage(fields.bigImage),
        standardContainer3: adaptStandardContainer(fields.standardContainer3),
        caseFeatures: adaptStandardContainers(fields.caseFeatures),
        mediumTitle: fields.mediumTitle,
        underlappedImage: adaptImage(fields.underlappedImage),
        overlappedImage: adaptImage(fields.overlappedImage),
        bigTitle3 : adaptLink(fields.bigTitle3),
        bigImage2:  adaptImage(fields.bigImage2),
        standardContainer4: adaptStandardContainer(fields.standardContainer4),
        solutionList: adaptStandardContainers(fields.solutionList),
        testimonial: adaptTextSlider(fields.testimonial),
        bottomSection: adaptContactContainer(fields.bottomSection),
        relatedCases: fields.relatedCases ? fields.relatedCases.map((data: Item) => adaptPortfolioCaseStudy(data.fields.portfolioData)) : []
    }
}