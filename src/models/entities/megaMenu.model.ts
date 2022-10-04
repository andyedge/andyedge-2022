import ImageType from '../generic/image.model'
import StepsContainer from '../generic/stepsContainer.model'

export interface MegaMenuItems {
    title: string
    text: string
    labelText: string
    labelBackground: string
    link: string
    logo: ImageType
    leftImage: ImageType
}

export default interface MegaMenu {
    dropdownText: string
    leftTitle: string
    logo: ImageType
    leftLinks: StepsContainer[]
    labelText: string
    bigImage: ImageType
    profileImage: ImageType
    centralSectionLink: string
    centralSectionTitle: string
    centralSectionSubtitle: string
    centralSectionLabel: string
    centralSectionText: string
    rightItems: MegaMenuItems[]
}