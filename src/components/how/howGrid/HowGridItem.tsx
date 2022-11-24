import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from './HowGrid.module.sass'
import CustomImage from '../../image/Image'
import CommonModal from '../../modal/Modal'
import { prependHttps } from '../../../helpers/functions'
import HowItem from '../../../models/generic/howItem.model'

declare interface HowGridItemProps {
  item: HowItem
}

const HowGridItem = ({ item }: HowGridItemProps) => {
  const router = useRouter()
  
  const clickFunctionGridItem = () => {
    const formatType = item.format
    if (formatType === 'Article' || formatType === 'Case Study') {
      router.push(`/${item.link.url}`)
    } else {
      window.open(prependHttps(item.link.url), '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className={styles.item}>
      <div className={styles.item_image} onClick={clickFunctionGridItem}>
        <CustomImage src={{ image: item.itemImage }} />
        {
          item.category ?
            <div className={styles.category}>
              <h6 className='status-light-black'>{item.category.name}</h6>
            </div>
            :
            null
        }
      </div>
      <div className={styles.item_info}>
        {
          item.platform ?
            <div className={styles.item_platform_icon}>
              <CustomImage src={{ image: item.platform.icon }} />
            </div>
            :
            null
        }
        <div>
          <h5>{item.title}</h5>
          <h6>{item.description}</h6>
        </div>
      </div>
    </div>
  )
}

export default HowGridItem