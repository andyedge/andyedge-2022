import { FC } from 'react'
import { PopupButton } from '@typeform/embed-react'
import { useIsMobile } from '../../helpers/hooks'

declare interface ContactModalProps {
    text: string,
    formId: string,
    className: string
}

const ContactModal: FC<ContactModalProps> = ({ text, formId, className } : ContactModalProps) => {
    const isMobile = useIsMobile()
    const popupConfig = {
        id : formId,
        className,
        size: isMobile ? 80 : 40
    }
    return (
        <PopupButton {...popupConfig}>
            {text}
        </PopupButton>
    )
}

export default ContactModal