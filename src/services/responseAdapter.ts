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
        preTitle: fields.preTitle ? fields.preTitle : null,
        title: fields.title,
        subtitle: fields.subtitle ? fields.subtitle : null,
        bulletsContainer: adaptStepsSection(fields.bulletsContainer),
        logo: fields.logo ? adapatImage(fields.logo) : {},
        text: fields.text ? fields.text : null,
        ctaText: fields.ctaText ? fields.ctaText : null,
        ctaPageLink: fields.ctaPageLink ? fields.ctaPageLink : null,
        ctaVideoLink: fields.ctaVideoLink ? fields.ctaVideoLink : null,
        image: fields.image ? adapatImage(fields.image) : {},
        backgroundImage: fields.backgroundImage ? adapatImage(fields.backgroundImage) : {},
        videoUrl: fields.videoUrl ? fields.videoUrl : null,
        mediaPosition: fields.mediaPosition ? fields.mediaPosition : null
    }
}

const adaptStepsSection = (data: Item[]): StepsContainer[] => {
    if (data) {
        return data.map((item: Item) => {
            const { fields } = item
            return {
                title: fields.title,
                preTitle: fields.preTitle ? fields.preTitle : null,
                text: fields.stepText ? fields.stepText : null,
                image: fields.image ? adapatImage(fields.image) : {},
            }
        })
    } else {
        return []
    }  
}

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
        standardContainer4: adaptStandardContainer(fields.standardContainer4)
    }
}