import Category from './category.model'
import LinkType from './link.model'
import Platform from './platform.model'

export default interface HowItem {
    title: string
    description: string
    platform?: Platform | null
    format: String
    date: string
    link: LinkType
    category?: Category | null
}