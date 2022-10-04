import styles from './Info.module.sass'
import Button from '../../button/Button'
import ImageSlider from '../../imageSlider/ImageSlider'
import { CaseStudyInfo } from '../../../models/generic/caseStudies.model'
import ScrollParallax from '../../ScrollParallax'
import CategoryLabels from '../../categoryLabels/CategoryLabels'

const SmallCaseHero = ({ data }: { data: CaseStudyInfo }) => {

    const getIcon = (propertyLabel: string) => {
        switch (propertyLabel) {
            case 'Start':
                return <img src='/images/calendar-alt-regular.svg' alt='calendar-alt-regular' style={{ height: '16px', width: '16px' }} />
            case 'Term':
                return <img src='/images/clock.svg' alt='clock' style={{ height: '16px', width: '16px' }} />
            case 'Cost':
                return <img src='/images/dollar-sign.svg' alt='dollar-sign' style={{ height: '16px', width: '16px' }} />
            case 'Scope':
                return <img src='/images/expand.svg' alt='expand' style={{ height: '16px', width: '16px' }} />
            default:
                return null
        }
    }

    return (
        <div className={'container'}>
            <div className={styles.container}>
                <div className={styles.left_row}>
                    <div className={styles.labels}>
                        <CategoryLabels categories={data.categories} trim={5}/>
                    </div>
                    <h2 className='secondary-title'>{data.title}</h2>
                    <p className='info-text'>{data.description}</p>
                    <div className={styles.carousel}>
                        <ImageSlider contents={data.carousel} />
                    </div>
                </div>
                <div className={styles.right_row}>
                    <div>
                        <div>
                            {data.properties.length && data.properties.map((property, index) => (
                                <div className={styles.item} key={index}>
                                    <div className={styles.icon}> {getIcon(property.label)} </div>
                                    <div className={styles.parameter}>{property.label}</div>
                                    <div className={styles.value}>{property.value}</div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.text}>
                            <p>{data.extendedText}</p>
                        </div>
                        <div className={styles.list}>
                            {data.bulletPoints.map((bullet, index) => (
                                <ScrollParallax key={index} delay={(index + 2) * 200}>
                                    <p className={styles.box}>{bullet.title}</p>
                                </ScrollParallax>
                            ))}
                        </div>
                    </div>
                    {data.primaryCta?.text && (
                        <Button link={data.primaryCta} size='small' />
                    )}
                </div>
            </div>
        </div>
    )
}

export default SmallCaseHero