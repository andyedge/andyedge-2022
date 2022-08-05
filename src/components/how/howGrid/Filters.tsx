import { FC } from 'react'
import Dropdown, { SetFilterProps } from '../dropdown/Dropdown'
import styles from './HowGrid.module.sass'
import { Filter } from '../../../models/entities/how.model'
import { capitalizeFirstLetter } from '../../../helpers/helpers'

export interface FiltersProps {
    filters: Filter[]
    activeFilters: number[]
    onChange: (arg1: SetFilterProps) => void
}

const Filters: FC<FiltersProps> = ({ filters, activeFilters, onChange } : FiltersProps) => (
    <div className={styles.filters_container}>
        <div className={styles.filters}>
            {filters.map((filter, index) => {
                const options = filter.options.map((option) => capitalizeFirstLetter(option))
                return (
                    <div key={index} className={styles.cell}>
                        <h5 className={styles.label}>{filter.label}</h5>
                        <Dropdown
                            filterIndex={index}
                            value={options[activeFilters[index]]}
                            setValue={onChange}
                            options={options}
                        />
                    </div>
                )
            })}
        </div>
    </div>
)

export default Filters