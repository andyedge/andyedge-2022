import cn from "classnames";
import styles from "./TextBullets.module.sass";
import ScrollParallax from "../ScrollParallax";
import RichText from "../RichText";
import ImageType from "../../models/image.model";
import ImageComp from "../image/Image";
import { Fragment } from "react";
import Button from '../button/Button';

const TextBullets = ({ contents, section }: any) => {
  const bulletsContent = contents.bulletsContainer;
  const images = contents.images;

  return (
    <div className={styles.section}>
      <div className={cn("container", "container-full", styles.container)}>
        <div className={styles.wrap}>
          <h2 className={cn("h2", styles.title)}>
            {contents.title}
          </h2>
          <div className={styles.info}>
            <RichText
              richText={contents.text}
            />
          </div>
          {!!bulletsContent.length && (
            <ul className={styles.list}>
              {bulletsContent.map((content: any, index: number) => (
                <li className={styles.item} key={index}>
                  {content.title}
                </li>
              ))}
            </ul>
          )}
          {contents.ctaText !== null && (contents.ctaPageLink !== null || contents.ctaVideoLink !== null) ?
            <Button link={contents.ctaPageLink} text={contents.ctaText} />
            :
            null
          }
        </div>
        <div className={styles.gallery}>
          {
            images.map((image: ImageType, index: number) => (
              <Fragment key={'imgTxtBullet_' + index}>
                <ScrollParallax
                  className={section === 'IdentityDesign' ? styles.preview_id_design : styles.preview}
                  animateIn="fadeInUp"
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
      </div>
    </div>
  );
};

export default TextBullets;
