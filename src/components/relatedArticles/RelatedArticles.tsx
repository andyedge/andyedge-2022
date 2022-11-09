import { FC } from 'react'
import PortfolioCaseStudy from '../../models/generic/portfolioCaseStudy.model'
import Link from '../../models/generic/link.model'
import styles from './RelatedArticles.module.sass'
import classNames from 'classnames'
import Button from '../button/Button'
import HowItem from '../../models/generic/howItem.model'

declare interface RelatedArticlesProps {
    article: HowItem
}

const RelatedCases: FC<RelatedArticlesProps> = ({ article } : RelatedArticlesProps) => {
    const nextCase = article || {}
    const nextLink: Link = {
        url: nextCase.link.url,
        text: 'Next Article',
        preText: '',
        sectionId: '',
        buttonColor: 'white',
        action: 'Redirect'
    }

    return (
        <section className={classNames('container', styles.container)}>
            { nextLink?.url ? (
                <div className={styles.button}>
                    <Button link={nextLink} size='big'/>
                </div>
            ) : null } 
        </section>
    )
}

export default RelatedCases