import Entry, { Item } from '../../../models/generic/entry.model'
import Header from '../../../models/entities/header.model'
import { adaptImage } from '../generic/image.adapter'
import { adaptLink } from '../generic/link.adapter'

declare interface adapterProps {
    data: Entry
    megaMenu: any
}

export const adaptHeaderData = ({ data, megaMenu } : adapterProps ) : Header => {
    const [content] = data.items
    const { fields } = content
    return {
        logo: adaptImage(fields.logo),
        links: fields.links.map((link: Item) => adaptLink(link)),
        megaMenu: megaMenu,
        ctaButton: adaptLink(fields.ctaButton)
    }
}