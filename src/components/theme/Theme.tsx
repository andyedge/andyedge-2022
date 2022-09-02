import cn from "classnames";
import Icon from "../icon/Icon";
import styles from "./Theme.module.sass";
import useDarkMode from "@fisch0920/use-dark-mode";

const Theme = ({ className }: any) => {
  const darkMode = useDarkMode(false);

  return (
    <label className={cn(styles.theme, className)}>
      <input
        className={styles.input}
        checked={darkMode.value}
        onClick={darkMode.toggle}
        type="checkbox"
        readOnly
      />
      <span className={styles.inner}>
        <span className={styles.box}></span>
        <span className={styles.icon}>
          <Icon name="moon" size={24} />
          <Icon name="sun" size={24} />
        </span>
      </span>
    </label>
  );
};

export default Theme;
