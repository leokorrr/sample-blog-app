import { IPost } from "@/types/types"

export const getPaginatedArray = (array: IPost[], skip: number = 0, take: number = 8) => {
  if (array.length <= take) return array

  return array.slice(skip, skip + take)
}
