import { IPost } from '@/types/types'

export const getCategoryPosts = (posts: IPost[], category: number) => {
  const categoryPosts = posts.filter((post: IPost) => post.categories.includes(category))

  return categoryPosts
}
