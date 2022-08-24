import { FC } from 'react'
import { PopupButton } from '@typeform/embed-react'

declare interface ContactModalProps {
    text: string,
    formId: string,
    className: string
}

const ContactModal: FC<ContactModalProps> = ({ text, formId, className } : ContactModalProps) => {
    return <PopupButton id={formId} className={className} enableSandbox>{text}</PopupButton>
}

export default ContactModal