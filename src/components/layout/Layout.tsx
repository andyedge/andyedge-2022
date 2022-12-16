import { FC } from 'react'
import Head from 'next/head'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { useRouter } from 'next/router'
import LayoutModel from '../../models/generic/layout.model'
import Script from 'next/script'

const Layout: FC<LayoutModel> = (props: LayoutModel) => {
  const router = useRouter()
  const canonicalUrl = (`https://www.andyedge.com` + (router.asPath === "/" ? "" : router.asPath)).split("?")[0];

  return (
    <>
      <Head>
        <title>{props.seoContent?.title}</title>
        <link key='canonical' rel='canonical' href={canonicalUrl} />
        <meta name='description' content={props.seoContent?.metaDescription} />
        <meta name='keywords' content={props.seoContent?.metaKeywords} />
        <meta property='og:title' content={props.seoContent?.ogTitle} />
        <meta property='og:description' content={props.seoContent?.ogDescription} />
        <meta property='og:type' content={props.seoContent?.ogType} />
        <meta property='og:url' content={props.seoContent?.ogUrl} />
        <meta property='og:image' content={props.seoContent?.ogImage.url} />
        <Script id='schema-script' type="application/ld+json" strategy='afterInteractive'>
          {`
            {
              "@context":"https://schema.org/",
              "@type":"Article",
              "name":"${props.seoContent?.title}",
              ${ratingAverage > 4 ?
              `"aggregateRating": {
                    "@type":"AggregateRating",
                    "ratingValue":${ratingAverage},
                    "reviewCount":${ratingCount}
                  },`
              :
                ""
              }
              "about": "${props.seoContent?.metaDescription}",
              "author": { "@type": "Person", "name": "Andyedge" },
              "copyrightYear": "2022",
              "datePublished": "16/12/2022",
              "dateModified": "16/12/2022",
              "description": "${props.seoContent?.metaDescription}",
              "headline": "${props.seoContent?.title}",
              ${sourceUrl ? `"image": "${sourceUrl}",` : ""}
              "inLanguage": "English",
              "mainEntityOfPage": "${site}articles/${slug}",
              "publisher": { "@id": "${site}#organization" },
              "sourceOrganization": ${org},
              "url": "${site}articles/${slug}"
            }
          `}
        </Script>
      </Head>
      <Header data={props.header} />
      {props.children}
      <Footer data={props.footer} />
    </>
  )
}

export default Layout