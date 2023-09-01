import React from 'react'
import { Search } from '../Search'
import { CategoryFilter } from '../CategoryFilter'

export const SearchFilterToolbar = () => {
  return (
    <div className='flex gap-[20px] mb-[20px] items-center w-full'>
      <CategoryFilter />
      <Search />
    </div>
  )
}
