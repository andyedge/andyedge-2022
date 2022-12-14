import cn from "classnames";
import RichText from "../RichText";
import Button from "../button/Button";
import CustomImage from "../image/Image";
import styles from "./EcampStandardContainer.module.sass";
import ImageContainer from "../../models/generic/imageContainer.model";
import StandardContainer from "../../models/generic/standardContainer.model";

declare interface EcampStandardContainerProps {
  contents: StandardContainer
  title: boolean
  section: string
}

const EcampStandardContainer = ({ contents, title, section } : EcampStandardContainerProps) => {
  const images = contents.imagesContainer;

  return (
    <div className={cn(styles[`hero_${section}`], styles[section])}>
      <div className={cn("container", styles.container)}>
        <div>
          <div className={cn("stage", styles.stage, styles.pretitle)}>
            {contents.preTitle}
          </div>
          {
            title ?
              <h2 className={cn("h1", styles.title)}>
                {contents.title}
              </h2>
              :
              <div className={styles.empty_title}></div>
          }
          <div className={styles.content}>
            <div className={styles.wrap}>
              <div className={styles.text}>
                {contents.subtitle}
              </div>
              {contents.text ?
                <div className={styles.paragraph}>
                  <RichText richText={contents.text} />
                </div>
                :
                null
              }
              {contents.primaryButtonCta ?
                <div className={styles.mobile_button_div}>
                  <Button link={contents.primaryButtonCta} />
                </div>
                :
                null
              }
            </div>
            <div className={styles.gallery}>
              {
                images?.map((image: ImageContainer, index: number) => (
                  <div className={styles[`preview_${section}`]} key={index}>
                    <CustomImage src={image}/>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcampStandardContainer;
