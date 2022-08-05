import { FC } from 'react'
import cn from 'classnames'
import CustomImage from '../image/Image'
import styles from './Banner.module.sass'
import ImageContainer from '../../models/generic/imageContainer.model'

declare interface BannerProps {
    src: ImageContainer
    page: string
}

const Banner: FC<BannerProps> = ({ src, page }: BannerProps) => {
    return (
        <>
            {
                src.image.url !== '' ?
                    <div className={cn('container-fluid', styles[`container_${page}`])}>
                        <CustomImage src={src.image} srcDark={src.darkImage} />
                    </div>
                    :
                    null
            }
        </>
    )
}

export default Banner