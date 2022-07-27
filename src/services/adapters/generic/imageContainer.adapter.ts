import { adaptImage } from './image.adapter'
import { Item } from '../../../models/generic/entry.model'
import ImageContainer from '../../../models/generic/imageContainer.model'

export const adaptImageContainer = (data: Item): ImageContainer => {
    const { fields } = data
    
    return {
        image: adaptImage(fields.image),
        darkImage: adaptImage(fields.darkImage)
    }
}

export const adaptImagesContainer = (images: Item[]): ImageContainer[] => {
    if (images) {
        return images.map((image: Item) => {
            return adaptImageContainer(image)
        })
    } else {
        return []
    }
}