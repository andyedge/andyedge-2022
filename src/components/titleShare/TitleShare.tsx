import cn from "classnames";
import Icon from "../icon/Icon";
import styles from "./TitleShare.module.sass";

declare interface TitleShareProps {
    title: string
    section: string
}

const TitleShare = ({title, section}: TitleShareProps) => {
  return (
    <div className={styles[section]}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h1 className={cn("h1", styles.title)}>
            {title}
          </h1>
          <button className={cn("button-circle-stroke", styles.button)}>
            <Icon name="download" size={22} />
          </button>
        </div>        
      </div>
    </div>
  );
};

export default TitleShare;
