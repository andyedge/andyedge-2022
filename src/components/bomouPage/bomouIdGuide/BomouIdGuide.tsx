import cn from "classnames";
import RichText from "../../RichText";
import Button from "../../button/Button";
import CustomImage from "../../image/Image";
import styles from "./BomouIdGuide.module.sass";
import ImageType from "../../../models/generic/image.model";
import StandardContainer from "../../../models/generic/standardContainer.model";

declare interface BomouIdGuide {
  contents: StandardContainer
}

const BomouIdGuide = ({ contents }: BomouIdGuide) => {
  const images = contents.images;

  return (
    <div className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={styles.logo}>
            <CustomImage
              src={contents.logo}
            />
          </div>
          <h2 className={cn("h2", styles.title)}>
            {contents.title}
          </h2>
          {contents.text && (
            <div className={styles.paragraph}>
              <RichText richText={contents.text} />
            </div>
          )}
          {contents.ctaText && (
            <Button link={contents.ctaPageLink} text={contents.ctaText} size='small' showIcon={false} />
          )}
          <p className={styles.text}>
            {contents.subtitle}
          </p>
        </div>
        <div className={styles.gallery}>
          {
            images?.map((image: ImageType, index: number) => (
              <div className={styles.preview} key={index}>
                <CustomImage src={image} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default BomouIdGuide;