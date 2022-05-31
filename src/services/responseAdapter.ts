import Entry, { Item } from '../models/entry.model'
import ImageType from '../models/image.model'
import Whatpage from '../models/whatpage.model'
import Whypage from '../models/whypage.model'
import StandardContainer from '../models/standardContainer.model'
import StepsContainer from '../models/stepsContainer.model'
import ContactContainer from '../models/contact.model'
import StandardCardContainer from '../models/standardCardContainer.model'
import TextSlider from '../models/textSlider.model'
import Ecamp from '../models/ecamp.model'

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

const adaptStandardContainers = (dataArray: Item[]): StandardContainer[] => {
    if (dataArray && dataArray.length > 0) {
        return dataArray.map((data: Item) => {
            return adaptStandardContainer(data)
        })
    } else {
        return []
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

const adaptStandardCardContainer = (data: Item): StandardCardContainer => {
    const { fields } = data

    return {
        icon: fields.icon ? adaptImage(fields.icon) : {},
        title: fields.title,
        subtitle: fields.subtitle ? fields.subtitle : null,
        text: fields.text ? fields.text : null,
        leftCtaText: fields.leftCtaText ? fields.leftCtaText : null,
        leftCtaLink: fields.leftCtaLink ? fields.leftCtaLink : null,
        rightCtaText: fields.rightCtaText ? fields.rightCtaText : null,
        rightCtaLink: fields.rightCtaLink ? fields.rightCtaLink : null
    }
}

const adaptStandardCardContainers = (dataArray: Item[]): StandardCardContainer[] => {
    if (dataArray && dataArray.length > 0) {
        return dataArray.map((data: Item) => {
            return adaptStandardCardContainer(data)
        })
    } else {
        return []
    }
}

const adaptTextSlider = (data: Item): TextSlider => {
    const { fields } = data

    return {
        image: fields.image ? adaptImage(fields.image) : {},
        text: fields.text,
        smallText1: fields.smallText1,
        smallText2: fields.smallText2
    }
}

const adaptTextSliders = (dataArray: Item[]): TextSlider[] => {
    if (dataArray && dataArray.length > 0) {
        return dataArray.map((data: Item) => {
            return adaptTextSlider(data)
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

export const adaptEcamppage = (data: Entry): Ecamp => {
    const [ecamp] = data.items
    const { fields } = ecamp
    return {
        hero: adaptStandardContainer(fields.heroContainer),
        cardsContainer: adaptStandardCardContainers(fields.cardsContainer),
        cardModal1: adaptStandardCardContainer(fields.cardModal1),
        cardModal2: adaptStandardCardContainer(fields.cardModal2),
        cardModal3: adaptStandardCardContainer(fields.cardModal3),
        bigTitle1: fields.bigTitle1,
        standardContainer1: adaptStandardContainer(fields.standardContainer1),
        standardContainer2: adaptStandardContainer(fields.standardContainer2),
        standardContainer3: adaptStandardContainer(fields.standardContainer3),
        standardContainer4: adaptStandardContainer(fields.standardContainer4),
        standardContainer5: adaptStandardContainer(fields.standardContainer5),
        standardContainer6: adaptStandardContainer(fields.standardContainer6),
        standardContainer7: adaptStandardContainer(fields.standardContainer7),
        standardContainer8: adaptStandardContainer(fields.standardContainer8),
        standardContainer9: adaptStandardContainer(fields.standardContainer9),
        bigTitle2: fields.bigTitle2,
        pageImages: adaptImages(fields.pageImages),
        pageSubtitle: fields.pageSubtitle,
        pageText: fields.pageText,
        sliderImages: adaptImages(fields.sliderImages),
        contactContainer: adaptContactContainer(fields.contactContainer)
    }
}