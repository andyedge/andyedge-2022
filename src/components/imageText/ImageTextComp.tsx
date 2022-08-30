import cn from "classnames";
import RichText from "../RichText";
import CustomImage from "../image/Image";
import { useEffect, useState } from "react";
import styles from "./ImageTextComp.module.sass";
import useDarkMode from "@fisch0920/use-dark-mode";
import ImageContainer from "../../models/generic/imageContainer.model";
import StandardContainer from "../../models/generic/standardContainer.model";

declare interface ImageTextCompProps {
  content: StandardContainer
  isFirst: boolean
  isLast: boolean
}

const ImageTextComp = ({ content, isFirst, isLast }: ImageTextCompProps) => {
  const darkMode = useDarkMode(false);
  const [lineImgSrc, setLineImgSrc] = useState('');
  
  const images = content.imagesContainer;
  let galleryClasses = cn(styles.gallery);
  let wrapClasses = cn(styles.wrap);
  let lineClass = '';
  const titleClass = isFirst ? cn("h1", styles.title) : cn("h2", styles.title);

  if (content.mediaPosition?.toLowerCase() === 'left') {
    galleryClasses = cn(styles.gallery, styles.gallery_left);
    wrapClasses = cn(styles.wrap, styles.wrap_left);    
    lineClass = cn(styles.line_left);
  } else {
    galleryClasses = cn(styles.gallery, styles.gallery_right);
    wrapClasses = cn(styles.wrap, styles.wrap_right);    
    lineClass = cn(styles.line_right);
  }

  useEffect(() => {
    if (content.mediaPosition?.toLowerCase() === 'left') {
      darkMode.value ? setLineImgSrc('/images/bg-line-01-dark.svg') : setLineImgSrc('/images/bg-line-01.svg');      
    } else {
      darkMode.value ? setLineImgSrc('/images/bg-line-02-dark.svg') : setLineImgSrc('/images/bg-line-02.svg');
    }
  }, [darkMode.value])

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
              images?.map((image: ImageContainer, index: number) => (
                <div className={styles.preview} key={'txtImg_' + index}>
                  <CustomImage src={image} />
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