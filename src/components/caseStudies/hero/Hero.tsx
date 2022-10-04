import { FC } from 'react'
import cn from 'classnames'

import StandardContainer from '../../../models/generic/standardContainer.model'
import CustomImage from '../../image/Image'
import styles from './Hero.module.sass'
import RichText from '../../RichText'
import ScrollParallax from '../../ScrollParallax'

declare interface CaseStudiesHeroProps {
    data: StandardContainer
    templateDesign: string    
}

const isBorderedImage = (templateDesign: string, index: number): boolean => {
    switch(templateDesign) {
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

const CaseStudiesHero: FC<CaseStudiesHeroProps> = ({ data, templateDesign } : CaseStudiesHeroProps) => (
    <div className={cn('container', styles.container)}>
        <h1 className='main-title'>{data.title}</h1>
        <div className={styles.hero_info}>
            <div className={styles.logo}>
                <CustomImage src={data.logoC}/>
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
        <div className={cn(styles.images_container, styles[`container_${templateDesign}`])}>
            {data.imagesContainer?.map((image, index) => (
                <ScrollParallax key={index} delay={index * 300} className={cn(styles[templateDesign], isBorderedImage(templateDesign, index) && 'bordered-image')}>
                    <div>
                        <CustomImage src={image}/>
                    </div>
                </ScrollParallax>
            ))}
        </div>
    </div>
)

export default CaseStudiesHero