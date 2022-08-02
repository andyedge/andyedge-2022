import cn from "classnames";
import RichText from "../../RichText";
import Button from "../../button/Button";
import CustomImage from "../../image/Image";
import styles from "./BomouBrandId.module.sass";
import ImageType from "../../../models/generic/image.model";
import StandardContainer from "../../../models/generic/standardContainer.model"
import ImageContainer from "../../../models/generic/imageContainer.model";

declare interface BomouBrandIdProps {
  contents: StandardContainer
}

const BomouBrandId = ({ contents }: BomouBrandIdProps) => {
  const images = contents.imagesContainer;

  return (
    <div className={cn(styles.section, styles.section_background)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={styles.text}>
            {contents.subtitle}
          </div>
          {
            contents.text ?
              <div className={styles.paragraph}>
                <RichText
                  richText={contents.text}
                />
              </div>
              :
              null
          }
          {contents.primaryButtonCta ?
            <Button
              link={contents.primaryButtonCta}
              size={'tiny'}
            />
            :
            null
          }
        </div>
        <div className={styles.gallery}>
          {
            images?.map((image: ImageContainer, index: number) => (
              <div className={styles.preview} key={index}>
                <CustomImage src={image.image} srcDark={image.darkImage}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default BomouBrandId;
