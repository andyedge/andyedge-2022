import Entry from '../../../models/entry.model'
import Ecamp from '../../../models/ecamp.model'
import { adaptStandardContainer } from '../generic/standardContainer.adapter'
import { adaptStandardCardContainer, adaptStandardCardContainers } from '../generic/cardContainer.adapter'
import { adaptImages } from '../generic/image.adapter'
import { adaptContactContainer } from '../generic/contactContainer.adapter'
import { adaptTextSliders } from '../generic/textSlider.adapter'

export const adaptEcamppage = (data: Entry): Ecamp => {
    const [ecamp] = data.items
    const { fields } = ecamp
    return {
        hero: adaptStandardContainer(fields.heroContainer),
        cardsContainer: adaptStandardCardContainers(fields.cardsContainer),
        cardModal1: adaptStandardCardContainer(fields.cardModal1),
        cardModal2: adaptStandardCardContainer(fields.cardModal2),
        cardModal3: adaptStandardCardContainer(fields.cardModal3),
        bigTitle1: fields.bigTitle1,
        standardContainer1: adaptStandardContainer(fields.standardContainer1),
        standardContainer2: adaptStandardContainer(fields.standardContainer2),
        standardContainer3: adaptStandardContainer(fields.standardContainer3),
        standardContainer4: adaptStandardContainer(fields.standardContainer4),
        standardContainer5: adaptStandardContainer(fields.standardContainer5),
        standardContainer6: adaptStandardContainer(fields.standardContainer6),
        standardContainer7: adaptStandardContainer(fields.standardContainer7),
        standardContainer8: adaptStandardContainer(fields.standardContainer8),
        standardContainer9: adaptStandardContainer(fields.standardContainer9),
        bigTitle2: fields.bigTitle2,
        pageImages: adaptImages(fields.pageImages),
        pageSubtitle: fields.pageSubtitle,
        pageText: fields.pageText,
        sliderImages: adaptImages(fields.sliderImages),
        textSliderItems: adaptTextSliders(fields.textSliderItems),
        contactContainer: adaptContactContainer(fields.contactContainer)
    }
}