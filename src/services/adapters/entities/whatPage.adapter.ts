import Entry from '../../../models/entry.model'
import Whatpage from '../../../models/whatpage.model'
import { adaptStandardContainer } from '../generic/standardContainer.adapter'
import { adaptImage, adaptImages } from '../generic/image.adapter'
import { adaptStepsSection } from '../generic/steps.adapter'
import { adaptContactContainer } from '../generic/contactContainer.adapter'

export const adaptWhatpage = (data: Entry): Whatpage => {
    const [whatPage] = data.items
    const { fields } = whatPage
    return {
        name: fields.name,
        hero: adaptStandardContainer(fields.heroContainer),
        stepsTitle: fields.stepsContainerTitle,
        stepsText: fields.stepsContainerText,
        stepsSection: adaptStepsSection(fields.stepsSection),
        standardContainer1: adaptStandardContainer(fields.standardContainer1),
        standardContainer2: adaptStandardContainer(fields.standardContainer2),
        standardContainer3: adaptStandardContainer(fields.standardContainer3),
        standardContainer4: adaptStandardContainer(fields.standardContainer4),
        solutionTitle: fields.solutionTitle,
        solutionText: fields.solutionText,
        solutionSubtitle: fields.solutionSubtitle,
        solutionSteps: adaptStepsSection(fields.solutionSteps),
        solutionImages: adaptImages(fields.solutionImages),
        solutionBackgroundImage1: adaptImage(fields.solutionBackgroundImage1),
        contactContainer: adaptContactContainer(fields.contactContainer)
    }
}