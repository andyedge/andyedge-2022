import SeoContent from '../generic/seoContent.model'
import StandardContainer from '../generic/standardContainer.model'
import HowItem from '../generic/howItem.model'

export interface Filter {
    label: string
    options: string[]
}

export default interface How {
    seo: SeoContent
    hero: StandardContainer
    items: HowItem[]
    filters: Filter[]
}