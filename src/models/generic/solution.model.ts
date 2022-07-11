import ImageType from './image.model'
import LinkType from './link.model'
import StepsContainer from './stepsContainer.model'

export default interface Solution {
    solutionTitle: string
    solutionText: string
    solutionSubtitle: string
    solutionSteps: StepsContainer[]
    solutionImages: ImageType[]
    solutionBackgroundImage: ImageType
    solutionCta: LinkType
}