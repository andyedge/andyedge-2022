import{ FC } from 'react'
import Head from 'next/head'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import LayoutModel from '../../models/generic/layout.model'

const Layout: FC<LayoutModel> = (props: LayoutModel) => (
  <>
    <Head>
      <title>{props.seoContent?.title}</title>
      <meta name='description' content={props.seoContent?.metaDescription}/>
      <meta name='keywords' content={props.seoContent?.metaKeywords} />
      <meta property='og:title' content={props.seoContent?.ogTitle}/>
      <meta property='og:description' content={props.seoContent?.ogDescription} />
      <meta property='og:type' content={props.seoContent?.ogType}/>
      <meta property='og:url' content={props.seoContent?.ogUrl}/>
      <meta property='og:image' content={props.seoContent?.ogImage.url} />
    </Head>
    <Header data={props.header}/>
    {props.children}
    <Footer data={props.footer}/>
  </>
)

export default Layout