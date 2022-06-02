import { useState } from "react";
import cn from "classnames";
import styles from "./ContactField.module.sass";
import Icon from "../icon/Icon";

const ContactField = ({ className, placeholder }: any) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: string) => {
    alert(e);
  };

  return (
    <form
      className={cn(styles.form, className)}
      action=""
      onSubmit={() => handleSubmit('Hola')}
    >
      <input
        className={styles.input}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        placeholder={placeholder}
        required
      />
      <button className={styles.btn}>
        <Icon name="arrow-right" size={14} />
      </button>
    </form>
  );
};

export default ContactField;
