import { FC } from 'react'
import classNames from 'classnames'
import Button from '../../button/Button'
import styles from './RelatedArticles.module.sass'
import Link from '../../../models/generic/link.model'
import HowItem from '../../../models/generic/howItem.model'
import RelatedArticleItem from '../relatedArticlesItem/RelatedArticleItem'

declare interface RelatedArticlesProps {
    articles: HowItem[]
}

const RelatedCases: FC<RelatedArticlesProps> = ({ articles }: RelatedArticlesProps) => {
    const nextArticle = articles[articles.length - 1] || {}
    const nextLink: Link = {
        url: nextArticle.link?.url,
        text: 'Next Article',
        preText: '',
        sectionId: '',
        buttonColor: 'white',
        action: 'Redirect'
    }

    return (
        <>
            {
                articles.length > 0 ?
                    <section className={classNames('container', styles.container)}>
                        <div className='case-studies-items'>
                            {articles.map((article, index) => (
                                <RelatedArticleItem data={article} key={index} />
                            ))}
                        </div>
                        {nextLink?.url ? (
                            <div className={styles.button}>
                                <Button link={nextLink} size='big' />
                            </div>
                        ) : null}
                    </section>
                    :
                    null
            }

        </>
    )
}

export default RelatedCases