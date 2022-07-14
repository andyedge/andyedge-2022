import Entry from '../../../models/generic/entry.model'
import How from '../../../models/entities/how.model'
import { adaptStandardContainer} from '../generic/standardContainer.adapter'
import { adaptSeoContent } from '../generic/seoContent.adapter'

export const adaptHow = (data: Entry): How => {
    const [how] = data.items
    const { fields } = how
    return {
        seo: adaptSeoContent(fields.seo),
        hero: adaptStandardContainer(fields.hero),
    }
}