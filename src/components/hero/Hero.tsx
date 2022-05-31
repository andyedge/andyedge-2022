import cn from "classnames";
import Link from "next/link";
import RichText from "../RichText";
import ImageComp from "../image/Image";
import styles from "./Hero.module.sass";
import ScrollButton from "../scrollButton/ScrollButton";
import StandardContainer from "../../models/standardContainer.model";
import VideoComponent from "../VideoComponent";

interface HeroProps {
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
      {Object.keys(contents.backgroundImage).length > 0 ?
        <img
          src={contents.backgroundImage.url}
          alt={contents.backgroundImage.description}
        />
        :
        null
      }
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={cn("stage", styles.stage)}>
            {contents.preTitle}
          </div>
          <h1 className={cn("h1", styles.title)}>
            {contents.title}
          </h1>
          <div className={styles.text}>
            {contents.subtitle}
          </div>
          {
            contents.text !== null ?
              <div className={styles.paragraph}>
                <RichText
                  richText={contents.text}
                />
              </div>
              :
              null
          }
          {contents.ctaText !== null && (contents.ctaPageLink !== null || contents.ctaVideoLink !== null) ?
            <div className={styles.btns}>
              <Link href={`/${contents.ctaPageLink}`}>
                <a className={cn("button", styles.button)}> {contents.ctaText} </a>
              </Link>
            </div>
            :
            null
          }
        </div>
        {
          scroll ?
            <ScrollButton
              onScroll={() =>
                scrollToRef.current.scrollIntoView({ behavior: "smooth" })
              }
              className={styles.scroll}
            />
            :
            null
        }
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
