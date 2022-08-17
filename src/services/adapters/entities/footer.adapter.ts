import Entry, { Item } from '../../../models/generic/entry.model'
import Footer from '../../../models/entities/footer.model'
import { adaptImage } from '../generic/image.adapter'
import { adaptLink } from '../generic/link.adapter'

const adaptSocialLinks = (socials: Item[]) => {
    return socials.map((social) => {
        const { fields } = social
        return {
            icon: fields.preTitle,
            url: fields.title,
            size: fields.size
        }
    })
}

export const adaptFooterData = (data: Entry): Footer => {
    const [header] = data.items
    const { fields } = header
    return {
        logo: adaptImage(fields.logo),
        pageLinks: fields.pageLinks.map((link: Item) => adaptLink(link)),
        contactText: fields.contactText,
        contactContent: fields.contactContent,
        getInTouchText: fields.getInTouchText,
        getInTouchContent: fields.getInTouchContent,
        button: adaptLink(fields.button),
        copyrightText: fields.copyrightText,
        socialLinks: adaptSocialLinks(fields.socialLinks)
    }
}