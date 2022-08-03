import Category from './category.model'
import LinkType from './link.model'
import Platform from './platform.model'

export default interface HowItem {
    title: string
    description: string
    platform: Platform
    format: String
    date: Date
    link: LinkType
    category: Category
}