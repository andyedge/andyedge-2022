import cn from 'classnames'
import styles from './PearsonHero.module.sass'
import ScrollButton from '../../scrollButton/ScrollButton'
import StandardContainer from '../../../models/generic/standardContainer.model'
import CustomImage from '../../image/Image'

declare interface PearsonHeroProps {
    contents: StandardContainer
    scrollToRef: any
    scroll: boolean
}

const backgroundImageProps = {
    className: styles.background
}

const Hero = ({ contents, scrollToRef, scroll }: PearsonHeroProps) => {
    return (
        <div className={styles.hero}>
            {contents.backgroundImage.image.url && (
                <CustomImage src={contents.backgroundImage} props={backgroundImageProps}/>
            )}
            <div className={cn('container', styles.container)}>
                <div className={styles.wrap}>
                    <h1 className={cn('stage', styles.stage)}>
                        {contents.preTitle}
                    </h1>
                    <h2 className={cn('h1', styles.title)}>
                        {contents.title}
                        {contents.strikeThroughTitle && (
                            <>
                                <br />
                                <span className={styles.strike_through}> {contents.strikeThroughTitle}</span>
                                {` ${contents.complementTitle}`}
                            </>
                        )}
                    </h2>
                    <p className={styles.text}>
                        {contents.subtitle}
                    </p>
                    <div className={styles.logo}>
                        <CustomImage src={contents.logoC} />
                    </div>
                    {scroll && (
                        <ScrollButton
                            onScroll={() =>
                                scrollToRef.current.scrollIntoView({ behavior: 'smooth' })
                            }
                            className={styles.scroll}
                        />
                    )}
                    <h6 className={cn('stage', styles.stage, styles.bottom_title)}>
                        Project Overview
                    </h6>
                </div>
                <div className={styles.gallery}>
                    {contents?.imagesContainer?.length && (
                        <div className={styles.gallery_img}>
                            <CustomImage src={contents.imagesContainer[0]}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Hero;
