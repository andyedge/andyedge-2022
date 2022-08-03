import Entry, { Item } from '../../../models/generic/entry.model'
import How from '../../../models/entities/how.model'
import { adaptStandardContainer} from '../generic/standardContainer.adapter'
import { adaptSeoContent } from '../generic/seoContent.adapter'
import HowItem from '../../../models/generic/howItem.model'
import { adaptPlatform } from '../generic/platform.adapter'
import { adaptLink } from '../generic/link.adapter'
import { adaptCategory, adaptCategories } from '../generic/categories.adapter'
import { getUniqueValuesFromCollection } from '../../../helpers/helpers'

const adaptHowItems = (items: Item[]) : HowItem[] => {
    if(!items || !items.length) {
        return []
    }

    return items.map((data: Item) => {
        const { fields } = data
        return {
            title: fields.title,
            description: fields.description,
            platform: adaptPlatform(fields.platform),
            format: fields.format,
            date: fields.date,
            link: adaptLink(fields.link),
            category: adaptCategory(fields.label)
        }
    })
}

declare interface adapterProps {
    data: Entry,
    categories: Entry,
    platforms: Entry
}

export const adaptHow = ({ data, categories, platforms }: adapterProps): How => {
    const [how] = data.items
    const { fields } = how
    
    const howItems = adaptHowItems(fields.items)
    const platformsAdapted = platforms.items.map((platform: Item) => adaptPlatform(platform))

    return {
        seo: adaptSeoContent(fields.seo),
        hero: adaptStandardContainer(fields.hero),
        items: howItems,
        filters: [{
            label: fields.filterTopicLabel,
            options: adaptCategories(categories.items).map(category => category.name)
        }, {
            label: fields.filterFormatLabel,
            options: getUniqueValuesFromCollection(howItems, 'format')
        }, {
            label: fields.filterPlatformLabel,
            options: platformsAdapted.map((platform) => platform.name)
        }, {
            label: fields.filterDateLabel,
            options: [fields.newestFilterText, fields.oldestFilterText]
        }]
    }
}