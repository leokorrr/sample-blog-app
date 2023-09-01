import { IPostCard } from '@/types/types'
import Image from 'next/image'
import React from 'react'
import { Categories } from '../Categories'
import Link from 'next/link'

export const PostCard: React.FC<IPostCard> = (props) => {
  const { slug, title, excerpt, imageUrl, categories } = props

  return (
    <Link href={`/post/${slug}`}>
      <div className='w-[400px] rounded-lg shadow-lg overflow-hidden h-full hover:translate-y-[-4px] transition'>
        <div className='w-full h-[150px] relative'>
          <Image
            src={imageUrl}
            alt='post-image'
            style={{ objectFit: 'cover' }}
            fill
          />
        </div>
        <div className='p-[20px]'>
          <Categories categories={categories} />
          <h2 className='mb-[12px] font-bold'>{title}</h2>
          <p className='text-gray-500'>{excerpt}</p>
        </div>
      </div>
    </Link>
  )
}
