import Entry, { Item } from '../../../models/generic/entry.model'
import Header from '../../../models/entities/header.model'
import { adaptLink } from '../generic/link.adapter'
import { adaptImageContainer } from '../generic/imageContainer.adapter'
import { getTypeformId } from '../../../helpers/functions'

declare interface adapterProps {
    data: Entry
    megaMenu: any
}

export const adaptHeaderData = ({ data, megaMenu } : adapterProps ) : Header => {
    const [content] = data.items
    const { fields } = content

    return {
        logo: adaptImageContainer(fields.logo),
        links: fields.links.map((link: Item) => adaptLink(link)),
        megaMenu: megaMenu,
        ctaButton: adaptLink(fields.ctaButton),
        formId: getTypeformId(fields.form)
    }
}