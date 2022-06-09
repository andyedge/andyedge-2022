import React from "react";
import cn from "classnames";
import Modal from "../modal/Modal";
import styles from "./CardModal.module.sass";

const CardModal = ({ item, visible, onClose }: any) => {
  return (
    <Modal
      containerClassName={styles.container}
      visible={visible}
      onClose={onClose}
    >
      <div className={styles.avatar}>
        <img src={item.image} alt={item.name} />
      </div>
      <div className={cn("h3", styles.trainer)}>{item.name}</div>
      <div className={styles.position}>{item.position}</div>
      <div className={styles.wrap}>
      </div>
      <div className={styles.btns}>
        <button className={cn("button-small", styles.button)}>
          Browse all class
        </button>
      </div>
    </Modal>
  );
};

export default CardModal;
