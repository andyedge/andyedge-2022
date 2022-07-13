import cn from 'classnames'
import styles from './Hero.module.sass'
import StandardContainer from '../../../models/generic/standardContainer.model'
import CustomImage from '../../image/Image'

declare interface HowHeroProps {
    contents: StandardContainer
}

const Hero = ({ contents }: HowHeroProps) => {
    return (
        <div className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.wrap}>
                    <h1 className={cn('h1', styles.title)}>
                        {contents.title}
                        {contents.strikeThroughTitle && (
                            <>
                                <br />
                                <span className={styles.strike_through}> {contents.strikeThroughTitle}</span>
                                {` ${contents.complementTitle}`}
                            </>
                        )}
                    </h1>
                    <p className={'info-text'}>
                        {contents.subtitle}
                    </p>
                </div>
                <div className={styles.gallery}>
                    {contents?.images?.length && (
                        <div className={styles.gallery_img}>
                            <CustomImage src={contents.images[0]}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Hero
