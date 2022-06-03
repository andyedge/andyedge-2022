import cn from "classnames";
import CustomImage from "../image/Image";
import styles from "./Contact.module.sass";
import ContactField from "../contactField/ContactField";
import VideoComponent from "../VideoComponent";
import Link from 'next/link';

const Contact = ({ contents }: any) => {
  const videoClassnamesObj = {
    videoDivClassname: styles.video_div,
    videoClassname: styles.contact_video,
    playButtonClassname: cn("play", styles.play_button)
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
        <div className={styles.note}>
          By click sign in you, you agree with Stacks <Link href="/#"><a>terms</a></Link> and{" "}
          <Link href="/">
            <a>policy</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
