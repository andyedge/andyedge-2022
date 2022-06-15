import cn from "classnames";
import { Fragment, FC } from "react";
import CustomImage from "../image/Image";
import styles from "./CardBullets.module.sass"
import ScrollParallax from "../ScrollParallax";
import ImageType from "../../models/generic/image.model";
import Button from '../button/Button';
import StandardContainer from '../../models/generic/standardContainer.model';
import Card from './Card';

declare interface CardBulletsProps {
  contents: StandardContainer
  section: string
}

const CardBullets: FC<CardBulletsProps> = ({ contents, section } : CardBulletsProps) => {
  const { mediaPosition } = contents
  const isRightOriented = mediaPosition?.toLowerCase() === 'right'
  const galleryClasses = cn(styles.gallery, isRightOriented ? styles.gallery_right : styles.gallery_left);
  const wrapStyle = isRightOriented ? { marginRight: 'auto' } : { marginLeft: 'auto' };

  return (
    <div className={cn("section-bg", styles.section, styles[section])}>
      <div className={cn("container", styles.container)}>
        <Card contents={contents} wrapStyle={wrapStyle}/>
        <div
          className={galleryClasses}
        >
          {
            contents.images?.map((image: ImageType, index: number) => (
              <Fragment key={'galleryimg_' + index}>
                <ScrollParallax
                  className={styles.preview}
                  animateIn="fadeInUp"
                  offset={300}
                >
                  <CustomImage src={image} />
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
