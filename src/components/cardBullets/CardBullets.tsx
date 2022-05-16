import cn from "classnames";
import Link from "next/link";
import Icon from "../icon/Icon";
import ImageComp from "../image/Image";
import styles from "./CardBullets.module.sass"
import ScrollParallax from "../ScrollParallax";
import ImageType from "../../models/image.model";


const CardBullets = ({ contents }: any) => {
  const bulletsContent = contents.bulletsContainer;
  const images = contents.images;
  const mediaPosition = contents.mediaPosition;
  const galleryClasses = mediaPosition.toLowerCase() === 'right' ? cn(styles.gallery, styles.gallery_right) :
    cn(styles.gallery, styles.gallery_left);
  const wrapStyle = mediaPosition.toLowerCase() === 'right' ? { marginRight: 'auto' } : { marginLeft: 'auto' };

  return (
    <div className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div
          className={galleryClasses}
        >
          {
            images.map((image: ImageType) => (
              <>
                <ScrollParallax
                  className={styles.preview}
                  animateIn="fadeInUp"
                  offset={300}
                >
                  <img
                    src={image.url}
                    alt={image.description}
                  />
                </ScrollParallax>
              </>
            ))
          }
        </div>
        <div className={styles.wrap} style={wrapStyle}>
          <h2 className={cn("h2", styles.title)}> {contents.title} </h2>
          <div className={styles.info}>
            {contents.subtitle}
          </div>
          <div className={styles.list}>
            {bulletsContent.map((content: any, index: number) => (
              <div className={styles.item} key={index}>
                <div
                  className={styles.icon}
                >
                  <img
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
          <div className={styles.btns}>
            <Link href={`/${contents.ctaPageLink}`}>
              <a className={cn("button", styles.button)}>
                {contents.ctaText}
                <Icon name="arrow-right" size="20" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBullets;
