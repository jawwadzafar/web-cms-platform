import useSWR from 'swr'
import { fetcher } from '../api'

export interface Service {
  id: string
  title: string
  slug: string
  description: any
  shortDescription: string
  featuredImage?: {
    url: string
    alt: string
  }
  gallery?: Array<{
    image: {
      url: string
      alt: string
    }
  }>
  category?: {
    id: string
    name: string
    slug: string
  }
  pricing?: {
    startingPrice?: number
    priceRange?: string
    pricingDetails?: string
  }
  features?: Array<{
    feature: string
  }>
  active: boolean
  featured: boolean
  meta?: {
    title?: string
    description?: string
    keywords?: string
  }
  createdAt: string
  updatedAt: string
}

export function useServices(params?: { 
  limit?: number
  page?: number
  active?: boolean
  featured?: boolean
  category?: string
}) {
  const queryParams = new URLSearchParams()
  
  if (params?.limit) queryParams.set('limit', params.limit.toString())
  if (params?.page) queryParams.set('page', params.page.toString())
  if (params?.active !== undefined) queryParams.set('active', params.active.toString())
  if (params?.featured !== undefined) queryParams.set('featured', params.featured.toString())
  if (params?.category) queryParams.set('category', params.category)

  const url = `/services${queryParams.toString() ? '?' + queryParams.toString() : ''}`
  
  const { data, error, isLoading, mutate } = useSWR(url, fetcher)
  
  return {
    services: data?.docs || [],
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

export function useService(slug: string) {
  const { data, error, isLoading, mutate } = useSWR(
    slug ? `/services/slug/${slug}` : null,
    fetcher
  )
  
  return {
    service: data as Service | undefined,
    error,
    isLoading,
    mutate,
  }
}