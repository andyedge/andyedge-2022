import { Item } from '../../../models/generic/entry.model'
import Platform from '../../../models/generic/platform.model'
import { adaptImage } from './image.adapter'

export const adaptPlatform = ( data : Item) : Platform => {
    const { fields } = data

    return {
        name: fields.name || '',
        icon: adaptImage(fields.icon),
        key: fields.key || ''
    }
}