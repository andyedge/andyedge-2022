import ImageType from './image.model'
import StandardCardContainer from './standardCardContainer.model'
import StandardContainer from './standardContainer.model'
import StepsContainer from './stepsContainer.model'
import TextSlider from './textSlider.model'
import Link from './link.model'

export interface CaseStudyProperties {
    label: string
    icon?: ImageType
    value: string
}

export interface StudyCaseInfo {
    title: string
    description: string
    carousel: ImageType[]
    properties: CaseStudyProperties[]
    extendedText: string
    bulletPoints: StepsContainer[]
    primaryCta?: Link
    secondaryCta?: Link
    playStoreCta?: Link
    appStoreCta?: Link
}

export default interface SmallCaseStudy {
    slug: string
    hero: StandardContainer
    cards: StandardCardContainer[]
    banner: ImageType
    caseStudyInfo: StudyCaseInfo
    textSlider: TextSlider
}