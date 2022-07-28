import cn from "classnames";
import Link from 'next/link';
import { useState } from "react";
import CustomImage from "../image/Image";
import styles from "./Contact.module.sass";
import VideoComponent from "../VideoComponent";
import ContactField from "../contactField/ContactField";

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
                <CustomImage src={contents.contactImage} />
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
          placeholder="Enter your email"
        />
        <p className={styles.note}>
          By click sign in you, you agree with our <Link href="/privacy"><a>privacy policy</a></Link>
        </p>
      </div>
    </div>
  );
};

export default Contact;
