import cn from "classnames";
import { Fragment } from "react";
import RichText from "../RichText";
import Button from "../button/Button";
import CustomImage from "../image/Image";
import styles from "./TextBullets.module.sass";
import ScrollParallax from "../ScrollParallax";
import ImageType from "../../models/generic/image.model";
import ImageContainer from "../../models/generic/imageContainer.model";
import StandardContainer from "../../models/generic/standardContainer.model";

declare interface TextBulletsProps {
  contents: StandardContainer
  section: string
}

const TextBullets = ({ contents, section }: TextBulletsProps) => {
  const bulletsContent = contents.bulletsContainer;
  const images = contents.imagesContainer;
  const isIdentityDesign = section === 'identity_design';
  const isBomou = section === 'bomou';
  const containerClasses = cn("container", "container-full", isBomou ? styles.container_bomou : styles.container)

  return (
    <div className={cn(styles.section, styles[section], styles[`section_${section}`])}>
      <div className={containerClasses}>
        <div className={styles.wrap}>
          <h2 className={cn("h2", styles.title)}>
            {contents.title}
          </h2>
          {
            contents.text ?
              <div className={styles.info}>
                <RichText
                  richText={contents.text}
                />
              </div>
              :
              null
          }
          {!!bulletsContent?.length && (
            <ul className={styles.list}>
              {bulletsContent.map((content: any, index: number) => (
                <li className={styles.item} key={index}>
                  {content.title}
                </li>
              ))}
            </ul>
          )}
          {contents.primaryButtonCta && (
            <Button
              link={contents.primaryButtonCta}
            />
          )}
        </div>
        <div className={isBomou ? styles.gallery_bomou : styles.gallery}>
          {
            images?.map((image: ImageContainer, index: number) => (
              <Fragment key={'imgTxtBullet_' + index}>
                <ScrollParallax
                  className={styles[`preview_${section}`]}
                  animateIn="fadeInUp"
                >
                  <CustomImage src={image.image} srcDark={image.darkImage}/>
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
