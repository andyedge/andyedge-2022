import { Item } from '../../../models/generic/entry.model'
import { CaseStudyInfo, CaseStudyProperties } from '../../../models/generic/caseStudies.model'
import { adaptImage, adaptImages } from './image.adapter'
import { adaptStepsSection } from './steps.adapter'
import { adaptLink } from './link.adapter'

export const adaptCaseStudyProperties = (data: Item[]): CaseStudyProperties[] => {
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

export const adaptCaseStudyInfo = (data: Item): CaseStudyInfo => {
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