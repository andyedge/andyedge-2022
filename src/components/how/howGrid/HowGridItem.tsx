import styles from './HowGrid.module.sass'
import HowItem from '../../../models/generic/howItem.model'
import CustomImage from '../../image/Image'

declare interface HowGridItemProps {
    item: HowItem
}

const HowGridItem = ({ item }: HowGridItemProps) => (
    <div className={styles.item}>
        <div className={styles.item_image}>
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
                <h6>{item.date}</h6>
            </div>
        </div>
    </div>
)

export default HowGridItem