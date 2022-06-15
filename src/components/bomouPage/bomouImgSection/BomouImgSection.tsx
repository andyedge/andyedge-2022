import cn from "classnames";
import CustomImage from "../../image/Image";
import ImageType from "../../../models/generic/image.model";
import styles from "./BomouImgSection.module.sass";

declare interface BomouImgSectionProps {
  images: ImageType[]
}

const BomouImgSection = ({ images }: BomouImgSectionProps) => {

  return (
    <div className={cn(styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.img_container}>
          {
            images.map((image: ImageType, index: number) => (
              <div className={styles.img_div} key={index}>
                <CustomImage
                  src={image}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default BomouImgSection;