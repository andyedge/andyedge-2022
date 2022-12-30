import Schema from '../../../models/generic/schema.model'
import { Item } from '../../../models/generic/entry.model'
import { adaptImage, adaptImages } from './image.adapter';

const adaptSameAsField = (sameAs: string[] | undefined) => {
  let sameAsStr = '';

  if (sameAs) {
    sameAs.forEach((keyword: string) => {
      sameAsStr += '"' + keyword + '"' + ', '
    });

    sameAsStr = sameAsStr.slice(0, -2);
  }

  return sameAsStr
}

export const adaptSchema = (data: Item): Schema => {
  
  if (data) {
    const { fields } = data

    return {
      legalName: fields.legalName ? fields.legalName : '',
      addressLocality: fields.addressLocality ? fields.addressLocality : '',
      addressCountry: fields.addressCountry ? fields.addressCountry : '',
      postalCode: fields.postalCode ? fields.postalCode : '',
      streetAddress: fields.streetAddress ? fields.streetAddress : '',
      logo: adaptImage(fields.logo),
      sameAs: adaptSameAsField(fields.sameAs),
      headline: fields.headline ? fields.headline : '',
      articleImages: adaptImages(fields.articleImages),
      author: fields.author ? fields.author : '',
      genre: fields.genre ? fields.genre : '',
      datePublished: fields.datePublished ? fields.datePublished : '',
      dateCreated: fields.dateCreated ? fields.dateCreated : '',
      dateModified: fields.dateModified ? fields.dateModified : '',
      description: fields.description ? fields.description : '',
      serviceType: fields.serviceType ? fields.serviceType : '',
      catalogName: fields.catalogName ? fields.catalogName : '',
      servicesCatalog: fields.servicesCatalog ? fields.servicesCatalog : [] 
    }
  } else {
    return {} as Schema
  }
}