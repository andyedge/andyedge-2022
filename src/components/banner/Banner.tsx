import { FC } from 'react'
import CustomImage from '../image/Image'
import styles from './Banner.module.sass'
import Image from '../../models/image.model'
import cn from 'classnames'

declare interface BannerProps {
    src: Image
}

const Banner: FC<BannerProps> = ({ src } : BannerProps) => (
    <div className={cn('container-fluid', styles.container)}>
        <CustomImage src={src} />
    </div>
)
export default Banner