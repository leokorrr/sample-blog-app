import React from 'react'
import { ICategories } from './types'

export const Categories: React.FC<ICategories> = (props) => {
  const { categories } = props

  return (
    <div className='mb-[8px] flex gap-[12px] items-center'>
      {categories.map((category) => (
        <span
          key={category.id}
          className='text-[14px] text-purple-700 font-medium'
        >
          {category.name}
        </span>
      ))}
    </div>
  )
}
