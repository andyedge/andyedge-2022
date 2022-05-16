import Entry, { Item } from '../models/entry.model'
import ImageType from '../models/image.model'
import Whatpage from '../models/whatpage.model'
import StandardContainer from '../models/standardContainer.model'
import StepsContainer from '../models/stepsContainer.model'
import ContactContainer from '../models/contact.model'

const adaptImage = (image: Item): ImageType => {
    const fields = image.fields || {}
    return {
        url: fields?.file?.url,
        title: fields?.title,
        description: fields?.description
    }
}

const adaptImages = (images: Item[]): ImageType[] => {
    if (images) {
        return images.map((image: Item) => {
            return adaptImage(image)
        })
    } else {
        return []
    }
}

const adaptStandardContainer = (data: Item): StandardContainer => {
    const { fields } = data

    return {
        preTitle: fields.preTitle ? fields.preTitle : null,
        title: fields.title,
        subtitle: fields.subtitle ? fields.subtitle : null,
        bulletsContainer: adaptStepsSection(fields.bulletsContainer),
        logo: fields.logo ? adaptImage(fields.logo) : {},
        text: fields.text ? fields.text : null,
        ctaText: fields.ctaText ? fields.ctaText : null,
        ctaPageLink: fields.ctaPageLink ? fields.ctaPageLink : null,
        ctaVideoLink: fields.ctaVideoLink ? fields.ctaVideoLink : null,
        images: adaptImages(fields.images),
        backgroundImage: fields.backgroundImage ? adaptImage(fields.backgroundImage) : {},
        videoUrl: fields.videoUrl ? fields.videoUrl : null,
        mediaPosition: fields.mediaPosition ? fields.mediaPosition : null
    }
}

const adaptContactContainer = (data: Item): ContactContainer => {
    const { fields } = data

    return {
        preTitle: fields.preTitle ? fields.preTitle : null,
        title: fields.title,
        text: fields.text ? fields.text : null,
        contactImage: fields.contactImage ? adaptImage(fields.contactImage) : {},        
        contactVideoUrl: fields.contactVideoUrl ? fields.contactVideoUrl : null,
        ctaText: fields.ctaText ? fields.ctaText : null,
        ctaPageLink: fields.ctaPageLink ? fields.ctaPageLink : null,
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
                image: fields.image ? adaptImage(fields.image) : {},
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