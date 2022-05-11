import StandardContainer from  './standardContainer.model'
import StepsContainer from './stepsContainer.model'

export default interface Whatpage {
    name: string
    hero: StandardContainer
    stepsTitle: string
    stepsText: string
    stepsSection: StepsContainer[]
    standardContainer1: StandardContainer
    standardContainer2: StandardContainer
    standardContainer3: StandardContainer
    standardContainer4: StandardContainer
}