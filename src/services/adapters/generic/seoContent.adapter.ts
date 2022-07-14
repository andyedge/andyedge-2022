import { adaptImage } from "./image.adapter"
import { Item } from "../../../models/generic/entry.model"
import SeoContent from "../../../models/generic/seoContent.model"

const adaptMetaKeywords = (metaKeywords: string[] | undefined) => {
  let metaKeywordsStr = '';

  if (metaKeywords) {
    metaKeywords.forEach((keyword: string) => {
      metaKeywordsStr += keyword + ', '
    });

    metaKeywordsStr = metaKeywordsStr.slice(0, -2);
  }

  return metaKeywordsStr
}

export const adaptSeoContent = (data: Item): SeoContent => {
  const { fields } = data

  return {
    title: fields.title || '',
    metaDescription: fields.metaDescription || '',
    metaKeywords: adaptMetaKeywords(fields.metaKeywords),
    ogTitle: fields.ogTitle || '',
    ogDescription: fields.ogDescription || '',
    ogUrl: fields.ogUrl || '',
    ogType: fields.ogType || '',
    ogImage: adaptImage(fields.ogImage)
  }
}