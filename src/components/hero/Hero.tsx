import { useRef, useState } from "react";
import cn from "classnames";
import Icon from "../icon/Icon";
import RichText from "../RichText";
import styles from "./Hero.module.sass";
import ScrollButton from "../scrollButton/ScrollButton";
import StandardContainer from "../../models/standardContainer.model";
import Button from '../button/Button';

declare interface HeroProps {
  contents: StandardContainer
  scrollToRef: any
  scroll: boolean
}

const Hero = ({ contents, scrollToRef, scroll } : HeroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const videoHandler = (e: any) => {
    const elementName = e.target.localName;

    switch (elementName) {
      case 'path':
        if (!playing) {
          videoRef.current?.play();
          setPlaying(true);
        } else {
          videoRef.current?.pause();
          setPlaying(false);    
        }        
        break;
    
      default:
        if (playing) {
          videoRef.current?.pause();
          setPlaying(false);
        }
        break;
    }    
  };

  const videoFullscreen = () => {
    videoRef.current?.requestFullscreen();
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
          <div className={cn("stage", styles.stage)}>
            {contents.preTitle}
          </div>
          <h1 className={cn("h1", styles.title)}>
            {contents.title}
            {contents.strikeThroughTitle && (
              <>
                <br />
                <span className={styles.strike_through}> {contents.strikeThroughTitle}</span> 
                {` ${contents.complementTitle}`}
              </>
            )}
          </h1>
          <div className={styles.text}>
            {contents.subtitle}
          </div>
          {contents.text && (
            <div className={styles.paragraph}>
              <RichText richText={contents.text} />
            </div>
          )}
          {contents.ctaText && (
            <Button link={contents.ctaPageLink} text={contents.ctaText} size='small' showIcon={false} />
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
              <div key={'video-div'}>
                <video
                  id="hero_video"
                  ref={videoRef}
                  className={styles.hero_video}
                  style={playing ? {cursor: 'pointer'} : {cursor: 'default'}}                  
                  src={contents.videoUrl}
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                  onClick={(e) => videoHandler(e)}
                  onDoubleClick={() => videoFullscreen()}
                ></video>
                <button 
                  className={cn("play", styles.play)}
                  style={playing ? {opacity: 0} : {opacity: 1}}
                  onClick={(e) => videoHandler(e)}
                >
                  <Icon name="play" size="40" />
                </button>
              </div>
              :
              null
          }
        </div>
      </div>
    </div>
  );
};

export default Hero;
