import cn from "classnames";
import CustomImage from "../image/Image";
import styles from "./EcampImgSection.module.sass";
import ImageContainer from "../../models/generic/imageContainer.model";
import ScrollParallax from '../ScrollParallax';

declare interface EcampImgSectionProps {
  images: ImageContainer[]
  page: string
}

const EcampImgSection = ({ images, page }: EcampImgSectionProps) => {
  
  return (
    <div className={cn(styles.section, styles[page])}>
      <div className={cn("container", styles.container)}>
        <div className={styles.img_container}>
          {
            images.map((image: ImageContainer, index: number) => (
              <div className={styles.img_div} key={index}>
                <ScrollParallax>
                  <CustomImage
                    src={image}
                  />
                </ScrollParallax>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default EcampImgSection;