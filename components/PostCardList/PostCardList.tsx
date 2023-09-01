import React from 'react'
import { IPostCardList } from './types'
import { IPostCard } from '@/types/types'
import { PostCard } from '../PostCard'

export const PostCardList: React.FC<IPostCardList> = (props) => {
  const { cards } = props

  if (cards.length === 0) return <div>No posts...</div>

  return (
    <div className='flex flex-wrap gap-[20px]'>
      {cards && cards?.map((card: IPostCard) => (
        <PostCard
          key={card.id}
          id={card.id}
          title={card.title}
          categories={card.categories}
          slug={card.slug}
          excerpt={card.excerpt}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  )
}
