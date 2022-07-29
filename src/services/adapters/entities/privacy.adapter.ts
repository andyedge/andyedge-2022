import Entry from '../../../models/generic/entry.model'
import Privacy from '../../../models/entities/privacy.model'
import { adaptSeoContent } from '../generic/seoContent.adapter'

export const adaptPrivacy = ( data : Entry) : Privacy => {
    const [privacy] = data.items
    const { fields } = privacy

    return {
        title: fields.title,
        seo: adaptSeoContent(fields.seo),
        content: fields.content
    }
}