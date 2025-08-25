import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, MessageCircle } from 'lucide-react'
import { api } from '@/lib/api-client'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import RichText from '@/components/cms/RichText'
import { formatDateTime } from '@/lib/utils/formatDateTime'

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
    const response = await api.posts.getBySlug(params.slug)
    const post = response.data.docs[0]
    
    if (!post) {
      return {
        title: 'Post Not Found',
        description: 'The requested blog post could not be found.',
      }
    }

    return {
      title: post.meta?.title || post.title,
      description: post.meta?.description || post.excerpt,
      keywords: post.meta?.keywords || post.tags?.map((t: any) => t.name).join(', '),
      openGraph: {
        title: post.meta?.title || post.title,
        description: post.meta?.description || post.excerpt,
        type: 'article',
        images: post.meta?.ogImage ? [post.meta.ogImage.url] : post.featuredImage ? [post.featuredImage.url] : [],
        publishedTime: post.publishedDate,
        authors: post.author ? [post.author.name] : [],
        tags: post.tags?.map((t: any) => t.name) || [],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.meta?.title || post.title,
        description: post.meta?.description || post.excerpt,
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
    return response.data.docs?.map((post: any) => ({
      slug: post.slug,
    })) || []
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  try {
    // Fetch the blog post
    const response = await api.posts.getBySlug(params.slug)
    const post = response.data.docs[0]
    
    if (!post) {
      notFound()
    }

    // Fetch related posts (same category or tags)
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
    const relatedPosts = relatedPostsResponse.data

    // Calculate read time if not provided
    const estimatedReadTime = post.readTime || Math.ceil((JSON.stringify(post.content || {}).length || 0) / 200)

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
            {/* Back Navigation */}
            <div className="absolute top-8 left-0">
              <Button variant="ghost" asChild className="gap-2 text-white hover:bg-white/10">
                <Link href="/blog">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </div>
            
            {/* Category and Date */}
            <div className="flex items-center justify-center gap-3 mb-6">
              {post.category && (
                <Badge variant="outline" className="bg-white/10 border-white/20 text-white">
                  {post.category.name}
                </Badge>
              )}
              <span className="text-white/80 text-sm">
                {formatDateTime(post.publishedDate)}
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
              {post.title}
            </h1>
            
            {/* Excerpt */}
            <p className="text-xl md:text-2xl font-light text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            {/* Author and Meta */}
            <div className="flex items-center justify-center gap-6 text-white/80">
              {post.author && (
                <div className="flex items-center gap-3">
                  {post.author.avatar && (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                      <Image
                        src={post.author.avatar.url}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="text-left">
                    <p className="font-medium text-white">{post.author.name}</p>
                    {post.author.bio && (
                      <p className="text-sm text-white/70">{post.author.bio}</p>
                    )}
                  </div>
                </div>
              )}
              
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{estimatedReadTime} min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDateTime(post.publishedDate)}</span>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button variant="ghost" size="lg" className="gap-2 text-white hover:bg-white/10">
                <Bookmark className="h-5 w-5" />
                Save
              </Button>
              <Button variant="ghost" size="lg" className="gap-2 text-white hover:bg-white/10">
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
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <main className="lg:col-span-3">
                {/* Article Content */}
                <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:text-gray-800 prose-pre:bg-gray-100 prose-pre:border prose-pre:border-gray-200">
                  {post.content ? (
                    <RichText data={post.content} />
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground">Content is being prepared...</p>
                    </div>
                  )}
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Tags</h3>
                    <div className="flex flex-wrap gap-3">
                      {post.tags.map((tag: any) => (
                        <Badge key={tag.id} variant="outline" asChild className="bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100">
                          <Link href={`/blog/tag/${tag.slug}`}>
                            {tag.name}
                          </Link>
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Article Footer */}
                <footer className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span>Published {formatDateTime(post.publishedDate)}</span>
                      <span>•</span>
                      <span>{estimatedReadTime} min read</span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="gap-2">
                        <MessageCircle className="h-4 w-4" />
                        Comment
                      </Button>
                    </div>
                  </div>
                </footer>
              </main>

              {/* Sidebar */}
              <aside className="lg:col-span-1 space-y-8">
                {/* Related Posts */}
                {relatedPosts.docs && relatedPosts.docs.length > 0 && (
                  <div className="group relative">
                    {/* 3D Border Effect */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-indigo-700 transform -rotate-1 rounded-2xl opacity-20 group-hover:opacity-30 transition-all duration-500 group-hover:-rotate-2"></div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-indigo-800 transform rotate-1 rounded-2xl opacity-30 group-hover:opacity-40 transition-all duration-500 group-hover:rotate-2"></div>
                    
                    {/* Main Container */}
                    <div className="relative bg-white rounded-2xl shadow-xl p-6">
                      <h3 className="text-lg font-semibold mb-4 text-gray-900">Related Posts</h3>
                      <div className="space-y-4">
                        {relatedPosts.docs.map((relatedPost: RelatedPost) => (
                          <div key={relatedPost.id} className="group">
                            <Link href={`/blog/${relatedPost.slug}`} className="block">
                              <div className="flex gap-3">
                                {relatedPost.featuredImage && (
                                  <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                    <Image
                                      src={relatedPost.featuredImage.url}
                                      alt={relatedPost.featuredImage.alt || relatedPost.title}
                                      fill
                                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                  </div>
                                )}
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-medium text-sm line-clamp-2 group-hover:text-blue-600 transition-colors">
                                    {relatedPost.title}
                                  </h4>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    {formatDateTime(relatedPost.publishedDate)}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Newsletter Signup */}
                <div className="group relative">
                  {/* 3D Border Effect */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-green-500 to-emerald-700 transform -rotate-1 rounded-2xl opacity-20 group-hover:opacity-30 transition-all duration-500 group-hover:-rotate-2"></div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-green-600 to-emerald-800 transform rotate-1 rounded-2xl opacity-30 group-hover:opacity-40 transition-all duration-500 group-hover:rotate-2"></div>
                  
                  {/* Main Container */}
                  <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl p-6 border border-green-200">
                    <h3 className="text-lg font-semibold mb-3 text-green-900">Stay Updated</h3>
                    <p className="text-sm text-green-700 mb-4">
                      Get the latest articles and insights delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 text-sm border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                      />
                      <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                        Subscribe
                      </Button>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    )
  } catch (error) {
    console.error('Error fetching blog post:', error)
    notFound()
  }
}
