import cn from 'classnames'

import StandardContainer from '../../../models/standardContainer.model'
import CustomImage from '../../image/Image'
import styles from './Hero.module.sass'
import RichText from '../../RichText'

const SmallCaseHero = ({ data } : { data: StandardContainer }) => (
    <div className={cn('container', styles.container)}>
        <h1 className='main-title'>{data.title}</h1>
        <div className={styles.hero_info}>
            <div className={styles.logo}>
                <CustomImage src={data.logo}/>
            </div>
            <div className={styles.text_section}>
                <h2 className='secondary-title'>{data.subtitle}</h2>
                <div className='info-text'>
                    <RichText richText={data.text} />
                </div>
            </div>
        </div>
        <div className={styles.images_container}>
            <CustomImage src={data.logo}/>
        </div>
    </div>
)

export default SmallCaseHero