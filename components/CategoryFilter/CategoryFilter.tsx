'use client'
import { useSearchQuery } from '@/hooks/useSearhQuery'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { CATEGORIES, DEFAULT_SELECT_VALUE } from './constants'

export const CategoryFilter = () => {
  const [selectedValue, setSelectedValue] = useState<any>(DEFAULT_SELECT_VALUE)

  const { category, searchValue } = useSearchQuery()

  const router = useRouter()

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(
      `/posts/1?${searchValue ? `searchValue=${searchValue}` : ''}${`${
        searchValue ? '&' : ''
      }${Number(event.target.value) !== 0 ? `category=${event.target.value}` : ''}`}`
    )
  }

  useEffect(() => {
    if (category) {
      setSelectedValue(CATEGORIES.find((it) => it.value === Number(category))?.value)
    } else {
      setSelectedValue(DEFAULT_SELECT_VALUE)
    }
  }, [category])

  return (
    <div>
      <select
        name='country'
        className='border cursor-pointer rounded-lg h-[40px]'
        onChange={handleSelectChange}
        defaultValue={selectedValue || 0}
        value={selectedValue}
      >
        {CATEGORIES.map((category) => (
          <option
            key={category.value}
            value={category.value}
          >
            {category.label}
          </option>
        ))}
      </select>
    </div>
  )
}
