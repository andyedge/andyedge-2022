import Entry, { Item } from '../models/entry.model'
import Image from '../models/image.model'
import Whatpage from '../models/whatpage.model'
import StandardContainer from '../models/standardContainer.model'
import StepsContainer from '../models/stepsContainer.model'

const adapatImage = (image: Item): Image => {
    const fields = image.fields || {}
    return {
        url: fields?.file?.url,
        title: fields?.title,
        description: fields?.description
    }
}

const adaptStandardContainer = (data: Item): StandardContainer => {
    const { fields } = data
    return {
        title: fields.title,
        subtitle: fields.subtitle,
        logo: fields.logo ? adapatImage(fields.logo) : {},
        ctaText: fields.ctaText,
        ctaPageLink: fields.ctaPageLink,
        image: fields.image ? adapatImage(fields.image) : {},
        backgroundImage: fields.backgroundImage ? adapatImage(fields.backgroundImage) : {},
        mediaPosition: fields.mediaPosition
    }
}

const adapatStepsSection = (data: Item[]): StepsContainer[] => {
    return data.map((item: Item) => {
        const { fields } = item
        return {
            title: fields.title,
            preTitle: fields.pretitle,
            text: fields.stepText,
            image: adapatImage(fields.image),
        }
    })
}

export const adaptWhatpage = (data: Entry): Whatpage => {
    const [whatPage] = data.items
    const { fields } = whatPage
    return {
        name: fields.name,
        hero: adaptStandardContainer(fields.heroContainer),
        stepsTitle: fields.stepsContainerTitle,
        stepsText: fields.stepsContainerText,
        stepsSection: adapatStepsSection(fields.stepsSection),
        standardContainer1: adaptStandardContainer(fields.standardContainer1),
    }
}