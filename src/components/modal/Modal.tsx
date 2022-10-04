import { createPortal } from 'react-dom'
import OutsideClickHandler from 'react-outside-click-handler'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import React, { ReactPortal, useCallback, useEffect, useRef, useState } from 'react'
import cn from 'classnames'

import Icon from '../icon/Icon'
import styles from './Modal.module.sass'

declare interface ModalProps {
    children: JSX.Element
    closeModal: () => void
    isModalOpen: boolean
}

const CommonModal = ({ children, closeModal, isModalOpen } : ModalProps) => {
    const scrollRef = useRef(null)
    const [portal, setPortal] = useState<ReactPortal | JSX.Element>(<div></div>)

    const keydownHandler = useCallback(
        (event: any) => {
            //closes modal on "esc" keypress
            if (event.keyCode === 27) {
                closeModal()
            }
        },
        [closeModal]
    )

    const destroyPortal = () => {
        setPortal(<div></div>)
    }

    useEffect(() => {
        document.addEventListener('keydown', keydownHandler, false)
        return () => document.removeEventListener('keydown', keydownHandler, false)
    }, [keydownHandler])

    useEffect(() => {
        const htmlRef = scrollRef.current as any as HTMLElement
        if (htmlRef) {
            isModalOpen ? disableBodyScroll(htmlRef) : enableBodyScroll(htmlRef)
        }

        if (!document || !isModalOpen) {
            destroyPortal()
            return
        }

        const portalResult = (isModalOpen && (
            <div className={styles.modal} ref={scrollRef}>
                <div className={cn(styles.outer)}>
                    <OutsideClickHandler onOutsideClick={closeModal}>
                        <div className={cn(styles.container)}>
                            {children}
                            <button className={styles.close} onClick={closeModal}>
                                <Icon name='close' size={14} />
                            </button>
                        </div>

                    </OutsideClickHandler>
                </div>
            </div>
        ))

        setPortal(
            createPortal(
                portalResult,
                document.body
            )

        )
        return () => destroyPortal()
    }, [isModalOpen])
    
    return portal
}

export default CommonModal