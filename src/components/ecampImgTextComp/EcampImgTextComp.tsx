import cn from "classnames";
import styles from "./EcampImgTextComp.module.sass";
import StandardContainer from "../../models/generic/standardContainer.model";
import RichText from "../RichText";
import CustomImage from "../image/Image";
import ImageType from "../../models/generic/image.model";

declare interface EcampImgTextCompProps {
  contents: StandardContainer
}

const EcampImgTextComp = ({ contents }: EcampImgTextCompProps) => {
  const bulletsContent = contents.bulletsContainer;
  const images = contents.images;

  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <div className={styles.preview}>
            {
              images?.map((image: ImageType, index: number) => (
                <div className={styles.image_div} key={index}>
                  <CustomImage
                    src={image}
                  />
                </div>
              ))
            }
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            {
              contents.text ?
                <div className={styles.content}>
                  <RichText
                    richText={contents.text}
                  />
                </div>
                :
                null
            }
          </div>
          <div className={styles.col}>
            {!!bulletsContent?.length && (
              <ul className={styles.list}>
                {bulletsContent.map((content: any, index: number) => (
                  <li className={styles.item} key={index}>
                    {content.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcampImgTextComp;
