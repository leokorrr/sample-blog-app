import { useSearchParams } from 'next/navigation'

export const useSearchQuery = () => {
  const searchParams = useSearchParams()

  const category = searchParams.get('category') || null

  const searchValue = searchParams.get('searchValue') || null

  return {
    category,
    searchValue
  }
}
