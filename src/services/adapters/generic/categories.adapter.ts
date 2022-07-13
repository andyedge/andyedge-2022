import { Item } from '../../../models/generic/entry.model'
import Category from '../../../models/generic/category.model'

export const adaptCategories = (categories: Item[]): Category[] => {
    if(!categories || !categories.length) {
        return []
    }

    return categories.map((data: Item) => {
        const { fields } = data
        return {
            name: fields.name,
            color: fields.color
        }
    })
}