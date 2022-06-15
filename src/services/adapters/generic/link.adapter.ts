import { Item } from '../../../models/entry.model'
import Link from '../../../models/link.model'

export const adaptLink = (data: Item): Link => {
    if(!data) {
        return {} as Link
    }

    const { fields } = data
    return {
        preText: fields.preText || '',
        text: fields.text || '',
        url: fields.url || '',
        newTab: fields.opensInANewTab
    }
}