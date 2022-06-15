import cn from "classnames";
import RichText from "../RichText";
import CustomImage from "../image/Image";
import ImageType from "../../models/generic/image.model";
import styles from "./ImageTextComp.module.sass";

const ImageTextComp = ({ content, isFirst, isLast }: any) => {
  const images = content.images;
  let galleryClasses = cn(styles.gallery);
  let wrapClasses = cn(styles.wrap);
  let lineImgSrc = '';
  let lineClass = ''
  const titleClass = isFirst ? cn("h1", styles.title) : cn("h2", styles.title);

  if (content.mediaPosition?.toLowerCase() === 'left') {
    galleryClasses = cn(styles.gallery, styles.gallery_left);
    wrapClasses = cn(styles.wrap, styles.wrap_left);
    lineImgSrc = '/images/bg-line-01.svg';
    lineClass = cn(styles.line_left);
  } else {
    galleryClasses = cn(styles.gallery, styles.gallery_right);
    wrapClasses = cn(styles.wrap, styles.wrap_right);
    lineImgSrc = '/images/bg-line-02.svg';
    lineClass = cn(styles.line_right);
  }

  return (
    <>
      <div className={styles.section}>
        <div className={cn("container", styles.container)}>
        <div className={wrapClasses}>
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
          <div className={galleryClasses}>
            {
              images.map((image: ImageType, index: number) => (
                <div className={styles.preview} key={'txtImg_' + index}>
                  <CustomImage src={image}/>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      {
        !isLast ?
          <div className={lineClass}>
            <img
              src={lineImgSrc}
            />
          </div>
          :
          null
      }
    </>
  );
}

export default ImageTextComp;