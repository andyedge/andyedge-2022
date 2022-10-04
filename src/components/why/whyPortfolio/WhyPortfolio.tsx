import cn from 'classnames'
import styles from './WhyPortfolio.module.sass'
import Why from '../../../models/entities/whypage.model'
import { FC } from 'react'
import Button from '../../button/Button'
import RelatedCases from '../../caseStudies/relatedCases/RelatedCases'

declare interface WhyPortfolioProps {
    pageContent: Why
}

const WhyPortfolio: FC<WhyPortfolioProps> = ({ pageContent} : WhyPortfolioProps) => (
    <div className={cn('section', styles.section)}>
        <div className={cn('container', styles.container)}>
            <h2 className={cn(styles.title)}>{pageContent.title2}</h2>
            <p className={styles.info}>
                {pageContent.subtitle}
            </p>
        </div>
        <RelatedCases cases={pageContent.relatedCases} section='why'/>
        <div className={styles.button_container}>
            <Button link={pageContent.cta} size='big' scroll={true}/>
        </div>
    </div>
)

export default WhyPortfolio