import { useRef } from 'react'
import Hero from '../../src/components/hero/Hero'
import Layout from '../../src/components/layout/Layout'
import Entry from '../../src/models/generic/entry.model'
import Contact from '../../src/components/contact/Contact'
import LayoutModel from '../../src/models/generic/layout.model'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import ArticleModel from '../../src/models/entities/article.model'
import ArticleContent from '../../src/components/articleContent/ArticleContent'
import { getArticles, searchArticles, getHeader, getFooter } from '../../src/services/fetch'
import RelatedArticles from '../../src/components/articleContent/relatedArticles/RelatedArticles'


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
    const scrollToRef = useRef(null)
    
    if(!pageContent) {
        return <h1>Article not found</h1>
    }

    return (
        <Layout header={header} footer={footer} seoContent={pageContent.seo}>
            <div className='container-fluid'>
                <Hero
                    contents={pageContent.heroContainer}
                    scrollToRef={scrollToRef}
                    scroll={false}
                />
                <ArticleContent contents={pageContent} scrollToRef={scrollToRef}/>
                <Contact contents={pageContent.contactContainer} />
                <RelatedArticles articles={pageContent.relatedArticles}/>
            </div>
        </Layout>
    )
}

export default Article