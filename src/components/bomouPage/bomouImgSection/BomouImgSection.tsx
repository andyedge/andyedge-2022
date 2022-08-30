import cn from "classnames";
import CustomImage from "../../image/Image";
import ImageType from "../../../models/generic/image.model";
import styles from "./BomouImgSection.module.sass";
import ImageContainer from "../../../models/generic/imageContainer.model";

declare interface BomouImgSectionProps {
  image1: ImageContainer
  image2: ImageContainer
  image3: ImageContainer
  image4: ImageContainer
  image5: ImageContainer
}

const BomouImgSection = ({ image1, image2, image3, image4, image5 }: BomouImgSectionProps) => {

  return (
    <div className={cn(styles.section)}>
      <div className={cn("container-fluid", styles.container)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.image1}>
            <CustomImage
              src={image1}
            />
          </div>
          <div className={styles.image2}>
            <CustomImage
              src={image2}
            />
          </div>
        </div>
        <div className={styles.img_container}>
          <div className={styles.image3}>
            <CustomImage
              src={image3}
            />
          </div>
          <div className={styles.image4}>
            <CustomImage
              src={image4}
            />
          </div>
        </div>
        <div className={cn("container", styles.container)}>
          <div className={styles.image5}>
            <CustomImage
              src={image5}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BomouImgSection;