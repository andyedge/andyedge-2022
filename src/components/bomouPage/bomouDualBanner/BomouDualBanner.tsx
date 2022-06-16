import { FC } from 'react'
import cn from 'classnames'
import styles from './BomouDualBanner.module.sass'
import CustomImage from '../../image/Image'
import ImageType from '../../../models/generic/image.model'

declare interface BomouDualBannerProps {
  images: ImageType[]
}

const BomouDualBanner: FC<BomouDualBannerProps> = ({ images }: BomouDualBannerProps) => (
  <div className={cn('container-fluid')}>
    <div className={styles.img_wrapper}>    
    {
      images.map((image: ImageType, index: number) => (
          <div className={styles.container} key={index}>
            <CustomImage src={image} />
          </div>
      ))
    }
    </div>   
  </div>
)
export default BomouDualBanner