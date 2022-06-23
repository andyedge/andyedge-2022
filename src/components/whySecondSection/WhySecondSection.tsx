import cn from "classnames";
import RichText from "../RichText";
import CustomImage from "../image/Image";
import styles from "./WhySecondSection.module.sass";
import ScrollParallax from "../ScrollParallax";

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
            {
              content.text ?
                <div className={styles.text}>
                  <RichText
                    richText={content.text}
                  />
                </div>
                :
                null
            }
          </div>
          {
            Object.keys(content.backgroundImage).length > 0 ?
              <>
                <ScrollParallax className={styles.background_div} animateIn="fadeInUp">
                  <CustomImage src={content.backgroundImage} />
                </ScrollParallax>
                <ScrollParallax className={styles.lines} animateIn="fadeInUp" delay={500}>
                  <img
                    src='/images/bg-line-03.svg'
                    alt='bg-line-03'
                  />
                </ScrollParallax>
                <ScrollParallax className={styles.lighthouse} animateIn="fadeInUp" delay={800}>
                  <img
                    src='/images/lighthouse-light.svg'
                    alt='lighthouse-light'
                  />
                </ScrollParallax>
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