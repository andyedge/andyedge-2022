import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from './HowGrid.module.sass'
import CustomImage from '../../image/Image'
import CommonModal from '../../modal/Modal'
import { prependHttps } from '../../../helpers/functions'
import HowItem from '../../../models/generic/howItem.model'
import Link from 'next/link'

declare interface HowGridItemProps {
  item: HowItem
}

const HowGridItem = ({ item }: HowGridItemProps) => {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const toggleModal = () => setIsModalOpen(!isModalOpen)

  const clickFunctionGridItem = () => {
    const formatType = item.format
    if (formatType === 'Article' || formatType === 'Case Study') {
      router.push(`/${item.link.url}`)
    } else if (formatType === 'External') {
      window.open(prependHttps(item.link.url), '_blank', 'noopener,noreferrer')
    } else {
      toggleModal()
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
              <div className={styles.platform_icon}>
                <CustomImage src={{ image: item.platform.icon }} />
              </div>
            </div>
            :
            null
        }
        <div className={styles.post_info}>
          {item.format === 'Article' || item.format === 'Case Study' ? 
            <Link href={`/${item.link.url}`}>
              <a>
                {item.title}
              </a>              
            </Link>            
            :
            <h5>{item.title}</h5>
          }          
          <h6>{item.description}</h6>
        </div>
      </div>
      <CommonModal
        closeModal={toggleModal}
        isModalOpen={isModalOpen}
      >
        <div className={styles.iframe}>
          {
            item.format === 'Video' ?
              <iframe width={'100%'} height={'100%'} src={item.link.url} allowFullScreen={true}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              >                
              </iframe>
              :
              <iframe width={'100%'} height={'100%'} src={item.link.url}></iframe>
          }

        </div>
      </CommonModal>
    </div>
  )
}

export default HowGridItem