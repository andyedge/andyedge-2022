import { FC } from 'react'
import Category from '../../models/generic/category.model'

declare interface CategoryProps {
    categories: Category[]
    trim?: number
}

const trimCategories = (categories: Category[], trimAmount: number) => categories.slice(0, trimAmount)

const CategoryLabels: FC<CategoryProps> = ({ categories, trim } : CategoryProps ) => (
    <div className='category-labels'>
        {(trim ? trimCategories(categories, trim) : categories).map((category, index) => (
            <h6 key={index} className={`status-${category.color}`}>{category.name}</h6>
        ))}
    </div>
)

export default CategoryLabels