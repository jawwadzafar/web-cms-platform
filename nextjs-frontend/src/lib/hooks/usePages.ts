import useSWR from 'swr'
import { fetcher } from '../api'

export interface Page {
  id: string
  title: string
  slug: string
  content: any
  excerpt?: string
  featuredImage?: {
    url: string
    alt: string
  }
  published: boolean
  showInNavigation: boolean
  meta?: {
    title?: string
    description?: string
    keywords?: string
  }
  createdAt: string
  updatedAt: string
}

export function usePages(params?: { 
  limit?: number
  page?: number
  published?: boolean
  showInNavigation?: boolean
}) {
  const queryParams = new URLSearchParams()
  
  if (params?.limit) queryParams.set('limit', params.limit.toString())
  if (params?.page) queryParams.set('page', params.page.toString())
  if (params?.published !== undefined) queryParams.set('published', params.published.toString())
  if (params?.showInNavigation !== undefined) queryParams.set('showInNavigation', params.showInNavigation.toString())

  const url = `/pages${queryParams.toString() ? '?' + queryParams.toString() : ''}`
  
  const { data, error, isLoading, mutate } = useSWR(url, fetcher)
  
  return {
    pages: data?.docs || [],
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

export function usePage(slug: string) {
  const { data, error, isLoading, mutate } = useSWR(
    slug ? `/pages/slug/${slug}` : null,
    fetcher
  )
  
  return {
    page: data as Page | undefined,
    error,
    isLoading,
    mutate,
  }
}