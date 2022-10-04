import { useState } from 'react'
import cn from 'classnames'
import styles from './PearsonHero.module.sass'
import ScrollButton from '../../scrollButton/ScrollButton'
import StandardContainer from '../../../models/generic/standardContainer.model'
import CustomImage from '../../image/Image'
import VideoComponent from '../../VideoComponent'

declare interface PearsonHeroProps {
    contents: StandardContainer
    scrollToRef: any
    scroll: boolean
}

const backgroundImageProps = {
    className: styles.background,
    priority: true
}

const Hero = ({ contents, scrollToRef, scroll } : PearsonHeroProps) => {
    const videoClassnamesObj = {
        videoDivClassname: '',
        videoClassname: styles.hero_video,
        playButtonClassname: cn("play", styles.play)
      }
      const [playing, setPlaying] = useState<boolean>(false);
    
      const videoPlayingHandler = (newStatus: boolean) => {
        setPlaying(newStatus);
      }

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
                    {contents.videoUrl ?
                        <VideoComponent
                            videoUrl={contents.videoUrl}
                            videoClassnames={videoClassnamesObj}
                            playing={playing}
                            playingHandler={videoPlayingHandler}
                        />
                    : null }
                    {contents?.imagesContainer?.length ? (
                        <div className={styles.gallery_img}>
                            <CustomImage src={contents.imagesContainer[0]} props={{priority: true}}/>
                        </div>
                    ) : null }
                </div>
            </div>
        </div>
    );
};

export default Hero;
