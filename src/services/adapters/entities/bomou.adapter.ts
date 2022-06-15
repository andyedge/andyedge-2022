import Entry from '../../../models/generic/entry.model'
import Bomou from '../../../models/entities/bomou.model'
import { adaptStandardContainer, adaptStandardContainers } from '../generic/standardContainer.adapter'
import { adaptStandardCardContainers } from '../generic/cardContainer.adapter'
import { adaptImage, adaptImages } from '../generic/image.adapter'
import { adaptContactContainer } from '../generic/contactContainer.adapter'
import { adaptTextSlider } from '../generic/textSlider.adapter'
import { adaptLink } from '../generic/link.adapter'

export const adaptBomou = (data: Entry): Bomou => {
    const [bomou] = data.items
    const { fields } = bomou
    return {
        hero: adaptStandardContainer(fields.hero),
        cards: adaptStandardCardContainers(fields.cardsContainer),
        subtitle1: fields.subtitle1,
        bigTitle1: adaptLink(fields.bigTitle1),
        standardContainer1: adaptStandardContainer(fields.standardContainer1),
        bigTitle2: adaptLink(fields.bigTitle2),
        standardContainer2: adaptStandardContainer(fields.standardContainer2),
        standardContainer3: adaptStandardContainer(fields.standardContainer3),
        consistencyItems: adaptStandardContainers(fields.consistencyItems),
        bigTitle3 : adaptLink(fields.bigTitle3),
        standardContainer4: adaptStandardContainer(fields.standardContainer4),
        imagesTitle: fields.imagesTitle,
        image1: adaptImage(fields.image1),
        image2: adaptImage(fields.image2),
        image3: adaptImage(fields.image3),
        image4: adaptImage(fields.image4),
        image5: adaptImage(fields.image5),
        imagesBottomTitle: fields.imagesBottomTitle,
        bannerImages: adaptImages(fields.bannerImages),
        bigTitle4 : adaptLink(fields.bigTitle4),
        standardContainer5: adaptStandardContainer(fields.standardContainer5),
        standardContainer6: adaptStandardContainer(fields.standardContainer6),
        design: adaptStandardContainers(fields.designContainers),
        image6: adaptImage(fields.image6),
        textSlider: adaptTextSlider(fields.textSlider),
        contact: adaptContactContainer(fields.contact)
    }
}