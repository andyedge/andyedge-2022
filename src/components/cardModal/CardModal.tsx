import React, { useEffect, useState } from "react";
import cn from "classnames";
import Modal from "../modal/Modal";
import styles from "./CardModal.module.sass";
import RichText from "../RichText";
import CustomImage from "../image/Image";

const CardModal = ({ visible, modals, modalIndex, onClose }: any) => {
  const [activeIndex, setActiveIndex] = useState<number> (modalIndex);
  const [item, setItem] = useState(modals[activeIndex]);

  const prevModal = () => {
    let index = activeIndex;

    if (index === 0) {
      index = modals.length - 1;
      setActiveIndex(index);
      setItem(modals[index]);
    } else {
      index = activeIndex - 1;
      setActiveIndex(index);
      setItem(modals[index]);
    }
  }

  const nextModal = () => {
    let index = activeIndex;

    if (index === modals.length - 1) {
      index = 0;
      setActiveIndex(index);
      setItem(modals[index]);
    } else {
      index = activeIndex + 1;
      setActiveIndex(index);
      setItem(modals[index]);
    }
  }

  return (
    <Modal
      containerClassName={styles.container}
      visible={visible}
      onClose={onClose}
      activeIndex={activeIndex}
    >
      <div className={styles.avatar}>
        <CustomImage
          src={item.icon}
        />
      </div>
      <div className={cn("h3", styles.trainer)}>{item.title}</div>
      <div className={styles.position}>{item?.subtitle}</div>
      <div className={styles.wrap}>
        <RichText
          richText={item.modalText}
        />
      </div>
      <div className={styles.btns}>
        <button className={cn("button-stroke", styles.button, styles.button_size)} onClick={() => prevModal()}>
          {item.leftCtaText}
        </button>
        <button className={cn("button-stroke-red-no-hover", styles.button, styles.button_size)} onClick={() => nextModal()}>
          {item.rightCtaText}
        </button>
      </div>
    </Modal>
  );
};

export default CardModal;
