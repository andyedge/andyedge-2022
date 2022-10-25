import Entry from '../../../models/generic/entry.model'
import Page404 from '../../../models/entities/page404.model'
import { adaptSeoContent } from '../generic/seoContent.adapter'
import { adaptStandardContainer } from '../generic/standardContainer.adapter'
import { adaptContactContainer } from '../generic/contactContainer.adapter'

export const adaptPage404 = (data: Entry): Page404 => {
    const [page404] = data.items
    const { fields } = page404
    return {        
        name: fields.name,
        seoContent: adaptSeoContent(fields.seoContent),
        hero: adaptStandardContainer(fields.heroContainer),
        contactContainer: adaptContactContainer(fields.contactContainer)
    }
}