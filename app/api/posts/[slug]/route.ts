import { IApiPage } from '@/types/types'
import { NextRequest, NextResponse } from 'next/server'
import { getPost } from '../posts.service'

export async function GET(req: NextRequest, { params }: IApiPage) {
  const { slug } = params

  const post = getPost(slug || '')

  return NextResponse.json({
    data: post
  })
}
