import StandardContainer from '../generic/standardContainer.model'
import SmallCaseStudy from './smallCaseStudy.model'

export default interface MediumCaseStudy extends SmallCaseStudy {
    cardInfo: StandardContainer
    caseExplanation: StandardContainer
}