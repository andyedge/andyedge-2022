import cn from "classnames";
import Link from "next/link";
import RichText from "../RichText";
import CustomImage from "../image/Image";
import VideoComponent from "../VideoComponent";
import ImageType from "../../models/image.model";
import styles from "./EcampStandardContainer.module.sass";

const EcampStandardContainer = ({ contents, title }: any) => {
  const videoClassnamesObj = {
    videoDivClassname: '',
    videoClassname: styles.hero_video,
    playButtonClassname: cn("play", styles.play)
  }

  const images = contents.images;

  return (
    <div className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={cn("stage", styles.stage)}>
            {contents.preTitle}
          </div>
          {
            title ?
              <h2 className={cn("h1", styles.title)}>
                {contents.title}
              </h2>
              :
              null
          }
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
          {contents.ctaText !== null ?
            <div className={styles.btns}>
              <Link href="#">
                <a className={cn("button", styles.button)}> {contents.ctaText} </a>
              </Link>
            </div>
            :
            null
          }
        </div>
        <div className={styles.gallery}>
          {
            images.map((image: ImageType, index: number) => (
              <div className={styles.preview} key={index}>
                <CustomImage src={image}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default EcampStandardContainer;
