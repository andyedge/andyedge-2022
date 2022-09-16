import { FC } from 'react'
import PortfolioCaseStudy from '../../../models/generic/portfolioCaseStudy.model'
import Link from '../../../models/generic/link.model'
import styles from './RelatedCases.module.sass'
import PortfolioItem from '../../portfolioContainer/PortfolioItem'
import classNames from 'classnames'
import Button from '../../button/Button'

declare interface RelatedCasesProps {
    cases: PortfolioCaseStudy[]
    section?: string
    nextCase?: Link
}

const RelatedCases: FC<RelatedCasesProps> = ({ cases, section, nextCase } : RelatedCasesProps) => (
    <section className={classNames('container', styles.container, section && styles[section])}>
        <div className='case-studies-items'>
            {cases.map((caseStudy, index) => (
                <PortfolioItem data={caseStudy} key={index} />
            ))}
        </div>
        {nextCase?.url ? (
            <div className={styles.button}>
                <Button link={nextCase} size='big'/>
            </div>
        ) : null } 
    </section>
)

export default RelatedCases