import Schema from "../models/generic/schema.model"

export const capitalizeFirstLetter = (text: string): string => {
  return text.split(' ').map((word) => {
    return (word === 'UX') ? 'UX' : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  }).join(' ')
}

export const getUniqueValuesFromCollection = (data: any[], key: string) => {
  if (key === 'format') {
    const items = data.map((item) => item[key]).sort()
    return [...Array.from(new Set(items))]
  } else {
    const items = data.map((item) => item[key]?.name)
    const filteredItems = items.filter(item => item && item !== null).sort()
    return [...Array.from(new Set(filteredItems))]
  }
}

export const filterHowPlatform = (data: any[]) => {
  return data.filter(item => item && item !== 'Article' && item !== 'Adobe PDF' && item !== 'Adobe XD')
}

export const getUrlToShare = (sectionId: string) => {
  let urlToShare = window.location.href;
  let sectionIdStr = '#' + sectionId;

  if (urlToShare.includes('#')) {
    urlToShare = urlToShare.split('#')[0];
  }

  urlToShare += sectionIdStr;

  navigator.clipboard.writeText(urlToShare)
    .then(() => {
      alert('Text copied')
    })
    .catch(error => {
      alert(error)
    })
  return urlToShare;
}

export const getTypeformId = (typeformURL: string) => (typeformURL && typeformURL.length) ? typeformURL.split('to/')[1] : ''

export const prependHttps = (url: string): string => {
  if (url.toLowerCase().includes('https')) {
    return url
  }
  return 'https://' + url
}

export const getPageSchema = (pageType: string, schema: Schema) => {
  switch (pageType) {
    case '':
      return `{
                "@context": "https://schema.org/",
                "@type": "Organization",
                "url": "https://www.andyedge.com",
                "legalName": "${schema.legalName}",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "${schema.addressLocality}",
                    "addressCountry": "${schema.addressCountry}",
                    "postalCode": "${schema.postalCode}",
                    "streetAddress": "${schema.streetAddress}"
                },
                "logo:": "${schema.logo.url}",
                "sameAs": [ 
                            ${schema.sameAs} 
                          ]
              }`
    case 'articles':
      let articleImgs = "";
      if (schema.articleImages.length > 0) {
        schema.articleImages.forEach((artImage, index) => {
          if (index === schema.articleImages.length - 1) {
            articleImgs += '"' + artImage.url + '"'
          } else {
            articleImgs += '"' + artImage.url + '"' + ', '
          }
        })
      }
      return `{ 
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "${schema.headline}",
                "description": "${schema.description}",
                ${articleImgs !== '' ? `"image": [\n ${articleImgs} \n],` : ""}
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5.0",
                    "ratingCount": "5"
                },
                "author": {
                    "@type": "Person",
                    "name": "${schema.author}"
                },
                "genre": "${schema.genre}",
                "datePublished": "${schema.datePublished}",
                "dateCreated": "${schema.dateCreated}",
                "dateModified": "${schema.dateModified}"
              }`
    default:
      let servicesStr = ""
      if (schema.servicesCatalog.length > 0) {
        schema.servicesCatalog.map((service, index) => {
          if (index === schema.servicesCatalog.length - 1) {
            servicesStr +=
              `{
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "${service}",
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5.0",
                    "ratingCount": "5"
                  }
                }
              }`
          } else {
            servicesStr +=
              `{
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "${service}",
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5.0",
                    "ratingCount": "5"
                  }
                }
              },`
          }
        })
      }

      return `{
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "${schema.serviceType}",
                "provider": {
                  "@type": "Organization",
                  "name": "${schema.legalName}"
                },
                "logo": "${schema.logo.url}",
                "description": "${schema.description}",
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "${schema.catalogName}"${servicesStr !== '' ? `,` : ""}
                  ${servicesStr !== '' ? `"itemListElement": [\n ${servicesStr} \n]` : ""}
                }
      }`
  }
}