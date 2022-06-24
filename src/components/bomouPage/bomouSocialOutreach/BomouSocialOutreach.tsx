import cn from "classnames";
import Link from "next/link";
import RichText from "../../RichText";
import CustomImage from "../../image/Image";
import styles from "./BomouSocialOutreach.module.sass";
import ImageType from "../../../models/generic/image.model";
import StandardContainer from "../../../models/generic/standardContainer.model";


declare interface BomouSocialOutreachProps {
  contents: StandardContainer
}

const BomouSocialOutreach = ({ contents }: BomouSocialOutreachProps) => {
  const images = contents.images;

  return (
    <div className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={styles.text}>
            {contents.title}
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
                <CustomImage src={image} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default BomouSocialOutreach;
