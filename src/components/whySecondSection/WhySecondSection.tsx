import cn from "classnames";
import RichText from "../RichText";
import ImageComp from "../image/Image";
import styles from "./WhySecondSection.module.sass";

const WhySecondSection = ({ content }: any) => {
  const wrapStyle = content.mediaPosition?.toLowerCase() === 'right' ? { marginRight: 'auto' } : { marginLeft: 'auto' };

  return (
    <>
      <div className={styles.section}>
        <div className={cn(styles.container_section)}>
          <div className={styles.wrap} style={wrapStyle}>
            <h2 className={cn("h2", styles.title)}>
              {content.title}
            </h2>
            <div className={styles.text}>
              <RichText
                richText={content.text}
              />
            </div>
          </div>
          {
            Object.keys(content.backgroundImage).length > 0 ?
              <>
                <div className={styles.background_div}>
                  <ImageComp
                    src={content.backgroundImage.url}
                    alt={content.backgroundImage.description}
                  />
                </div>
                <div className={styles.lines}>
                  <img
                    src='/images/bg-line-03.svg'
                  />
                </div>

              </>
              :
              null
          }
        </div>
      </div>
    </>
  );
}

export default WhySecondSection;