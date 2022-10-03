import cn from "classnames";
import { useState } from "react";
import CustomImage from "../image/Image";
import styles from "./Contact.module.sass";
import VideoComponent from "../VideoComponent";
import ContactField from "../contactField/ContactField";
import RichText from '../RichText';

const Contact = ({ contents }: any) => {
  const videoClassnamesObj = {
    videoDivClassname: styles.video_div,
    videoClassname: styles.contact_video,
    playButtonClassname: cn("play", styles.play_button)
  }

  const [playing, setPlaying] = useState<boolean>(false);

  const videoPlayingHandler = (newStatus: boolean) => {
    setPlaying(newStatus);
  }

  return (
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.preview}>
          {
            contents.contactVideoUrl ?
              <VideoComponent
                videoUrl={contents.contactVideoUrl}
                videoClassnames={videoClassnamesObj}
                playing={playing}
                playingHandler={videoPlayingHandler}
              />
              :
              <div className={styles.contact_image}>
                {contents.contactImage?.url ? <CustomImage src={{image: contents.contactImage}} /> : null }
              </div>
          }
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
          placeholder={contents.inputPlaceholder}
        />
        <div className={styles.note}>
          <RichText richText={contents.inputBottomText} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
