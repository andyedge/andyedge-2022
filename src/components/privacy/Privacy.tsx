import { FC } from 'react'
import Privacy from '../../models/entities/privacy.model'
import RichText from '../RichText'
import styles from './Privacy.module.sass'

declare interface PrivacyProps {
    contents: Privacy
}

const PrivacyComponent: FC<PrivacyProps> = ({ contents } : PrivacyProps) => (
    <div className='container'>
        <div className={styles.privacy}>
            <h1>{contents.title}</h1>
            <RichText richText={contents.content}/>
        </div>
    </div>
)

export default PrivacyComponent