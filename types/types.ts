export interface IApiPage {
  params: {
    page?: number
    slug?: string
  }
}

export interface IPost {
  id: number
  slug: string
  title: string
  excerpt: string
  imageUrl: string
  categories: number[]
}

export interface IPostCard extends Omit<IPost, 'categories'> {
  categories: ICategory[]
}

export interface ICategory {
  id: number
  name: string
  slug: string
}

export interface IPostsPageProps {
  searchParams: {
    searchValue: string
    category: string
  },
  params: {
    page: number
  }
}

export interface IPostPageProps {
  params: {
    slug: string
  }
}