import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, Share2, Bookmark, MessageCircle } from 'lucide-react'
import { api } from '@/lib/api-client'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import RichText from '@/components/cms/RichText'
import { formatDateTime } from '@/lib/utils/formatDateTime'

// Force dynamic rendering to prevent build-time issues
export const dynamic = 'force-dynamic'
export const revalidate = 0

interface BlogPost {
  id: string
  title: string
  excerpt: string
  slug: string
  content: any // Rich text content from Payload
  featuredImage?: {
    url: string
    alt: string
    width: number
    height: number
  }
  category?: {
    name: string
    slug: string
  }
  tags?: Array<{
    name: string
    slug: string
  }>
  author?: {
    name: string
    bio?: string
    avatar?: {
      url: string
    }
  }
  publishedDate: string
  readTime?: number
  meta?: {
    title?: string
    description?: string
    keywords?: string
    ogImage?: {
      url: string
    }
  }
}

interface RelatedPost {
  id: string
  title: string
  excerpt: string
  slug: string
  featuredImage?: {
    url: string
    alt: string
  }
  publishedDate: string
}

// Generate metadata for the blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    // Validate params
    if (!params.slug || typeof params.slug !== 'string') {
      console.log('Invalid slug params:', params)
      return {
        title: 'Blog Post Not Found',
        description: 'The requested blog post could not be found.',
      }
    }

    console.log('Generating metadata for slug:', params.slug)

    const response = await api.posts.getBySlug(params.slug)
    console.log('API response:', response)
    
    const posts = response.data.docs || []
    console.log('Posts found:', posts.length)
    
    if (!posts || posts.length === 0) {
      console.log('No posts found for slug:', params.slug)
      return {
        title: 'Blog Post Not Found',
        description: 'The requested blog post could not be found.',
      }
    }
    
    const post = posts[0]
    console.log('Post data:', { title: post.title, excerpt: post.excerpt })
    
    // Validate post data
    if (!post || !post.title || !post.excerpt) {
      console.log('Invalid post data:', post)
      return {
        title: 'Blog Post',
        description: 'Read our latest blog post.',
      }
    }

    const title = post.meta?.title || post.title
    const description = post.meta?.description || post.excerpt
    
    console.log('Final metadata:', { title, description })

    return {
      title,
      description,
      keywords: post.meta?.keywords || post.tags?.map((t: any) => t.name).join(', '),
      openGraph: {
        title,
        description,
        type: 'article',
        images: post.meta?.ogImage ? [post.meta.ogImage.url] : post.featuredImage ? [post.featuredImage.url] : [],
        publishedTime: post.publishedDate,
        authors: post.author ? [post.author.name] : [],
        tags: post.tags?.map((t: any) => t.name) || [],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: post.meta?.ogImage ? [post.meta.ogImage.url] : post.featuredImage ? [post.featuredImage.url] : [],
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: 'Blog Post',
      description: 'Read our latest blog post.',
    }
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    const response = await api.posts.getAll({ limit: 100 })
    const posts = response.data.docs || []
    
    // Filter out posts without slugs and ensure they're valid
    const validPosts = posts
      .filter((post: any) => post && post.slug && typeof post.slug === 'string')
      .map((post: any) => ({
        slug: post.slug,
      }))
    
    // If no valid posts found, return empty array to prevent build errors
    if (validPosts.length === 0) {
      console.warn('No valid posts with slugs found during build time')
      return []
    }
    
    return validPosts
  } catch (error) {
    console.error('Error generating static params:', error)
    // Return empty array to prevent build failures
    return []
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  try {
    // Validate params
    if (!params.slug || typeof params.slug !== 'string') {
      console.error('Invalid slug parameter:', params.slug)
      notFound()
    }

    // Fetch the blog post
    const response = await api.posts.getBySlug(params.slug)
    const posts = response.data.docs || []
    
    if (!posts || posts.length === 0) {
      console.error('No posts found for slug:', params.slug)
      notFound()
    }
    
    const post = posts[0]
    
    // Validate post data
    if (!post || !post.id || !post.title || !post.slug) {
      console.error('Invalid post data:', post)
      notFound()
    }
    
    if (post.slug !== params.slug) {
      console.error('Slug mismatch:', post.slug, 'vs', params.slug)
      notFound()
    }

    // Fetch related posts (same category or tags)
    let relatedPosts = { docs: [] }
    try {
      const relatedPostsResponse = await api.posts.getAll({
        limit: 3,
        where: {
          and: [
            { id: { not_equals: post.id } },
            { status: { equals: 'published' } },
            {
              or: [
                { category: { equals: post.category?.id } },
                { tags: { in: post.tags?.map((t: any) => t.id) || [] } }
              ]
            }
          ]
        }
      })
      relatedPosts = relatedPostsResponse.data || { docs: [] }
    } catch (error) {
      console.error('Error fetching related posts:', error)
      // Continue without related posts rather than failing
      relatedPosts = { docs: [] }
    }

    // Calculate read time if not provided
    let estimatedReadTime = 5 // Default fallback
    try {
      if (post.readTime && typeof post.readTime === 'number' && post.readTime > 0) {
        estimatedReadTime = post.readTime
      } else if (post.content) {
        const contentString = JSON.stringify(post.content)
        const wordCount = contentString.split(' ').length
        estimatedReadTime = Math.max(1, Math.ceil(wordCount / 200)) // Average reading speed
      }
    } catch (error) {
      console.error('Error calculating read time:', error)
      estimatedReadTime = 5 // Fallback to default
    }

    return (
      <div className="min-h-screen bg-background">
        {/* Hero Section - Full Screen */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 75%, rgba(34, 197, 94, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`
            }}></div>
          </div>
          
          {/* Featured Image Background */}
          {post.featuredImage && (
            <div className="absolute inset-0">
              <Image
                src={post.featuredImage.url}
                alt={post.featuredImage.alt || post.title}
                fill
                className="object-cover opacity-40"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
            </div>
          )}
          
          {/* Content Overlay */}
          <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
            {/* Category and Date */}
            <div className="flex items-center justify-center gap-4 mb-8">
              {post.category && (
                <Badge variant="outline" className="bg-white/10 border-white/20 text-white px-4 py-2 text-sm">
                  {post.category.name}
                </Badge>
              )}
              <span className="text-white/80 text-sm px-3 py-1 bg-white/10 rounded-full">
                {formatDateTime(post.publishedDate)}
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8 leading-tight">
              {post.title}
            </h1>
            
            {/* Excerpt */}
            <p className="text-xl md:text-2xl font-light text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              {post.excerpt}
            </p>
            
            {/* Author and Meta */}
            <div className="flex items-center justify-center gap-8 text-white/80 mb-8">
              {post.author && (
                <div className="flex items-center gap-4">
                  {post.author.avatar && (
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/20">
                      <Image
                        src={post.author.avatar.url}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="text-left">
                    <p className="font-medium text-white text-lg">{post.author.name}</p>
                    {post.author.bio && (
                      <p className="text-sm text-white/70">{post.author.bio}</p>
                    )}
                  </div>
                </div>
              )}
              
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span className="text-lg">{estimatedReadTime} min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span className="text-lg">{formatDateTime(post.publishedDate)}</span>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <Button variant="ghost" size="lg" className="gap-3 text-white hover:bg-white/10 px-6 py-3">
                <Bookmark className="h-5 w-5" />
                Save Article
              </Button>
              <Button variant="ghost" size="lg" className="gap-3 text-white hover:bg-white/10 px-6 py-3">
                <Share2 className="h-5 w-5" />
                Share
              </Button>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Article Content Section */}
        <section className="py-32 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            {/* Main Content */}
            <main className="w-full">
              {/* Content Introduction */}
              <div className="mb-16 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mb-6">
                  <MessageCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Article Content</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
              </div>

              {/* Article Content with Better Spacing */}
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:text-gray-800 prose-pre:bg-gray-100 prose-pre:border prose-pre:border-gray-200 prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-8 prose-h1:mt-16 prose-h2:text-3xl prose-h2:font-semibold prose-h2:mb-6 prose-h2:mt-12 prose-h3:text-2xl prose-h3:font-semibold prose-h2:mb-4 prose-h3:mt-10 prose-p:text-lg prose-p:leading-relaxed prose-p:mb-8 prose-p:mt-6 prose-ul:mb-8 prose-ol:mb-8 prose-li:mb-3 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-8 prose-blockquote:italic prose-blockquote:text-gray-700 prose-blockquote:bg-blue-50 prose-blockquote:py-6 prose-blockquote:rounded-r-lg prose-blockquote:my-8 prose-hr:my-12 prose-hr:border-gray-200 prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8">
                {post.content ? (
                  <>
                    {/* Debug: Show content structure */}
                    {process.env.NODE_ENV === 'development' && (
                      <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <h4 className="text-sm font-semibold text-yellow-800 mb-2">Debug Info (Development Only)</h4>
                        <p className="text-xs text-yellow-700 mb-2">Content Type: {typeof post.content}</p>
                        <p className="text-xs text-yellow-700 mb-2">Content Keys: {post.content ? Object.keys(post.content).join(', ') : 'None'}</p>
                        <details className="text-xs text-yellow-700">
                          <summary>Raw Content (Click to expand)</summary>
                          <pre className="mt-2 text-xs overflow-auto bg-white p-2 rounded border">
                            {JSON.stringify(post.content, null, 2)}
                          </pre>
                        </details>
                      </div>
                    )}
                    
                    <RichText data={post.content} />
                    
                    {/* Fallback: If RichText doesn't work, show raw content */}
                    {process.env.NODE_ENV === 'development' && (
                      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <h4 className="text-sm font-semibold text-blue-800 mb-2">Fallback Content Renderer</h4>
                        <div className="text-sm text-blue-700">
                          {post.content?.root?.children?.map((node: any, index: number) => {
                            if (node.type === 'paragraph') {
                              return (
                                <p key={index} className="mb-4">
                                  {node.children?.map((child: any, childIndex: number) => {
                                    if (child.type === 'text') {
                                      return <span key={childIndex}>{child.text}</span>
                                    }
                                    return null
                                  })}
                                </p>
                              )
                            }
                            if (node.type === 'heading') {
                              const level = node.tag || 'h2'
                              if (level === 'h1') {
                                return (
                                  <h1 key={index} className="text-3xl font-bold mb-4 mt-8">
                                    {node.children?.map((child: any, childIndex: number) => {
                                      if (child.type === 'text') {
                                        return <span key={childIndex}>{child.text}</span>
                                      }
                                      return null
                                    })}
                                  </h1>
                                )
                              }
                              if (level === 'h2') {
                                return (
                                  <h2 key={index} className="text-2xl font-bold mb-4 mt-8">
                                    {node.children?.map((child: any, childIndex: number) => {
                                      if (child.type === 'text') {
                                        return <span key={childIndex}>{child.text}</span>
                                      }
                                      return null
                                    })}
                                  </h2>
                                )
                              }
                              if (level === 'h3') {
                                return (
                                  <h3 key={index} className="text-xl font-bold mb-4 mt-8">
                                    {node.children?.map((child: any, childIndex: number) => {
                                      if (child.type === 'text') {
                                        return <span key={childIndex}>{child.text}</span>
                                      }
                                      return null
                                    })}
                                  </h3>
                                )
                              }
                            }
                            return null
                          })}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-20">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-8">
                      <MessageCircle className="h-12 w-12 text-gray-400" />
                    </div>
                    <h3 className="text-3xl font-semibold mb-6 text-gray-900">Content Coming Soon</h3>
                    <p className="text-gray-600 max-w-lg mx-auto text-lg">
                      This article's content is being prepared. Check back soon for the full article.
                    </p>
                  </div>
                )}
              </div>

              {/* Tags with Better Spacing */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-16 pt-12 border-t border-gray-200">
                  <h3 className="text-xl font-semibold mb-6 text-gray-900">Article Tags</h3>
                  <div className="flex flex-wrap gap-3">
                    {post.tags.map((tag: any) => (
                      <Badge key={tag.id} variant="outline" asChild className="bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 px-4 py-2 text-sm">
                        <Link href={`/blog/tag/${tag.slug}`}>
                          {tag.name}
                        </Link>
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Article Footer with Better Spacing */}
              <footer className="mt-16 pt-12 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Published {formatDateTime(post.publishedDate)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{estimatedReadTime} min read</span>
                    </div>
                  </div>
                </div>
              </footer>

              {/* Related Posts with Better Spacing */}
              {relatedPosts.docs && relatedPosts.docs.length > 0 && (
                <div className="mt-24 pt-16 border-t border-gray-200">
                  <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold mb-4 text-gray-900">Continue Reading</h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Explore more insights and discoveries in our related articles
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {relatedPosts.docs.map((relatedPost: RelatedPost) => (
                      <div key={relatedPost.id} className="group relative">
                        {/* 3D Border Effect */}
                        <div className="absolute -inset-3 bg-gradient-to-br from-blue-500 to-indigo-700 transform -rotate-1 rounded-2xl opacity-20 group-hover:opacity-30 transition-all duration-500 group-hover:-rotate-2"></div>
                        <div className="absolute -inset-2 bg-gradient-to-br from-blue-600 to-indigo-800 transform rotate-1 rounded-2xl opacity-30 group-hover:opacity-40 transition-all duration-500 group-hover:rotate-2"></div>
                        
                        {/* Main Card */}
                        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                          <Link href={`/blog/${relatedPost.slug}`} className="block">
                            {relatedPost.featuredImage && (
                              <div className="relative h-56 w-full">
                                <Image
                                  src={relatedPost.featuredImage.url}
                                  alt={relatedPost.featuredImage.alt || relatedPost.title}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                              </div>
                            )}
                            <div className="p-8">
                              <h4 className="font-bold text-xl line-clamp-2 text-gray-900 group-hover:text-blue-600 transition-colors mb-4 leading-tight">
                                {relatedPost.title}
                              </h4>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                <span>{formatDateTime(relatedPost.publishedDate)}</span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </main>
          </div>
        </section>
      </div>
    )
  } catch (error) {
    console.error('Error fetching blog post:', error)
    notFound()
  }
}
