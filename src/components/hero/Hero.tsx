import cn from "classnames";
import { useState } from "react";
import RichText from "../RichText";
import styles from "./Hero.module.sass";
import Button from "../button/Button";
import VideoComponent from "../VideoComponent";
import ScrollButton from "../scrollButton/ScrollButton";
import StandardContainer from "../../models/generic/standardContainer.model";
import CustomImage from '../image/Image';

declare interface HeroProps {
  contents: StandardContainer
  functionType?: string
  scrollToRef: any
  scroll: boolean
}

const Hero = ({ contents, functionType, scrollToRef, scroll }: HeroProps) => {
  const videoClassnamesObj = {
    videoDivClassname: '',
    videoClassname: styles.hero_video,
    playButtonClassname: cn("play", styles.play)
  }
  const [playing, setPlaying] = useState<boolean>(false);

  const videoPlayingHandler = (newStatus: boolean) => {
    setPlaying(newStatus);
  }

  const buttonPlayingHandler = () => {
    if (playing) {
      setPlaying(false);
    } else {
      setPlaying(true);
    }
  }

  const buttonFunction = () => {
    switch (functionType) {
      case 'video':
        buttonPlayingHandler();
        break;
      default:
        undefined;
        break;
    }
  }

  return (
    <div className={styles.hero}>
      {contents.backgroundImage.image.url && (
        <CustomImage src={contents.backgroundImage} props={{ className: styles.background_image, priority: true }} />
      )}
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <h1 className={cn("stage", styles.stage)}>
            {contents.preTitle}
          </h1>
          <h2 className={cn("h1", styles.title)}>
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
          {contents.text && (
            <div className={styles.paragraph}>
              <RichText richText={contents.text} />
            </div>
          )}
          {contents.primaryButtonCta && (
            <Button
              link={contents.primaryButtonCta}
              func={buttonFunction}
            />
          )}
          {scroll && (
            <ScrollButton
              onScroll={() =>
                scrollToRef.current.scrollIntoView({ behavior: "smooth" })
              }
              className={styles.scroll}
            />
          )}
        </div>
        {
          contents.videoUrl || contents?.imagesContainer ?
            <div className={styles.gallery}>
              {contents.videoUrl ?
                <VideoComponent
                  videoUrl={contents.videoUrl}
                  videoClassnames={videoClassnamesObj}
                  playing={playing}
                  playingHandler={videoPlayingHandler}
                />
                : null}
              {contents?.imagesContainer?.length ? (
                <div className={styles.gallery_img}>
                  <CustomImage src={contents.imagesContainer[0]} props={{ priority: true }} />
                </div>
              ) : null}
            </div>
            :
            null
        }
      </div>
    </div>
  );
};

export default Hero;
