import ImageType from './image.model'
import StepsContainer from './stepsContainer.model'
import LinkType from './link.model'

export interface CaseStudyProperties {
    label: string
    icon?: ImageType
    value: string
}

export interface CaseStudyInfo {
    title: string
    description: string
    carousel: ImageType[]
    properties: CaseStudyProperties[]
    extendedText: string
    bulletPoints: StepsContainer[]
    primaryCta?: LinkType
    secondaryCta?: LinkType
    playStoreCta?: LinkType
    appStoreCta?: LinkType
}