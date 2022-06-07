import cn from "classnames";
import { Fragment, FC } from "react";
import CustomImage from "../image/Image";
import styles from "./CardBullets.module.sass"
import ScrollParallax from "../ScrollParallax";
import ImageType from "../../models/image.model";
import Button from '../button/Button';
import StandardContainer from '../../models/standardContainer.model';

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
        <div className={styles.wrap} style={wrapStyle}>
          <h2 className={cn("h2", styles.title)}> {contents.title} </h2>
          <div className={styles.info}>
            {contents.subtitle}
          </div>
          <div className={styles.list}>
            {contents.bulletsContainer?.map((content: any, index: number) => (
              <div className={styles.item} key={index}>
                <div
                  className={styles.icon}
                >
                  <CustomImage src={content.image} />
                </div>
                <div className={styles.details}>
                  <div className={styles.subtitle}>{content.title}</div>
                  <div className={styles.content}>{content.text}</div>
                </div>
              </div>
            ))}
          </div>
          <Button link={contents.ctaPageLink} text={contents.ctaText} />
        </div>
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
