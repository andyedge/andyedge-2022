import { Item } from '../../../models/entry.model'
import Link from '../../../models/link.model'

export const adaptLink = (data: Item): Link => {
    const { fields } = data

    return {
        text: fields.text,
        url: fields.url,
        newTab: fields.opensInANewTab
    }
}