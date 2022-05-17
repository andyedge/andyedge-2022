import StandardContainer from  './standardContainer.model'
import StepsContainer from './stepsContainer.model'

export default interface Whypage {
    name: string
    standardContainers: StandardContainer[]
    standardContainer1: StandardContainer
    title1: string
    stepsContainer: StepsContainer[]
    title2: string
    subtitle: string
    buttonText?: string
    buttonLink?: string
}