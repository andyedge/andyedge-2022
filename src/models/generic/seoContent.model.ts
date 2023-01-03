import Schema from "./schema.model"
import ImageType from "./image.model"

export default interface SeoContent {
    title: string
    metaDescription: string
    metaKeywords: string
    ogTitle: string
    ogDescription: string
    ogUrl: string
    ogType: string
    ogImage: ImageType
    schema: Schema
}