import { ICategory, IPost } from '@/types/types'

export const connectCategoriesToPosts = (posts: IPost[], categories: ICategory[]) => {
  const postsWithCategories = posts.map((post: IPost) => {
    const postCategories = post.categories.map((categoryId: number) => {
      return categories.find((category) => category.id === categoryId)
    })

    return {
      ...post,
      categories: postCategories
    }
  })

  return postsWithCategories
}
