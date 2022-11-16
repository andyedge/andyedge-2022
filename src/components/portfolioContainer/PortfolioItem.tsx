import { FC } from 'react'
import Link from 'next/link'
import CustomImage from '../image/Image'
import styles from './Portfolio.module.sass'
import CategoryLabels from '../categoryLabels/CategoryLabels'
import PortfolioCaseStudy from '../../models/generic/portfolioCaseStudy.model'

declare interface PortfolioItemProps {
    data: PortfolioCaseStudy
}

const PortfolioItem: FC<PortfolioItemProps> = ({ data } : PortfolioItemProps) => (
    <div className={styles.case_item}>
        <Link href={`/${data.link}`}>
            <a>
                <div className={styles.case_item_image}>
                    <CustomImage src={{image: data.image}}/>
                </div>
            </a>
        </Link>
        <CategoryLabels categories={data.categories} trim={2}/>
        <h4>{data.title}</h4>
        <div className={styles.footer}>
            <h6>{data.area}</h6>
            <span>{data.year}</span>
        </div>
    </div>
)

export default PortfolioItem