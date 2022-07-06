import ImageType from "./image.model"

export default interface LinkType {
    preText: string
    text: string
    url: string
    action: string
    icon?: ImageType
    newTab: boolean
}