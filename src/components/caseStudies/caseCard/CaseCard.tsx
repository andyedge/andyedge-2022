import StandardContainer from '../../../models/generic/standardContainer.model'
import Card from '../../cardBullets/Card'
import CustomImage from '../../image/Image'
import styles from './CaseCard.module.sass'

const imageProps = {
    fit: {
        objectFit: 'cover',
        objectPosition: 'center'
    },
    classNamne: styles.backgroundImage
}

const CaseCard = ({ contents } : { contents : StandardContainer }) => (
    <div className={styles.container}>
        <div className='container'>
            <CustomImage src={contents.backgroundImage} props={imageProps} />
            <Card contents={contents} style={styles.card}/>
        </div>
    </div>
)

export default CaseCard