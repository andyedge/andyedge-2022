import { Item } from '../../../models/generic/entry.model'
import StepsContainer from '../../../models/generic/stepsContainer.model'
import { adaptImage } from './image.adapter'
import { adaptLink } from './link.adapter'

export const adaptStepsSection = (data: Item[]): StepsContainer[] => {
    if (data) {
        return data.map((item: Item) => {
            const { fields } = item
            return {
                title: fields.title,
                preTitle: fields.preTitle ? fields.preTitle : null,
                text: fields.stepText ? fields.stepText : null,
                image: fields.image ? adaptImage(fields.image) : {},
                link: adaptLink(fields.cta)
            }
        })
    } else {
        return []
    }
}