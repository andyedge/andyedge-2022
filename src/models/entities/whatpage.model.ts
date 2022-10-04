import ContactContainer from '../generic/contact.model'
import StandardContainer from  '../generic/standardContainer.model'
import StepsContainer from '../generic/stepsContainer.model'
import Solution from '../generic/solution.model'
import SeoContent from '../generic/seoContent.model'

export default interface Whatpage {    
    name: string
    seoContent: SeoContent
    hero: StandardContainer
    stepsTitle: string
    stepsText: string
    stepsSection: StepsContainer[]
    standardContainer1: StandardContainer
    standardContainer2: StandardContainer
    standardContainer3: StandardContainer
    standardContainer4: StandardContainer
    solution: Solution
    contactContainer: ContactContainer
}