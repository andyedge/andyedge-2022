import Entry, { Item } from '../../../models/generic/entry.model'
import Header from '../../../models/entities/header.model'
import { adaptImage } from '../generic/image.adapter'
import { adaptLink } from '../generic/link.adapter'

export const adaptHeaderData = (data: Entry): Header => {
    const [header] = data.items
    const { fields } = header
    return {
        logo: adaptImage(fields.logo),
        links: fields.links.map((link: Item) => adaptLink(link)),
        megaMenu: fields.megaMenuTrigger,
        ctaButton: adaptLink(fields.ctaButton)
    }
}