import Image from './image.model'
import Category from './category.model'

export default interface PortfolioCaseStudy {
    link: string
    title: string
    area: string
    year: string
    image: Image
    categories: Category[]
    updatedAt: string
}