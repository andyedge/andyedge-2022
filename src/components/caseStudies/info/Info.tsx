import styles from './Info.module.sass'
import Button from '../../button/Button'
import CustomImage from '../../image/Image'
import { CaseStudyInfo } from '../../../models/generic/caseStudies.model'

const categories = [{
    color: 'purple',
    name: 'UX DESIGN'
},
{
    color: 'orange',
    name: 'LOGO DESIGN'
},
{
    color: 'yellow',
    name: 'GRAPHIC DESIGN'
}]

const SmallCaseHero = ({ data } : { data : CaseStudyInfo }) => (
    <div className={'container'}>
        <div className={styles.container}>
            <div className={styles.left_row}>
                <div className={styles.labels}>
                    {categories.map((category, index) => (
                        <h6 key={index} className={`status-${category.color}`}>
                            {category.name}
                        </h6>
                    ))}
                </div>
                <h2 className='secondary-title'>{data.title}</h2>
                <p className='info-text'>{data.description}</p>
                <div className={styles.carousel}>
                    {data.carousel.length && <CustomImage src={data.carousel[0]}/>}
                </div>
            </div>
            <div className={styles.right_row}>
                <div>
                    <div>
                        {data.properties.length && data.properties.map((property, index) => (
                            <div className={styles.item} key={index}>
                                <div className={styles.parameter}>{property.label}</div>
                                <div>{property.value}</div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.text}>
                        <p>{data.extendedText}</p>
                    </div>
                    <div className={styles.list}>
                        {data.bulletPoints.map((bullet, index) => (
                            <p className={styles.box} key={index}>{bullet.title}</p>
                        ))}
                    </div>
                </div>
                {data.primaryCta?.text && (
                    <Button link={data.primaryCta} size='small'/>
                )}
            </div>
        </div>
    </div>
)

export default SmallCaseHero