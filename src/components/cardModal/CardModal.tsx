import cn from "classnames";
import RichText from "../RichText";
import Modal from "../modal/Modal";
import React, { useState } from "react";
import CustomImage from "../image/Image";
import styles from "./CardModal.module.sass";
import StandardCardContainer from "../../models/generic/standardCardContainer.model";

declare interface CardModalProps {
  visible: boolean
  modals: StandardCardContainer[]
  modalIndex: number
  onClose: () => void
}

const CardModal = ({ visible, modals, modalIndex, onClose }: CardModalProps) => {
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
          src={{image: item.icon}}
        />
      </div>
      <h3 className={cn("h3", styles.trainer)}>{item.title}</h3>
      <div className={styles.position}>{item.subtitle}</div>
      <div className={styles.wrap}>
        <RichText
          richText={item.modalText}
        />
      </div>
      <div className={styles.btns}>
        <button className={cn("button-default", "button-stroke", styles.button, styles.button_size)} onClick={() => prevModal()}>
          {item.leftCtaText}
        </button>
        <button className={cn("button-default", "button-stroke-red-no-hover", styles.button, styles.button_size)} onClick={() => nextModal()}>
          {item.rightCtaText}
        </button>
      </div>
    </Modal>
  );
};

export default CardModal;
