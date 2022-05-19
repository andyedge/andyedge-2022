import cn from "classnames";
import RichText from "../RichText";
import ImageComp from "../image/Image";
import ImageType from "../../models/image.model";
import styles from "./ImageTextComp.module.sass";

const ImageTextComp = ({ content, isFirst }: any) => {
  const images = content.images;
  const galleryClasses = content.mediaPosition?.toLowerCase() === 'right' ? cn(styles.gallery, styles.gallery_right) :
    cn(styles.gallery, styles.gallery_left);
  const wrapStyle = content.mediaPosition?.toLowerCase() === 'right' ? { marginRight: 'auto' } : { marginLeft: 'auto' };
  const titleClass = isFirst ? cn("h1", styles.title) : cn("h2", styles.title);

  return (
    <>
      <div className={styles.section}>
        <div className={cn("container", styles.container)}>
          {
            Object.keys(content.backgroundImage).length > 0 ?
            <div className={styles.background_div}>
              <ImageComp
                src={content.backgroundImage.url}
                alt={content.backgroundImage.description}               
              />
            </div>
            :
            null
          }
          <div className={galleryClasses}>
            {
              images.map((image: ImageType, index: number) => (
                <div className={styles.preview} key={'txtImg_' + index}>
                  <ImageComp
                    src={image.url}
                    alt={image.description}
                  />
                </div>
              ))
            }
          </div>
          <div className={styles.wrap} style={wrapStyle}>
            {
              isFirst ?
                <h1 className={titleClass}>
                  {content.title}
                </h1>
                :
                <h2 className={titleClass}>
                  {content.title}
                </h2>
            }

            <div className={styles.text}>
              <RichText
                richText={content.text}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageTextComp;