import cn from "classnames";
import RichText from "../RichText";
import styles from "./Hero.module.sass";
import ScrollButton from "../scrollButton/ScrollButton";
import StandardContainer from "../../models/generic/standardContainer.model";
import Button from '../button/Button';
import NewButton from "../button/NewButton";
import VideoComponent from "../VideoComponent";

declare interface HeroProps {
  contents: StandardContainer
  scrollToRef: any
  scroll: boolean
}

const Hero = ({ contents, scrollToRef, scroll }: HeroProps) => {
  const videoClassnamesObj = {
    videoDivClassname: '',
    videoClassname: styles.hero_video,
    playButtonClassname: cn("play", styles.play)
  }

  return (
    <div className={styles.hero}>
      {contents.backgroundImage.url && (
        <img
          src={contents.backgroundImage.url}
          alt={contents.backgroundImage.description}
        />
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
          {contents.buttonCta && (
            <NewButton link={contents.buttonCta} />
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
        <div className={styles.gallery}>
          {
            contents.videoUrl !== null ?
              <VideoComponent
                videoUrl={contents.videoUrl}
                videoClassnames={videoClassnamesObj}
              />
              :
              null
          }
        </div>
      </div>
    </div>
  );
};

export default Hero;
