import { FC } from 'react'
import Link from 'next/link'
import CustomImage from '../../image/Image'
import styles from './RelatedArticleItem.module.sass'
import HowItem from '../../../models/generic/howItem.model'
import CategoryLabels from '../../categoryLabels/CategoryLabels'
import Category from '../../../models/generic/category.model'

declare interface RelatedArticleItemProps {
  data: HowItem
}

const RelatedArticleItem: FC<RelatedArticleItemProps> = ({ data }: RelatedArticleItemProps) => {
  const artCategories : Category[] = []
  
  if (data.category) {
    artCategories.push(data.category)
  }

  return (
    <div className={styles.case_item}>
      <Link href={`/${data.link.url}`}>
        <a>
          <div className={styles.case_item_image}>
            <CustomImage src={{ image: data.itemImage }} />
          </div>
        </a>
      </Link>
      {
        artCategories.length > 0 ?
          <CategoryLabels categories={artCategories} trim={2} />
          :
          null
      }
      <h4>{data.description}</h4>
    </div>
  )
}

export default RelatedArticleItem