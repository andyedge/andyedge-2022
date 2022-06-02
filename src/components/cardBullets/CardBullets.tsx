import cn from "classnames";
import { Fragment, FC } from "react";
import ImageComp from "../image/Image";
import styles from "./CardBullets.module.sass"
import ScrollParallax from "../ScrollParallax";
import ImageType from "../../models/image.model";
import Button from '../button/Button';
import StandardContainer from '../../models/standardContainer.model';

declare interface CardBulletsProps {
  contents: StandardContainer
  bg?: string
}

const CardBullets: FC<CardBulletsProps> = ({ contents, bg } : CardBulletsProps) => {
  const { mediaPosition } = contents
  const isRightOriented = mediaPosition?.toLowerCase() === 'right'
  const galleryClasses = cn(styles.gallery, isRightOriented ? styles.gallery_right : styles.gallery_left);
  const wrapStyle = isRightOriented ? { marginRight: 'auto' } : { marginLeft: 'auto' };

  return (
    <div style={{backgroundColor: bg}} className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)}>
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
                  <ImageComp
                    src={image.url}
                    alt={image.description}
                  />
                </ScrollParallax>
              </Fragment>
            ))
          }
        </div>
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
                  <ImageComp
                    src={content.image.url}
                    alt={content.image.description}
                  />
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
      </div>
    </div>
  );
};

export default CardBullets;
