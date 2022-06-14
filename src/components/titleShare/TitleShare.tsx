import cn from "classnames";
import Icon from "../icon/Icon";
import styles from "./TitleShare.module.sass";

declare interface TitleShareProps {
    title: string
    section: string
    background: string
}

const TitleShare = ({title, section, background}: TitleShareProps) => {
  const sectionClassnames = cn(styles[section], background !== '' ? styles[`background_${background}`] : '');

  return (
    <div className={sectionClassnames}>
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
