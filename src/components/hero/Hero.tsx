import { useRef, useState } from "react";
import cn from "classnames";
import Link from "next/link";
import Icon from "../icon/Icon";
import ImageComp from "../image/Image";
import RichText from "../RichText";
import styles from "./Hero.module.sass";
import ScrollParallax from "../ScrollParallax";
import ScrollButton from "../scrollButton/ScrollButton";
import StandardContainer from "../../models/standardContainer.model";

interface HeroProps {
  contents: StandardContainer
  scrollToRef: any
  scroll: boolean
}

const Hero = ({ contents, scrollToRef, scroll }: HeroProps) => {
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
              <div key={'video-div'}>
                <video
                  id="hero_video"
                  ref={videoRef}
                  className={styles.hero_video}
                  style={playing ? {cursor: 'pointer'} : {cursor: 'default'}}                  
                  src={contents.videoUrl}
                  onClick={(e) => videoHandler(e)}
                  onDoubleClick={() => videoFullscreen()}
                  onPlay={() => setPlaying(true)}
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
