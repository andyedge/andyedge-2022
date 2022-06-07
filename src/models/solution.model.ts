import ImageType from './image.model'
import Link from './link.model'
import StepsContainer from './stepsContainer.model'

export default interface Solution {
    solutionTitle: string
    solutionText: string
    solutionSubtitle: string
    solutionSteps: StepsContainer[]
    solutionImages: ImageType[]
    solutionBackgroundImage: ImageType
    solutionCta: Link
}