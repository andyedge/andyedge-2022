import ImageType from "./image.model"

export default interface Schema {
  legalName: string
  addressLocality: string
  addressCountry: string
  postalCode: string
  streetAddress: string
  logo: ImageType
  sameAs: string
  headline: string
  articleImages: ImageType[]
  author: string
  genre: string
  datePublished: string
  dateCreated: string
  dateModified: string
  description: string
  serviceType: string
  catalogName: string
  servicesCatalog: string[]
}