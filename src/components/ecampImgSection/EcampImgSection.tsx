import cn from "classnames";
import CustomImage from "../image/Image";
import ImageType from "../../models/image.model";
import styles from "./EcampImgSection.module.sass";

declare interface EcampImgSectionProps {
  images: ImageType[]
  page: string
}

const EcampImgSection = ({ images, page }: EcampImgSectionProps) => {

  return (
    <div className={cn(styles.section, styles[page])}>
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

export default EcampImgSection;