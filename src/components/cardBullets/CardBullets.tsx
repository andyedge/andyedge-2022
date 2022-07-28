import cn from "classnames";
import { Fragment, FC } from "react";
import CustomImage from "../image/Image";
import styles from "./CardBullets.module.sass"
import ScrollParallax from "../ScrollParallax";
import ImageType from "../../models/generic/image.model";
import StandardContainer from '../../models/generic/standardContainer.model';
import Card from './Card';
import ImageContainer from "../../models/generic/imageContainer.model";

declare interface CardBulletsProps {
  contents: StandardContainer
  section: string
  hasCardStyle?: boolean
}

const CardBullets: FC<CardBulletsProps> = ({ contents, section, hasCardStyle } : CardBulletsProps) => {
  const { mediaPosition } = contents
  const isRightOriented = mediaPosition?.toLowerCase() === 'right'
  const galleryClasses = cn(styles.gallery, isRightOriented ? styles.gallery_right : styles.gallery_left);
  const wrapStyle = isRightOriented ? styles.wrap_right : styles.wrap_left;

  return (
    <div className={cn("section-bg", styles.section, styles[section])}>
      <div className={cn("container", styles.container)}>
        <Card contents={contents} style={wrapStyle} hasCardStyle={hasCardStyle}/>
        <div
          className={galleryClasses}
        >
          {
            contents.imagesContainer?.map((image: ImageContainer, index: number) => (
              <Fragment key={'galleryimg_' + index}>
                <ScrollParallax
                  className={styles.preview}
                  animateIn="fadeInUp"
                  offset={300}
                >
                  <CustomImage src={image.image} srcDark={image.darkImage} />
                </ScrollParallax>
              </Fragment>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default CardBullets;
