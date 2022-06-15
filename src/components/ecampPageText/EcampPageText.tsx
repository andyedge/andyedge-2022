import cn from "classnames";
import styles from "./EcampPageText.module.sass";

declare interface EcampPageTextProps {
  title: string
  info?: string
}

const EcampPageText = ({ title, info }: EcampPageTextProps) => {
  return (
    <div className={cn(styles.section, styles.custom_section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <div className={cn("h3", styles.title)}>
            {title}
          </div>
          {
            info ?
              <div className={styles.info}>
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

export default EcampPageText;
