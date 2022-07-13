import Entry from '../../../models/generic/entry.model'
import How from '../../../models/entities/how.model'
import { adaptStandardContainer} from '../generic/standardContainer.adapter'

export const adaptHow = (data: Entry): How => {
    const [how] = data.items
    const { fields } = how
    return {
        hero: adaptStandardContainer(fields.hero),
    }
}