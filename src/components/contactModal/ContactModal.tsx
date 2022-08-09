import Modal from '../modal/Modal'
import { useForm, ValidationError } from '@formspree/react'
import styles from './ContactModal.module.sass'

const fields = [{
    id: 'firstName',
    displayName: 'First name',
    type: 'text'
}, {
    id: 'lastName'   ,
    displayName: 'Last name',
    type: 'text'
},
    {
    id: 'email',
    displayName: 'Email',
    type: 'email'
}]

const ContactModal = ({ isModalVisible, onClose } : any) => {
    const [state, handleSubmit] = useForm('mqkjzrvr')

    if(!isModalVisible) {
        return null
    }

    return (
        <Modal
            containerClassName={styles.modal}
            visible={isModalVisible}
            onClose={onClose}
        >
            <div className={styles.container}>
                <h2>Reach out</h2>
                {state.succeeded ?
                    <p>Form submitted!</p> :
                    <form onSubmit={handleSubmit}>
                        {fields.map((field, index) => (
                            <div key={index}>
                                <label htmlFor={field.id}>{field.displayName}</label>
                                <input
                                    id={field.id}
                                    type={field.type}
                                    name={field.id}
                                />
                                <ValidationError
                                    prefix={field.displayName}
                                    field={field.id}
                                    errors={state.errors}
                                />
                            </div>
                        ))}
                        <button
                            type='submit' 
                            className='button-default' 
                            disabled={state.submitting}
                        >
                            Submit
                        </button>
                    </form>
                }
            </div>
        </Modal>
    )
}

export default ContactModal