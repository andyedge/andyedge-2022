import Entry, { Item } from '../../../models/generic/entry.model'
import MegaMenu, { MegaMenuItems } from '../../../models/entities/megaMenu.model'
import { adaptImage } from '../generic/image.adapter'
import { adaptStepsSection } from '../generic/steps.adapter'

const adaptMegaMenuItems = (data: Item[]): MegaMenuItems[] => {
    if(!data.length) {
        return []
    }

    return data.map((megaMenuItem) => {
        const { fields } = megaMenuItem
        return {
            title: fields.title,
            text: fields.text,
            labelText: fields.labelText,
            labelBackground: fields.labelBackground,
            logo: adaptImage(fields.logo),
            leftImage: adaptImage(fields.leftImage)
        }
    })
}

export const adaptMegaMenu = (data: Entry): MegaMenu => {
    const [header] = data.items
    const { fields } = header
    return {
        dropdownText: fields.headerDropdownText,
        leftTitle: fields.leftTitle,
        logo: adaptImage(fields.logo),
        leftLinks: adaptStepsSection(fields.leftLinks),
        labelText: fields.labelText,
        bigImage: adaptImage(fields.bigImage),
        centralSectionTitle: fields.centralSectionTitle,
        centralSectionSubtitle: fields.centralSectionSubtitle,
        centralSectionLabel: fields.centralSectionLabel,
        centralSectionText: fields.centralSectionText,
        rightItems: adaptMegaMenuItems(fields.rightItems)
    }
}