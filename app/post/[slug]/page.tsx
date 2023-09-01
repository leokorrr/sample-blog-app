import { Categories } from '@/components/Categories'
import { IPostCard, IPostPageProps } from '@/types/types'
import { headers } from 'next/headers'
import Image from 'next/image'

async function getPost(slug: string) {
  const res = await fetch(`${process.env.API_URL}/posts/${slug}`, {
    headers: headers(),
    cache: 'no-cache'
  })

  if (!res.ok) return null

  return res.json()
}

export default async function Posts(props: IPostPageProps) {
  const { params } = props

  const post: { data: IPostCard } = await getPost(params.slug)

  const { title, excerpt, imageUrl, categories } = post.data

  return (
    <main>
      <div className='flex w-full justify-center mt-[20px]'>
        <div className='max-w-[768px] w-full'>
          <div className='w-full h-[300px] relative rounded-lg'>
            <Image
              src={imageUrl}
              alt='post-image'
              style={{ objectFit: 'cover' }}
              fill
              className='rounded-lg'
            />
          </div>
          <h2 className='mt-[16px] font-bold text-[24px]'>{title}</h2>
          <Categories categories={categories} />
          <p className='text-gray-500'>{excerpt}</p>
        </div>
      </div>
    </main>
  )
}
