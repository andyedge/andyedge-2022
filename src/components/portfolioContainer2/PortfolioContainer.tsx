import { FC, useEffect, useState } from 'react'
import Portfolio from '../../models/entities/portfolio.model'
import Button from '../button/Button'
import CategoryLabels from '../categoryLabels/CategoryLabels'
import CustomImage from '../image/Image'
import styles from './Portfolio.module.sass'
import ScrollParallax from '../ScrollParallax'
import PortfolioItem from './PortfolioItem'
import PortfolioCaseStudy from '../../models/generic/portfolioCaseStudy.model'

declare interface PortfolioProps {
    contents: Portfolio
}

const TRESHOLD = 6
const PortfolioContainer: FC<PortfolioProps> = ({ contents } : PortfolioProps) => {
    const initialCases = contents.caseStudies.slice(0, TRESHOLD)

    const [cases, setCases] = useState<PortfolioCaseStudy[]>(initialCases)
    const [selectedCategory, setSelectedCategory] = useState<number | null> (null)

    const loadMore = () => {
        const nextCasesLength = cases.length + TRESHOLD
        setCases(contents.caseStudies.slice(0, nextCasesLength))
    }

    const capitalizeFirstLetter = (text: string): string => {
        return text.split(' ').map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        }).join(' ')
    }

    useEffect(() => {
        if(selectedCategory === null) {
            setCases(initialCases)
        }
        else {
            const categoryName = contents.categories[selectedCategory].name
            const filteredCases = contents.caseStudies.filter((caseStudy) => {
                return caseStudy.categories.find((category) => category.name === categoryName)
            })
            setCases(filteredCases)
        }
    }, [selectedCategory])

    return (
        <div className='container'>
            <section className={styles.hero}>
                <h1 className='h1'>{contents.title}</h1>
                <p className='info-text'>{contents.subtitle}</p>
            </section>
            <section className={styles.featured_case}>
                <div className={styles.featured_case_carousel}>
                    <CustomImage src={contents.featuredCaseImages[0]}/>
                </div>
                <div className={styles.featured_case_info}>
                    <div>
                        <CategoryLabels categories={contents.featuredCaseCategories} trim={2}/>
                        <h2 className='h2'>{contents.featuredCaseTitle}</h2>
                        <p>{contents.featuredCaseText}</p>
                    </div>
                    <div>
                        <Button size='tiny' link={contents.featuredCaseStudyButton}/>
                    </div>
                </div>
            </section>
            <section className={styles.case_studies}>
                <div className={styles.case_studies_info}>
                    <h2 className='h2'>{contents.portfolioTitle}</h2>
                    <p>{contents.portfolioDescription}</p>
                </div>
                <div className={styles.filter}>
                    <button
                        className={selectedCategory === null ? styles.selected : ''}
                        onClick={() => setSelectedCategory(null)}
                    >
                        {contents.allText}
                    </button>
                    {contents.categories.reverse().map((category, index) => (
                        <button
                            key={index}
                            className={index === selectedCategory ? styles.selected : ''}
                            onClick={() => setSelectedCategory(index)}
                        >
                            {capitalizeFirstLetter(category.name)}
                        </button>
                    ))}
                </div>
                <ScrollParallax>
                    <div className={styles.case_studies_items}>
                        {cases.map((caseStudy, index) => (
                            <PortfolioItem data={caseStudy} key={index} />
                        ))}
                    </div>
                </ScrollParallax>
                <div className={styles.button_container}>
                    {selectedCategory === null ? (
                        <button onClick={loadMore}>
                            Load More
                        </button>
                    ) : null}
                </div>
            </section>
        </div>
    )
}

export default PortfolioContainer