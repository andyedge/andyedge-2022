import cn from "classnames";
import Link from "../../models/generic/link.model";
import Icon from "../icon/Icon";
import styles from "./TitleShare.module.sass";

declare interface TitleShareProps {
  title: Link
  section: string
  background: string
}

const TitleShare = ({ title, section, background }: TitleShareProps) => {
  const sectionClassnames = cn(styles[section], background !== '' ? styles[`background_${background}`] : '');

  return (
    <div className={sectionClassnames}>
      <div className={cn("container", styles.container)}>
        {
          title.preText ?
            <div className={cn("stage", styles.stage, styles.preText)}>
              {title.preText}
            </div>
            :
            null
        }
        <div className={styles.head}>
          <h2 className={cn("h1", styles.title)}>
            {title.text}
          </h2>
          <button className={cn("button-circle-stroke", styles.button)}>
            <Icon name="download" size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitleShare;
