import { FC } from 'react'
import cn from 'classnames'

import StandardContainer from '../../../models/generic/standardContainer.model'
import CustomImage from '../../image/Image'
import styles from './Hero.module.sass'
import RichText from '../../RichText'

declare interface CaseStudiesHeroProps {
    data: StandardContainer
    caseName: string    
}

const isBorderedImage = (caseName: string, index: number): boolean => {
    switch(caseName) {
        case 'verdict':
            return index === 0 || index === 1
        case 'reach-stack':
        case 'privacy-hero':
        case 'parallel':
        case 'max-insurance':
        case 'uberflip':
            return true
        case 'fort-reports':
            return index === 0
        default:
            return false
    }
}

const CaseStudiesHero: FC<CaseStudiesHeroProps> = ({ data, caseName } : CaseStudiesHeroProps) => (
    <div className={cn('container', styles.container)}>
        <h1 className='main-title'>{data.title}</h1>
        <div className={styles.hero_info}>
            <div className={styles.logo}>
                <CustomImage src={data.logo} />
            </div>
            <div className={styles.text_section}>
                <h2 className='secondary-title'>{data.subtitle}</h2>
                {
                    data.text ?
                        <div className='info-text'>
                            <RichText richText={data.text} />
                        </div>
                        :
                        null
                }
            </div>
        </div>
        <div className={styles.images_container}>
            {data.images?.map((image, index) => (
                <div key={index} className={cn(styles[caseName], isBorderedImage(caseName, index) && 'bordered-image')}>
                    <CustomImage src={image} />
                </div>
            ))}
        </div>
    </div>
)

export default CaseStudiesHero