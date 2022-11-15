import { FC } from 'react'
import Link from 'next/link'
import CustomImage from '../../image/Image'
import styles from './RelatedArticleItem.module.sass'
import HowItem from '../../../models/generic/howItem.model'

declare interface RelatedArticleItemProps {
    data: HowItem
}

const RelatedArticleItem: FC<RelatedArticleItemProps> = ({ data } : RelatedArticleItemProps) => (
    <div className={styles.case_item}>
        <Link href={`/${data.link.url}`}>
            <a>
                <div className={styles.case_item_image}>
                    {/*<CustomImage src={{image: data.image}}/>*/}
                </div>
            </a>
        </Link>
        <h4>{data.description}</h4>
    </div>
)

export default RelatedArticleItem