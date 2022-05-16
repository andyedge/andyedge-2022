import cn from "classnames";
import Icon from "../icon/Icon";
import ImageComp from "../image/Image";
import { useRef, useState } from "react";
import styles from "./Contact.module.sass";
import ContactField from "../contactField/ContactField";


const Contact = ({ contents }: any) => {
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
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.preview}>
          {
            contents.contactVideoUrl ?
              <div key={'video-div'} className={styles.video_div}>
                <video
                  id="contact_video"
                  ref={videoRef}
                  className={styles.contact_video}
                  style={playing ? { cursor: 'pointer' } : { cursor: 'default' }}
                  src={contents.contactVideoUrl}
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                  onClick={(e) => videoHandler(e)}
                  onDoubleClick={() => videoFullscreen()}                  
                ></video>
                <button
                  className={cn("play", styles.play_button)}
                  style={playing ? { opacity: 0 } : { opacity: 1 }}
                  onClick={(e) => videoHandler(e)}
                >
                  <Icon name="play" size="40" />
                </button>
              </div>
              :
              null
          }
          {/*<ImageComp
            srcSet="/images/content/dumbbell@2x.png 2x"
            srcSetDark="/images/content/dumbbell-dark@2x.png 2x"
            src="/images/content/dumbbell.png"
            srcDark="/images/content/dumbbell-dark.png"
            alt="Dumbbell"
            />*/}
        </div>
        <div className={cn("stage-small", styles.stage)}>
          {contents.preTitle}
        </div>
        <h2 className={cn("h2", styles.title)}> {contents.title} </h2>
        <div className={styles.text}>
          {contents.text}
        </div>
        <ContactField
          className={styles.subscription}
          placeholder="Enter your email"
        />
        <div className={styles.note}>
          By click sign in you, you agree with Stacks <a href="/#">terms</a> and{" "}
          <a href="/#">policy</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
