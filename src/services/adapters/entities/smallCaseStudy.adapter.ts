import Entry, { Item } from '../../../models/generic/entry.model'
import SmallCaseStudy from '../../../models/entities/smallCaseStudy.model'
import { CaseStudyInfo, CaseStudyProperties } from '../../../models/generic/caseStudies.model'
import { adaptStandardContainer } from '../generic/standardContainer.adapter'
import { adaptImage, adaptImages } from '../generic/image.adapter'
import { adaptStandardCardContainers } from '../generic/cardContainer.adapter'
import { adaptTextSlider } from '../generic/textSlider.adapter'
import { adaptStepsSection } from '../generic/steps.adapter'
import { adaptLink } from '../generic/link.adapter'

const adaptCaseStudyProperties = (data: Item[]): CaseStudyProperties[] => {
    if(!data.length) {
        return []
    }

    return data.map((caseStudyProperty) => {
        const { fields } = caseStudyProperty
        return {
            label: fields.label,
            icon: adaptImage(fields.icon),
            value: fields.value
        }
    })
}

const adaptCaseStudyInfo = (data: Item): CaseStudyInfo => {
    const { fields } = data
    return {
        title: fields.title,
        description: fields.description,
        carousel: adaptImages(fields.carousel),
        properties: adaptCaseStudyProperties(fields.properties),
        extendedText: fields.extendedText,
        bulletPoints: adaptStepsSection(fields.bulletPoints),
        primaryCta: adaptLink(fields?.primaryCta),
        secondaryCta: adaptLink(fields?.secondaryCta),
        playStoreCta: adaptLink(fields?.playStoreCta),
        appStoreCta: adaptLink(fields?.appStoreCta)
    }
}

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
            caseStudyInfo: adaptCaseStudyInfo(fields.studyCaseInfo),
            textSlider: adaptTextSlider(fields.textSlider),
        }
    })
}