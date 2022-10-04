import { Item } from '../../../models/generic/entry.model'
import ImageType from '../../../models/generic/image.model'

export const adaptImage = (image: Item): ImageType => {
    if(!image) {
        return {
            url: '',
            title: '',
            description: ''
        }
    }

    const fields = image.fields || {}
    return {
        url: fields?.file?.url,
        title: fields?.title,
        description: fields?.description
    }
}

export const adaptImages = (images: Item[]): ImageType[] => {
    if (images) {
        return images.map((image: Item) => {
            return adaptImage(image)
        })
    } else {
        return []
    }
}