import { getPaginatedArray } from '@/utils/getPaginatedArray'
import blog from '../../../db/blog.json'
import { connectCategoriesToPosts } from '@/utils/connectCategoriesToPosts'
import { getSearchPosts } from '@/utils/getSearchPosts'
import { getCategoryPosts } from '@/utils/getCategoryPosts'
import { TAKE } from '@/utils/constants'

export const getPosts = (
  page: number,
  searchValue?: string,
  category?: number | null
) => {
  let posts = blog.posts

  const skip = (page - 1) * TAKE

  if (searchValue) {
    posts = getSearchPosts(posts, searchValue)
  }

  if (category) {
    posts = getCategoryPosts(posts, category)
  }

  const paginatedPosts = getPaginatedArray(posts, skip, TAKE)

  const postsWithCategories = connectCategoriesToPosts(paginatedPosts, blog.categories)

  return {
    posts: postsWithCategories,
    itemsCount: posts.length
  }
}

export const getPost = (slug: string) => {
  const post = blog.posts.find((it) => it.slug === slug)

  if (post) {
    const postWithCategories = connectCategoriesToPosts([post], blog.categories)

    return postWithCategories[0]
  }

  return null
}
