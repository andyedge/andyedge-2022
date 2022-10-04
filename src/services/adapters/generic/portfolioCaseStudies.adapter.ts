import { Item } from '../../../models/generic/entry.model'
import PortfolioCaseStudy from '../../../models/generic/portfolioCaseStudy.model'
import { adaptImage } from './image.adapter'
import { adaptCategories } from './categories.adapter'

export const adaptPortfolioCaseStudy = (data: Item): PortfolioCaseStudy => {
    if(!data) {
        return {} as PortfolioCaseStudy
    }

    const { fields } = data
    return {
        link: fields.link,
        title: fields.title,
        area: fields.area,
        year: fields.year,
        image: adaptImage(fields.image),
        categories: adaptCategories(fields.categories),
        updatedAt: data.sys.updatedAt
    }
}