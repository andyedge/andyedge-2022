import { Item } from '../../../models/generic/entry.model'
import StandardContainer from '../../../models/generic/standardContainer.model'
import { adaptImageContainer, adaptImagesContainer } from './imageContainer.adapter'
import { adaptLink } from './link.adapter'
import { adaptStepsSection } from './steps.adapter'

export const adaptStandardContainer = (data: Item): StandardContainer => {
    if(!data) {
        return {} as StandardContainer
    }

    const { fields } = data

    return {
        preTitle: fields.preTitle ? fields.preTitle : null,
        title: fields.title,
        strikeThroughTitle: fields.strikethroughTitle || null,
        complementTitle: fields.titleComplement || null,
        subtitle: fields.subtitle ? fields.subtitle : null,
        bulletsContainer: adaptStepsSection(fields.bulletsContainer),
        logoC: adaptImageContainer(fields.logoC),
        primaryButtonCta: adaptLink(fields.primaryButtonCta),
        secondaryButtonCta: adaptLink(fields.secondaryButtonCta),
        text: fields.text ? fields.text : null,
        imagesContainer: adaptImagesContainer(fields.imagesContainer),
        backgroundImage: adaptImageContainer(fields.backgroundImageC),
        videoUrl: fields.videoUrl ? fields.videoUrl : null,
        mediaPosition: fields.mediaPosition ? fields.mediaPosition : null
    }
}

export const adaptStandardContainers = (dataArray: Item[]): StandardContainer[] => {
    if (dataArray && dataArray.length > 0) {
        return dataArray.map((data: Item) => {
            return adaptStandardContainer(data)
        })
    } else {
        return []
    }    
}