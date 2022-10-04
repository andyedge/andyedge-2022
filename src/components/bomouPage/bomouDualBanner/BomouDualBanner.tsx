import { FC } from 'react'
import cn from 'classnames'
import CustomImage from '../../image/Image'
import styles from './BomouDualBanner.module.sass'
import ImageContainer from '../../../models/generic/imageContainer.model'

declare interface BomouDualBannerProps {
  images: ImageContainer[]
}

const BomouDualBanner: FC<BomouDualBannerProps> = ({ images }: BomouDualBannerProps) => (
  <div className={cn('container-fluid')}>
    <div className={styles.img_wrapper}>    
    {
      images.map((image: ImageContainer, index: number) => (
          <div className={styles.container} key={index}>
            <CustomImage src={image} />
          </div>
      ))
    }
    </div>   
  </div>
)
export default BomouDualBanner