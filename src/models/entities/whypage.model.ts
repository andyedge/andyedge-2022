import SeoContent from '../generic/seoContent.model'
import StandardContainer from  '../generic/standardContainer.model'
import StepsContainer from '../generic/stepsContainer.model'

export default interface Whypage {
    name: string
    seo: SeoContent
    standardContainers: StandardContainer[]
    standardContainer1: StandardContainer
    title1: string
    stepsContainer: StepsContainer[]
    title2: string
    subtitle: string
    buttonText?: string
    buttonLink?: string
}