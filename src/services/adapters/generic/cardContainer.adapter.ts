import { Item } from '../../../models/generic/entry.model'
import StandardCardContainer from '../../../models/generic/standardCardContainer.model'
import { adaptImage } from './image.adapter'

export const adaptStandardCardContainer = (data: Item): StandardCardContainer => {
    const { fields } = data

    return {
        icon: fields.icon ? adaptImage(fields.icon) : {},
        title: fields.title,
        subtitle: fields.subtitle ? fields.subtitle : null,
        text: fields.text ? fields.text : null,
        modalText: fields.modalText ? fields.modalText : null,
        leftCtaText: fields.leftCtaText ? fields.leftCtaText : null,
        leftCtaLink: fields.leftCtaLink ? fields.leftCtaLink : null,
        rightCtaText: fields.rightCtaText ? fields.rightCtaText : null,
        rightCtaLink: fields.rightCtaLink ? fields.rightCtaLink : null
    }
}

export const adaptStandardCardContainers = (dataArray: Item[]): StandardCardContainer[] => {
    if (dataArray && dataArray.length > 0) {
        return dataArray.map((data: Item) => {
            return adaptStandardCardContainer(data)
        })
    } else {
        return []
    }
}