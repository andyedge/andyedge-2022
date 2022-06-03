import { Item } from '../../../models/entry.model'
import TextSlider from '../../../models/textSlider.model'
import { adaptImage } from './image.adapter'

export const adaptTextSlider = (data: Item): TextSlider => {
    const { fields } = data

    return {
        image: fields.image ? adaptImage(fields.image) : {},
        text: fields.text,
        smallText1: fields.smallText1,
        smallText2: fields.smallText2
    }
}

export const adaptTextSliders = (dataArray: Item[]): TextSlider[] => {
    if (dataArray && dataArray.length > 0) {
        return dataArray.map((data: Item) => {
            return adaptTextSlider(data)
        })
    } else {
        return []
    }
}