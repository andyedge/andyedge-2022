import { Item } from '../../../models/generic/entry.model'
import LinkType from '../../../models/generic/link.model'
import { adaptImage } from './image.adapter'

export const adaptLink = (data: Item): LinkType => {
    if(!data) {
        return {} as LinkType
    }

    const { fields } = data
    return {
        preText: fields.preText || '',
        text: fields.text || '',
        url: fields.url || '',
        action: fields.action || '',
        icon: adaptImage(fields.icon),
        sectionId: fields.sectionId || '',
        buttonColor: fields.buttonColor || ''
    }
}