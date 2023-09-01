import { Pagination } from '@/components/Pagination'
import { PostCardList } from '@/components/PostCardList'
import { SearchFilterToolbar } from '@/components/SearchFilterToolbar'
import { IPostsPageProps } from '@/types/types'
import { TAKE } from '@/utils/constants'
import { redirect } from 'next/navigation'

async function getPosts(page: number, searchValue: string, category: string | null) {
  const res = await fetch(
    `${process.env.API_URL}/posts/page/${page}?searchValue=${searchValue}&category=${category}`,
    {
      cache: 'no-cache'
    }
  )

  if (!res.ok) return null

  return res.json()
}

export default async function Posts(props: IPostsPageProps) {
  const { params, searchParams } = props

  const posts = await getPosts(
    params.page,
    searchParams.searchValue || '',
    searchParams.category || null
  )

  const maxPages = Math.ceil(posts.meta.itemsCount / TAKE)

  if (params.page > maxPages) {
    redirect('/posts/1')
  }

  return (
    <main>
      <div className='flex w-full justify-center mt-[20px]'>
        <div className='max-w-[1240px] w-full'>
          <div className='flex flex-col items-center gap-[20px] mb-[40px]'>
            <h1 className='font-bold text-[32px]'>From the blog</h1>
            <p className='text-[20px] max-w-[650px] text-center text-gray-500'>
              Lorem ipsum dolor sit amer consectetur, adipiscing elit. Ipsa libero labore
              natus atque, ducimus
            </p>
          </div>
          <SearchFilterToolbar />
          <PostCardList cards={posts.data} />
          <Pagination itemsCount={posts.meta.itemsCount} />
        </div>
      </div>
    </main>
  )
}
