import axios from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3100'

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor for logging
apiClient.interceptors.request.use(
  (config) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`)
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (process.env.NODE_ENV === 'development') {
      console.error('❌ API Error:', error.response?.data || error.message)
    }
    return Promise.reject(error)
  }
)

// API endpoints for Payload CMS v3
export const api = {
  // Articles (formerly Posts)
  articles: {
    getAll: (params?: { limit?: number; page?: number; sort?: string; where?: any }) =>
      apiClient.get('/api/articles', { params }),
    getBySlug: (slug: string) => apiClient.get(`/api/articles?where[slug][equals]=${slug}`),
    getFeatured: () => apiClient.get('/api/articles?where[featured][equals]=true'),
    getPublished: (params?: { limit?: number; page?: number; sort?: string }) =>
      apiClient.get('/api/articles', { 
        params: { 
          ...params, 
          where: { status: { equals: 'published' } }
        } 
      }),
  },
  
  // Backward compatibility alias
  posts: {
    getAll: (params?: { limit?: number; page?: number; sort?: string; where?: any }) =>
      apiClient.get('/api/articles', { params }),
    getBySlug: (slug: string) => apiClient.get(`/api/articles?where[slug][equals]=${slug}`),
    getFeatured: () => apiClient.get('/api/articles?where[featured][equals]=true'),
  },

  // Pages
  pages: {
    getAll: () => apiClient.get('/api/pages'),
    getBySlug: (slug: string) => apiClient.get(`/api/pages?where[slug][equals]=${slug}`),
    getNavigation: () => apiClient.get('/api/pages?where[showInNavigation][equals]=true&sort=order'),
  },

  // Services
  services: {
    getAll: (params?: { limit?: number; page?: number; category?: string; active?: boolean }) =>
      apiClient.get('/api/services', { params }),
    getBySlug: (slug: string) => apiClient.get(`/api/services?where[slug][equals]=${slug}`),
    getFeatured: () => apiClient.get('/api/services?where[featured][equals]=true'),
    getActive: () => apiClient.get('/api/services?where[active][equals]=true'),
  },

  // Team
  team: {
    getAll: () => apiClient.get('/api/team'),
    getActive: () => apiClient.get('/api/team?where[active][equals]=true'),
    getFeatured: () => apiClient.get('/api/team?where[featured][equals]=true'),
  },

  // Categories
  categories: {
    getAll: (params?: { limit?: number; where?: any }) => apiClient.get('/api/categories', { params }),
    getBySlug: (slug: string) => apiClient.get(`/api/categories?where[slug][equals]=${slug}`),
    getActive: () => apiClient.get('/api/categories?where[active][equals]=true'),
  },

  // Tags
  tags: {
    getAll: (params?: { limit?: number; where?: any }) => apiClient.get('/api/tags', { params }),
    getBySlug: (slug: string) => apiClient.get(`/api/tags?where[slug][equals]=${slug}`),
    getActive: () => apiClient.get('/api/tags?where[active][equals]=true'),
  },

  // Locations
  locations: {
    getAll: () => apiClient.get('/api/locations'),
    getActive: () => apiClient.get('/api/locations?where[active][equals]=true'),
    getPrimary: () => apiClient.get('/api/locations?where[primary][equals]=true'),
  },

  // Contact form submission
  contact: {
    submit: (data: {
      name: string
      email: string
      phone?: string
      subject: string
      message: string
    }) => apiClient.post('/api/contact', data),
  },

  // Newsletter subscription
  newsletter: {
    subscribe: (data: { email: string; firstName?: string; lastName?: string }) =>
      apiClient.post('/api/newsletter', data),
  },

  // Media
  media: {
    getAll: () => apiClient.get('/api/media'),
    getById: (id: string) => apiClient.get(`/api/media/${id}`),
  },
}

export default apiClient
