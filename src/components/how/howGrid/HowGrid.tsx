import { Fragment, useEffect, useState } from 'react'
import { SetFilterProps } from '../dropdown/Dropdown'
import How from '../../../models/entities/how.model'
import HowItem from '../../../models/generic/howItem.model'
import styles from './HowGrid.module.sass'
import Filters from './Filters'
import HowGridItem from './HowGridItem'
import { chunk, cloneDeep, sortBy } from 'lodash'
import ScrollParallax from '../../ScrollParallax'
import { HOW_FILTERS, DATE_FILTER_OPTIONS, OPTIONS_ALL } from '../../../constants/Constants'

declare interface HowGridProps {
    contents: How
}

const ITEMS_PER_ROW = 3

const HowGrid = ({ contents }: HowGridProps) => {
    //Adds "All" option to all filters but Date
    const initialFilters = [...contents.filters].map((filter, index) => {
        const newFilter = cloneDeep(filter)
        if (index !== HOW_FILTERS.DATE) {
            newFilter.options.unshift(OPTIONS_ALL)
        }
        return newFilter
    })

    const [activeFilters, setActiveFilters] = useState<number[]>(initialFilters.map(() => 0))
    const [filteredItems, setFilteredItems] = useState<HowItem[][]>(chunk([...contents.items], ITEMS_PER_ROW))

    //Updates selected filter
    const setFilter = ({ value, index }: SetFilterProps) => {
        const newfilters = [...activeFilters]
        newfilters[index] = value
        setActiveFilters(newfilters)
    }

    const getActiveFilterLabels = () => {
        const topicFilterIndex = activeFilters[HOW_FILTERS.TOPIC]
        const formatFilterIndex = activeFilters[HOW_FILTERS.FORMAT]
        const platformFilterIndex = activeFilters[HOW_FILTERS.PLATFORM]

        return {
            topicFilter: initialFilters[HOW_FILTERS.TOPIC].options[topicFilterIndex],
            formatFilter: initialFilters[HOW_FILTERS.FORMAT].options[formatFilterIndex],
            platformFilter: initialFilters[HOW_FILTERS.PLATFORM].options[platformFilterIndex]
        }
    }

    const filterItems = (items: HowItem[]) => {
        const {
            topicFilter,
            formatFilter,
            platformFilter
        } = getActiveFilterLabels()

        const isTopicItem = (item: HowItem) => topicFilter === OPTIONS_ALL || topicFilter === item.category?.name
        const isFormatItem = (item: HowItem) => formatFilter === OPTIONS_ALL || formatFilter === item.format
        const isPlatformItem = (item: HowItem) => platformFilter === OPTIONS_ALL || platformFilter === item.platform?.name

        //Filters items whether the filter has the "All" option selected and selected option matchs with item data
        return items.filter((item) => isTopicItem(item) && isFormatItem(item) && isPlatformItem(item))
    }


    useEffect(() => {
        let newItems = [...contents.items]

        newItems = filterItems(newItems)
        //After filter, sorts by date
        if (activeFilters[HOW_FILTERS.DATE] === DATE_FILTER_OPTIONS.OLDEST) {
            newItems = sortBy(newItems, 'date')
        }

        //Finally, chunks the array of items. This is only for creating individual scroll parallax effect for each row
        // and it does not involve any filter logic
        setFilteredItems(chunk(newItems, ITEMS_PER_ROW))
    }, [activeFilters])

    return (
        <section>
            <Filters
                filters={initialFilters}
                onChange={setFilter}
                activeFilters={activeFilters}
            />
            <div className={styles.items_container}>
                {filteredItems.map((rowItems, rowIndex) => (
                    <Fragment key={rowIndex}>
                        {rowItems.map((item, index) => (
                            <HowGridItem key={index} item={item} />
                        ))}
                    </Fragment>
                ))}
            </div>
        </section>
    )
}

export default HowGrid