'use client'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import { IPagination } from './types'
import { useSearchQuery } from '@/hooks/useSearhQuery'
import { TAKE } from '@/utils/constants'

export const Pagination: React.FC<IPagination> = (props) => {
  const { itemsCount } = props

  const { page } = useParams()

  const router = useRouter()

  const { category, searchValue } = useSearchQuery()

  const query =
    category || searchValue
      ? `${searchValue ? `searchValue=${searchValue}` : ''}${
          category && searchValue ? '&' : ''
        }${category ? `category=${category}` : ''}`
      : ''

  const isGreaterThenFirstPage = Number(page) > 1

  const isMorePages = Math.ceil(itemsCount / TAKE) > Number(page)

  const handleNextPage = () => {
    if (isMorePages) {
      router.push(`/posts/${Number(page) + 1}?${query}`)
    }
  }

  const handlePrevPage = () => {
    if (isGreaterThenFirstPage) {
      router.push(`/posts/${Number(page) - 1}?${query}`)
    }
  }

  return (
    <div className='mt-[20px] flex w-full justify-between'>
      <span
        onClick={handlePrevPage}
        className={`transition font-semibold
        ${
          isGreaterThenFirstPage
            ? 'text-purple-600 hover:cursor-pointer  hover:text-purple-700'
            : 'text-gray-500 pointer-events-none'
        }`}
      >
        Prev
      </span>
      <span
        onClick={handleNextPage}
        className={`transition font-semibold
        ${
          isMorePages
            ? 'text-purple-600 hover:cursor-pointer  hover:text-purple-700'
            : 'text-gray-500 pointer-events-none'
        }`}
      >
        Next
      </span>
    </div>
  )
}
