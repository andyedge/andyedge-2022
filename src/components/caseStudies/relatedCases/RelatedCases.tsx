import { FC } from 'react'
import PortfolioCaseStudy from '../../../models/generic/portfolioCaseStudy.model'
import styles from './RelatedCases.module.sass'
import PortfolioItem from '../../portfolioContainer2/PortfolioItem'
import classNames from 'classnames'

declare interface RelatedCasesProps {
    cases: PortfolioCaseStudy[]
}

const RelatedCases: FC<RelatedCasesProps> = ({ cases } : RelatedCasesProps) => (
    <section className={classNames('container', styles.container)}>
        <div className='case-studies-items'>
            {cases.map((caseStudy, index) => (
                <PortfolioItem data={caseStudy} key={index} />
            ))}
        </div>
    </section>
)

export default RelatedCases