import useSWR from 'swr'
import { fetcher } from '../api'

export interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  content: any
  featuredImage?: {
    url: string
    alt: string
  }
  category?: {
    id: string
    name: string
    slug: string
  }
  tags?: Array<{
    id: string
    name: string
    slug: string
  }>
  author?: {
    id: string
    name: string
    photo?: {
      url: string
      alt: string
    }
  }
  published: boolean
  publishedDate?: string
  featured: boolean
  meta?: {
    title?: string
    description?: string
    keywords?: string
  }
  createdAt: string
  updatedAt: string
}

export function usePosts(params?: { 
  limit?: number
  page?: number
  featured?: boolean
  category?: string
  published?: boolean
}) {
  const queryParams = new URLSearchParams()
  
  if (params?.limit) queryParams.set('limit', params.limit.toString())
  if (params?.page) queryParams.set('page', params.page.toString())
  if (params?.featured !== undefined) queryParams.set('featured', params.featured.toString())
  if (params?.category) queryParams.set('category', params.category)
  if (params?.published !== undefined) queryParams.set('published', params.published.toString())

  const url = `/posts${queryParams.toString() ? '?' + queryParams.toString() : ''}`
  
  const { data, error, isLoading, mutate } = useSWR(url, fetcher)
  
  return {
    posts: data?.docs || [],
    totalPages: data?.totalPages || 1,
    page: data?.page || 1,
    totalDocs: data?.totalDocs || 0,
    hasNextPage: data?.hasNextPage || false,
    hasPrevPage: data?.hasPrevPage || false,
    error,
    isLoading,
    mutate,
  }
}

export function usePost(slug: string) {
  const { data, error, isLoading, mutate } = useSWR(
    slug ? `/posts/slug/${slug}` : null,
    fetcher
  )
  
  return {
    post: data as Post | undefined,
    error,
    isLoading,
    mutate,
  }
}