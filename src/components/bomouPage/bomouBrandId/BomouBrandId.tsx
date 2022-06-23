import cn from "classnames";
import Link from "next/link";
import RichText from "../../RichText";
import CustomImage from "../../image/Image";
import styles from "./BomouBrandId.module.sass";
import ImageType from "../../../models/generic/image.model";
import StandardContainer from "../../../models/generic/standardContainer.model"


declare interface BomouBrandIdProps {
  contents: StandardContainer
}

const BomouBrandId = ({ contents }: BomouBrandIdProps) => {
  const images = contents.images;

  return (
    <div className={cn(styles.section, styles.section_background)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={styles.text}>
            {contents.subtitle}
          </div>
          {
            contents.text ?
              <div className={styles.paragraph}>
                <RichText
                  richText={contents.text}
                />
              </div>
              :
              null
          }
          {contents.ctaText !== null ?
            <div className={styles.btns}>
              <Link href="#">
                <a className={cn("button", styles.button)}> {contents.ctaText} </a>
              </Link>
            </div>
            :
            null
          }
        </div>
        <div className={styles.gallery}>
          {
            images?.map((image: ImageType, index: number) => (
              <div className={styles.preview} key={index}>
                <CustomImage src={image}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default BomouBrandId;
