import cn from "classnames";
import RichText from "../../RichText";
import Button from "../../button/Button";
import CustomImage from "../../image/Image";
import styles from "./BomouSocialOutreach.module.sass";
import ImageType from "../../../models/generic/image.model";
import StandardContainer from "../../../models/generic/standardContainer.model";
import ImageContainer from '../../../models/generic/imageContainer.model';

declare interface BomouSocialOutreachProps {
  contents: StandardContainer
}

const BomouSocialOutreach = ({ contents }: BomouSocialOutreachProps) => {
  const images = contents.imagesContainer;

  return (
    <div className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={styles.text}>
            {contents.title}
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
              size={'auto'}
            />
            :
            null
          }
        </div>
        <div className={styles.gallery}>
          {
            images?.map((image: ImageContainer, index: number) => (
              <div className={cn('bordered-image', styles.preview)} key={index}>
                <CustomImage src={image} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default BomouSocialOutreach;
