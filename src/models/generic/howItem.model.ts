import Image from './image.model'
import LinkType from './link.model'
import Category from './category.model'
import Platform from './platform.model'

export default interface HowItem {
    title: string
    description: string
    itemImage: Image
    platform?: Platform | null
    format: String
    date: string
    link: LinkType
    category?: Category | null
}