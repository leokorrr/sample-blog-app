import { IApiPage } from '@/types/types'
import { NextRequest, NextResponse } from 'next/server'
import { getPosts } from '../../posts.service'

export async function GET(req: NextRequest, { params }: IApiPage) {
  const { page } = params

  const queryParams = new URL(req.url).searchParams

  const searchValue = queryParams.get('searchValue')

  const category = queryParams.get('category')

  const { posts, itemsCount } = getPosts(
    page || 1,
    searchValue || '',
    Number(category) || null
  )

  return NextResponse.json({
    data: posts,
    meta: { itemsCount }
  })
}
