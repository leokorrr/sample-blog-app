import { IPost } from '@/types/types'

export const getSearchPosts = (posts: IPost[], searchValue: string) => {
  const searchPosts = posts.filter((post: IPost) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  return searchPosts
}
