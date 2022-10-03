import { Item } from '../../../models/generic/entry.model'
import ContactContainer from '../../../models/generic/contact.model'
import { adaptImage } from './image.adapter'

export const adaptContactContainer = (data: Item): ContactContainer => {
    if(!data) {
        return {} as ContactContainer
    }

    const { fields } = data

    return {
        preTitle: fields.preTitle ? fields.preTitle : null,
        title: fields.title,
        text: fields.text ? fields.text : null,
        contactImage: fields.contactImage ? adaptImage(fields.contactImage) : {},        
        contactVideoUrl: fields.contactVideoUrl ? fields.contactVideoUrl : null,
        inputPlaceholder: fields.inputPlaceholder || null,
        inputBottomText: fields.inputBottomText || null,
        ctaText: fields.ctaText ? fields.ctaText : null,
        ctaPageLink: fields.ctaPageLink ? fields.ctaPageLink : null,
    }
}