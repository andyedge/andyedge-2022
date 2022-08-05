import cn from "classnames";
import RichText from "../../RichText";
import Button from "../../button/Button";
import CustomImage from "../../image/Image";
import styles from "./BomouIdGuide.module.sass";
import ImageContainer from "../../../models/generic/imageContainer.model";
import StandardContainer from "../../../models/generic/standardContainer.model";

declare interface BomouIdGuide {
  contents: StandardContainer
}

const BomouIdGuide = ({ contents }: BomouIdGuide) => {
  const images = contents.imagesContainer;

  return (
    <div className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={styles.logo}>
            {
              contents.logoC.image.url !== '' ?
                <CustomImage
                  src={contents.logoC.image}
                  srcDark={contents.logoC.darkImage}
                />
                :
                null
            }
          </div>
          <h2 className={cn("h2", styles.title)}>
            {contents.title}
          </h2>
          {contents.text && (
            <div className={styles.paragraph}>
              <RichText richText={contents.text} />
            </div>
          )}
          {contents.primaryButtonCta && (
            <Button
              link={contents.primaryButtonCta}
              size={'small'}
            />
          )}
          <p className={styles.text}>
            {contents.subtitle}
          </p>
        </div>
        <div className={styles.gallery}>
          {
            images?.map((image: ImageContainer, index: number) => (
              <div className={styles.preview} key={index}>
                <CustomImage src={image.image} srcDark={image.darkImage} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default BomouIdGuide;
