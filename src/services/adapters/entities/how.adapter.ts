import { sortBy } from 'lodash'
import { adaptLink } from '../generic/link.adapter'
import How from '../../../models/entities/how.model'
import { adaptImage } from '../generic/image.adapter'
import HowItem from '../../../models/generic/howItem.model'
import { adaptPlatform } from '../generic/platform.adapter'
import { adaptCategory } from '../generic/categories.adapter'
import { adaptSeoContent } from '../generic/seoContent.adapter'
import Entry, { Item } from '../../../models/generic/entry.model'
import { getUniqueValuesFromCollection } from '../../../helpers/functions'
import { adaptStandardContainer} from '../generic/standardContainer.adapter'
import { HOW_FILTERS, DATE_FILTER_OPTIONS } from '../../../constants/Constants'

export const adaptHowItem = (item: Item) : HowItem => {
    const { fields } = item 
    return {
        title: fields.title,
        description: fields.description,
        itemImage: adaptImage(fields.itemImage),
        platform: fields.platform ? adaptPlatform(fields.platform) : null,
        format: fields.format,
        date: fields.date,
        link: adaptLink(fields.link),
        category: fields.label ? adaptCategory(fields.label) : null
    }
}

export const adaptHowItems = (items: Item[]) : HowItem[] => {
    if(!items || !items.length) {
        return []
    }

    return items.map((data: Item) => {
        const { fields } = data
        return {
            title: fields.title,
            description: fields.description,
            itemImage: adaptImage(fields.itemImage),
            platform: fields.platform ? adaptPlatform(fields.platform) : null,
            format: fields.format,
            date: fields.date,
            link: adaptLink(fields.link),
            category: fields.label ? adaptCategory(fields.label) : null
        }
    })
}

declare interface adapterProps {
    data: Entry
}

export const adaptHow = ({ data }: adapterProps): How => {
    const [how] = data.items
    const { fields } = how
    
    const howItems = sortBy(adaptHowItems(fields.items), 'date').reverse()
    const filters = []

    filters[HOW_FILTERS.TOPIC] = {
        label: fields.filterTopicLabel,
        options: getUniqueValuesFromCollection(howItems, 'category')
    }

    filters[HOW_FILTERS.FORMAT] = {
        label: fields.filterFormatLabel,
        options: getUniqueValuesFromCollection(howItems, 'format')
    }

    filters[HOW_FILTERS.PLATFORM] = {
        label: fields.filterPlatformLabel,
        options: getUniqueValuesFromCollection(howItems, 'platform')
    }

    const dateFilterOptions = []
    dateFilterOptions[DATE_FILTER_OPTIONS.NEWEST] = fields.newestFilterText
    dateFilterOptions[DATE_FILTER_OPTIONS.OLDEST] = fields.oldestFilterText

    filters[HOW_FILTERS.DATE] = {
        label: fields.filterDateLabel,
        options: dateFilterOptions
    }

    return {
        seo: adaptSeoContent(fields.seo),
        hero: adaptStandardContainer(fields.hero),
        items: howItems,
        filters
    }
}