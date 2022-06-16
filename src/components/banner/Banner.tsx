import { FC } from 'react'
import cn from 'classnames'

import CustomImage from '../image/Image'
import styles from './Banner.module.sass'
import Image from '../../models/generic/image.model'

declare interface BannerProps {
    src: Image
    page: string
}

const Banner: FC<BannerProps> = ({ src, page } : BannerProps) => (
    <div className={cn('container-fluid', styles[`container_${page}`])}>
        <CustomImage src={src} />
    </div>
)
export default Banner