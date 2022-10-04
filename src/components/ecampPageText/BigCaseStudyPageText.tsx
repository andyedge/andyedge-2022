import cn from "classnames";
import styles from "./BigCaseStudyPageText.module.sass";

declare interface EcampPageTextProps {
  title: string
  info?: string
  size: string
  textAlign: string
}

const BigCaseStudyPageText = ({ title, info, size, textAlign }: EcampPageTextProps) => {
  return (
    <div className={cn(styles.section, styles.custom_section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <div className={cn("h3", styles.title, styles[size], styles[textAlign])}>
            {title}
          </div>
          {
            info ?
              <div className={cn(styles.info, styles[size])}>
                {info}
              </div>
              :
              null
          }
        </div>
      </div>
    </div>
  );
};

export default BigCaseStudyPageText;
