import cn from "classnames";
import Icon from "../icon/Icon";
import styles from "./TitleShare.module.sass";
import { getUrlToShare } from "../../helpers/helpers";
import LinkType from "../../models/generic/link.model";

declare interface TitleShareProps {
  title: LinkType
  section: string
  background: string
}

const TitleShare = ({ title, section, background }: TitleShareProps) => {
  const sectionClassnames = cn(styles[section], background !== '' ? styles[`background_${background}`] : '');

  return (
    <div className={sectionClassnames} id={title.sectionId}>
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
          <button className={cn("button-circle-stroke", styles.button)} onClick={() => getUrlToShare(title.sectionId)}>
            <Icon name="download" size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitleShare;
