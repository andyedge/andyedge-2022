import React, { ReactPortal, useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import OutsideClickHandler from "react-outside-click-handler";
import cn from "classnames";
import styles from "./Modal.module.sass";
import Icon from "../icon/Icon";

const Modal = ({
  outerClassName,
  containerClassName,
  visible,
  onClose,
  activeIndex,
  children,
}: any) => {
  const escFunction = useCallback(
    (e: any) => {
      if (e.keyCode === 27) {
        onClose();
      }
    },
    [onClose]
  );
  
  const [portal, setPortal] = useState<ReactPortal | JSX.Element>(<div></div>);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  const scrollRef = useRef(null);

  useEffect(() => {
    const htmlRef = scrollRef.current as any as HTMLElement
    if(htmlRef) {
      visible ? disableBodyScroll(htmlRef) : enableBodyScroll(htmlRef);
    }
  }, [visible]);

  useEffect(() => {    
    if (document) {
      setPortal(
        createPortal(
          visible && (
            <div className={styles.modal} ref={scrollRef}>
              <div className={cn(styles.outer, outerClassName)}>
                <OutsideClickHandler onOutsideClick={onClose}>
                  <div className={cn(styles.container, containerClassName)}>
                    {children}
                    <button className={styles.close} onClick={onClose}>
                      <Icon name="close" size={14} />
                    </button>
                  </div>
                </OutsideClickHandler>
              </div>
            </div>
          ),
          document.body
        )
      )      
    }
  }, [activeIndex]);

  return portal;
};

export default Modal;
