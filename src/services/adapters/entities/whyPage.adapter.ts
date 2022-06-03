import Entry from '../../../models/entry.model'
import Whypage from '../../../models/whypage.model'
import { adaptStandardContainer, adaptStandardContainers } from '../generic/standardContainer.adapter'
import { adaptStepsSection } from '../generic/steps.adapter'

export const adaptWhypage = (data: Entry): Whypage => {
    const [whyPage] = data.items
    const { fields } = whyPage
    return {
        name: fields.name,
        standardContainers: adaptStandardContainers(fields.standardContainers),
        standardContainer1: adaptStandardContainer(fields.standardContainer1),
        title1: fields.title1,
        stepsContainer: adaptStepsSection(fields.stepsContainer),
        title2: fields.title2,
        subtitle: fields.subtitle,
        buttonText: fields.buttonText ? fields.buttonText : null,
        buttonLink: fields.buttonLink ? fields.buttonLink : null
    }
}
