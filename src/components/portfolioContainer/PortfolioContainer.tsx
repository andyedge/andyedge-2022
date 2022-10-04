import { FC, useEffect, useState, useRef } from 'react'
import Portfolio from '../../models/entities/portfolio.model'
import Button from '../button/Button'
import CategoryLabels from '../categoryLabels/CategoryLabels'
import CustomImage from '../image/Image'
import styles from './Portfolio.module.sass'
import ScrollParallax from '../ScrollParallax'
import PortfolioItem from './PortfolioItem'
import PortfolioCaseStudy from '../../models/generic/portfolioCaseStudy.model'
import { capitalizeFirstLetter } from '../../helpers/functions'
import { cloneDeep, findIndex, sortBy } from 'lodash'
import { useRouter } from 'next/router'

declare interface PortfolioProps {
    contents: Portfolio
}

const TRESHOLD = 6
const PortfolioContainer: FC<PortfolioProps> = ({ contents } : PortfolioProps) => {
    const caseStudies = sortBy([...contents.caseStudies], 'updatedAt').reverse()
    const router = useRouter()
    const portfolioReference = useRef<HTMLElement>(null)
    const initialCases = caseStudies.slice(0, TRESHOLD)
    
    const [currentCases, setCurrentCases] = useState<PortfolioCaseStudy[]>(initialCases)
    const [selectedCategory, setSelectedCategory] = useState<number | null> (null)
    
    const loadMore = () => {
        setCurrentCases(caseStudies)
    }
    
    const showLoadMoreButton = (): boolean => {
        return (selectedCategory === null) && (currentCases.length < caseStudies.length)
    }

    const applyURLFilter = () => {
        const filterText = router.query.filter
        if(!filterText) {
            return
        }

        const categoryName = filterText as string
        setTimeout(() => {
            portfolioReference.current?.scrollIntoView()
            const categoryIndex = findIndex(contents.categories, { name: categoryName.toUpperCase() })
            if(categoryIndex !== -1) {
                setSelectedCategory(categoryIndex)
            }
        }, 500)
    }

    useEffect(() => {
        applyURLFilter()
    }, [router])

    useEffect(() => {
        if(selectedCategory === null) {
            setCurrentCases(initialCases)
        }
        else {
            const categoryName = contents.categories[selectedCategory].name
            const casesCopy = cloneDeep(caseStudies)
            const filteredCases = casesCopy.filter((caseStudy) => {
                return caseStudy.categories.find((category) => category.name === categoryName)
            })

            let newCases: PortfolioCaseStudy[] = []
            filteredCases.forEach((caseStudy) => {
                const categoryMatched = caseStudy.categories.find((category) => category.name === categoryName)
                if(categoryMatched) {
                    const arrayWihtouMatchedCategory = caseStudy.categories.filter((category) => category.name !== categoryMatched.name)
                    newCases = [...newCases, {
                        ...caseStudy,
                        categories: [categoryMatched, ...cloneDeep(arrayWihtouMatchedCategory) ]
                    }]
                }
            })
            setCurrentCases(newCases)
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
                    <CustomImage src={{image: contents.featuredCaseImages[0]}} props={{priority: true}}/>
                </div>
                <div className={styles.featured_case_info}>
                    <div>
                        <CategoryLabels categories={contents.featuredCaseCategories} trim={2}/>
                        <h2 className='h2'>{contents.featuredCaseTitle}</h2>
                        <p>{contents.featuredCaseText}</p>
                    </div>
                    <div className={styles.featured_case_button}>
                        <Button size='auto' link={contents.featuredCaseStudyButton}/>
                    </div>
                </div>
            </section>
            <section ref={portfolioReference} className={styles.case_studies}>
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
                    {contents.categories.map((category, index) => (
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
                    <div className='case-studies-items'>
                        {currentCases.map((caseStudy, index) => (
                            <PortfolioItem data={caseStudy} key={index} />
                        ))}
                    </div>
                </ScrollParallax>
                <div className={styles.button_container}>
                    {showLoadMoreButton() ? (
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