import { FC, useState } from 'react'
import cn from 'classnames'

import LinkType from '../../../models/generic/link.model'
import styles from '../button.module.sass'
import CustomImage from '../../image/Image'
import CommonModal from '../../Modal/Modal'

declare interface EmbedContentProps {
    props: {
        whiteButtonClass: string
        iconExists: Boolean
        link: LinkType
        size: string
    }
}


const EmbedContent: FC<EmbedContentProps> = ({ props }: EmbedContentProps) => {
    const { whiteButtonClass, size, iconExists, link } = props
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const toggleModal = () => setIsModalOpen(!isModalOpen)
    const isXDContent = link.url.includes('xd.adobe.com')

    return (
        <button
            className={cn(whiteButtonClass, styles[size], styles.button, isXDContent && styles.hide_on_mobile, iconExists && styles.button_a)}
            onClick={toggleModal}
        >
            {link.text}
            {
                link.icon && link.icon?.url !== '' ?
                    <div className={cn(styles.icon_wrapper)}>
                        <CustomImage
                            src={{ image: link.icon }}
                        />
                    </div>
                    :
                    null
            }
            <CommonModal
                closeModal={toggleModal}
                isModalOpen={isModalOpen}
            >
                <div className={styles.iframe}>
                    <iframe width={'100%'} height={'100%'} src={link.url}></iframe>
                </div>
            </CommonModal>
        </button>
    )
}

export default EmbedContent