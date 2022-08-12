import cn from 'classnames'
import Image from 'next/image'
import { Fragment, FC } from 'react'
import Button from '../../button/Button'
import CustomImage from '../../image/Image'
import ScrollParallax from '../../ScrollParallax'
import styles from './BulletPointsContainer.module.sass'
import ImageType from '../../../models/generic/image.model'
import StandardContainer from '../../../models/generic/standardContainer.model'
import imageLoader from '../../../helpers/imageLoader'

declare interface BulletPointsContainerProps {
    contents: StandardContainer
}

const CardBullets: FC<BulletPointsContainerProps> = ({ contents } : BulletPointsContainerProps ) => {
    return (
        <div className={cn('section-bg', styles.section)}>
            <div className={cn('container', styles.container)}>
                <div className={styles.wrap}>
                    {contents.preTitle && <h6 className={styles.pre_title}>{contents.preTitle}</h6>}
                    <h2 className={cn('h2', styles.title)}> {contents.title} </h2>
                    <p className={styles.info}>
                        {contents.subtitle}
                    </p>
                    <div className={styles.list}>
                        {contents.bulletsContainer?.map((bullet: any, index: number) => (
                            <div className={styles.item} key={index}>
                                <div className={styles.icon}>
                                    <Image
                                        src={'/images/check.svg'}
                                        layout='fill'
                                        loader={imageLoader}
                                        unoptimized={true}
                                    />
                                </div>
                                <div className={styles.details}>
                                    <h6 className={styles.subtitle}>{bullet.title}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.buttons_container}>
                        <div>
                            {contents.primaryButtonCta && 
                                <Button link={contents.primaryButtonCta} size='default' />
                            }
                        </div>
                        {contents.secondaryButtonCta && (
                            <div>
                                <Button link={contents.secondaryButtonCta} size='default' />
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.gallery}>
                    {contents.images?.map((image: ImageType, index: number) => (
                        <Fragment key={index}>
                            <ScrollParallax
                                className={styles.card_image}
                                animateIn='fadeInUp'
                                delay={(index + 1) * 200}
                            >
                                <CustomImage src={image} />
                            </ScrollParallax>
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardBullets