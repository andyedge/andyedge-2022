import { adaptHowItem } from './how.adapter'
import Entry from '../../../models/generic/entry.model'
import { Item } from '../../../models/generic/entry.model'
import Article from '../../../models/entities/article.model'
import { adaptStandardContainer } from '../generic/standardContainer.adapter'
import { adaptContactContainer } from '../generic/contactContainer.adapter'

export const adaptArticles = (data: Entry): Article[] => {
    if(!data.items.length) {
        return []
    }

    return data.items.map((article) => {
        const { fields } = article
        return {
            seo: adaptSeoContent(fields.seo),
            slug: fields.slug,
            heroContainer: adaptStandardContainer(fields.heroContainer),
            articleText: fields.articleText,
            contactContainer: adaptContactContainer(fields.contactContainer),
            relatedArticles: fields.relatedArticles ? fields.relatedArticles.map((data: Item) => adaptHowItem(data.fields.howData)) : []
        }
    })
}