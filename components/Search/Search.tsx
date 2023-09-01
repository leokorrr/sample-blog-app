'use client'

import { useSearchQuery } from '@/hooks/useSearhQuery'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export const Search = () => {
  const { category, searchValue: searchValueParam } = useSearchQuery()

  const [searchValue, setSearchValue] = useState(searchValueParam || '')

  const router = useRouter()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const handleInputClear = () => {
    setSearchValue('')
    router.push('/posts/1')
  }

  const handlePostsSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    router.push(`/posts/1?searchValue=${searchValue}${category ? `&category=${category}` : ''}`)
  }

  return (
    <form
      onSubmit={handlePostsSearch}
      className='w-full flex gap-[12px]'
    >
      <input
        type='text'
        placeholder='Enter post title...'
        value={searchValue}
        onChange={handleInputChange}
        className='h-[40px] px-[16px] border rounded-lg w-full'
      />
      <button
        className='rounded bg-purple-700 hover:bg-purple-800
          transition px-[16px] text-white rounded-lg'
        type='submit'
      >
        Search
      </button>
      <button
        className='rounded bg-red-700 hover:bg-red-800 disabled:bg-gray-400
          transition px-[16px] text-white rounded-lg w-[160px]'
        onClick={handleInputClear}
        disabled={!searchValue && !category}
        type='button'
      >
        Clear filters
      </button>
    </form>
  )
}
