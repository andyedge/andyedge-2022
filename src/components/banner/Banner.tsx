import { FC } from 'react'
import cn from 'classnames'
import CustomImage from '../image/Image'
import styles from './Banner.module.sass'
import ImageContainer from '../../models/generic/imageContainer.model'
import ScrollParallax from '../ScrollParallax'

declare interface BannerProps {
    images: ImageContainer[]
    page: string
}

const imageHasNoDelay = (index: number) => index === 0

const Banner: FC<BannerProps> = ({ images, page } : BannerProps) => (
    <div className={cn('container-fluid', styles[`container_${page}`])}>
        {images.map((image, index) => {
            if(image.image.url) {
                const delay = imageHasNoDelay(index) ?  0 : (index + 1) * 200
                return (
                    <ScrollParallax key={index} delay={delay} animateIn={delay && 'fadeInUp'}>
                        <CustomImage src={image} />
                    </ScrollParallax>
                )
            }
        })}
    </div>
)

export default Banner