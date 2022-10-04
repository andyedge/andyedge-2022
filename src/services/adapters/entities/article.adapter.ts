import Entry from '../../../models/generic/entry.model'
import Article from '../../../models/entities/article.model'
import { adaptStandardContainer } from '../generic/standardContainer.adapter'
import { adaptImage, adaptImages } from '../generic/image.adapter'
import { adaptContactContainer } from '../generic/contactContainer.adapter'
import { adaptImageContainer } from '../generic/imageContainer.adapter'

export const adaptArticles = (data: Entry): Article[] => {
    if(!data.items.length) {
        return []
    }

    return data.items.map((article) => {
        const { fields } = article
        return {
            slug: fields.slug,
            heroContainer: adaptStandardContainer(fields.heroContainer),
            standardContainer1: adaptStandardContainer(fields.standardContainer1),
            standardContainer2: adaptStandardContainer(fields.standardContainer2),
            // mediaCarousel: adaptImages(fields.mediaCarousel.media),
            mediaCarousel: [],
            articleText: fields.articleText,
            pageImage1: adaptImageContainer(fields.pageImage1),
            pageImage2: adaptImageContainer(fields.pageImage2),
            pageImage3: adaptImageContainer(fields.pageImage3),
            contactContainer: adaptContactContainer(fields.contactContainer)
        }
    })
}