import { Item } from '../../../models/generic/entry.model'
import Category from '../../../models/generic/category.model'

export const adaptCategory =(data: Item) : Category => {
    const { fields } = data
    return {
        name: fields.name,
        color: fields.color
    }
}

export const adaptCategories = (categories: Item[] ) : Category[] => {
    if(!categories || !categories.length) {
        return []
    }

    return categories.map((data: Item) => adaptCategory(data))
}