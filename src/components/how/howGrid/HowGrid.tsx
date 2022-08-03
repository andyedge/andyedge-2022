import How from '../../../models/entities/how.model'
import styles from './HowGrid.module.sass'
import Filters from './Filters'
import { useState } from 'react'
import { SetFilterProps } from '../dropdown/Dropdown'

declare interface HowGridProps {
    contents: How
}   

const HowGrid = ({ contents } : HowGridProps) => {
    const [activeFilters, setActiveFilters] = useState<number[]>(contents.filters.map(() => 0))

    const setFilter = ({ value, index} : SetFilterProps) => {
        const newfilters = [...activeFilters]
        newfilters[index] = value
        setActiveFilters(newfilters)
    }
    
    return (
        <div>
            <Filters 
                filters={contents.filters} 
                onChange={setFilter}
                activeFilters={activeFilters}
            />
            <div className={styles.items_container}>
                {contents.items.map((item, index) => (
                    <div key={index} className={styles.item}>
                        <h6>{item.title}</h6>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HowGrid