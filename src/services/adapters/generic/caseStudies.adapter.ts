import { Item } from '../../../models/generic/entry.model'
import { CaseStudyInfo, CaseStudyProperties } from '../../../models/generic/caseStudies.model'
import { adaptImage, adaptImages } from './image.adapter'
import { adaptStepsSection } from './steps.adapter'
import { adaptLink } from './link.adapter'
import { adaptCategories } from './categories.adapter'
import LinkType from '../../../models/generic/link.model'

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

declare interface AdapterProps {
    data: Item
    categories: Item[]
}

export const adaptCaseStudyInfo = ({ data, categories } : AdapterProps ): CaseStudyInfo => {
    if(!data) {
        return {
            title: '',
            description: '',
            carousel: [],
            properties: [],
            extendedText: '',
            bulletPoints: [],
            primaryCta: {} as LinkType,
            secondaryCta: {} as LinkType,
            playStoreCta: {} as LinkType,
            appStoreCta: {} as LinkType,
            categories: []
        }
    }

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
        appStoreCta: adaptLink(fields?.appStoreCta),
        categories: adaptCategories(categories)
    }
}