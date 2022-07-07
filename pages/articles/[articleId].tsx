import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { useRef } from 'react'

import { getArticles, searchArticles, getHeader, getFooter } from '../../src/services/fetch'
import Entry from '../../src/models/generic/entry.model'
import ArticleModel from '../../src/models/entities/article.model'
import Layout from '../../src/components/layout/Layout'
import LayoutModel from '../../src/models/generic/layout.model'
import Hero from '../../src/components/hero/Hero'
import ArticleContent from '../../src/components/articleContent/ArticleContent'
import Contact from '../../src/components/contact/Contact'
import Banner from '../../src/components/banner/Banner'

export const getStaticPaths: GetStaticPaths = async () => {
    const articles: Entry = await getArticles()
    const paths = articles?.items.map((value) => ({ params: { articleId: value.fields.slug } }))
    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.articleId
    const [articleData]: ArticleModel[] = await searchArticles(slug as string)
    const header = await getHeader()
    const footer = await getFooter()
    return {
        props: {
            pageContent: articleData || {},
            header,
            footer
        },
    }
}

declare interface ArticleProps extends LayoutModel {
    pageContent: ArticleModel
}


const Article: NextPage<ArticleProps> = ({ pageContent, header, footer } : ArticleProps) => {
    if(!pageContent) {
        return <h1>Article not found</h1>
    }

    const scrollToRef = useRef(null)
    return (
        <Layout header={header} footer={footer}>
            <div className='container-fluid'>
                <Hero
                    contents={pageContent.heroContainer}
                    scrollToRef={scrollToRef}
                    scroll={true}
                />
                <ArticleContent contents={pageContent} scrollToRef={scrollToRef}/>
                <Banner src={pageContent.pageImage3} page='article'/>
                <Contact contents={pageContent.contactContainer} />
            </div>
        </Layout>
    )
}

export default Article