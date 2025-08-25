import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, Bookmark, MessageCircle } from 'lucide-react'
import { api } from '@/lib/api-client'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { RichTextRenderer } from '@/components/cms/RichTextRenderer'

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
    const post = await api.posts.getBySlug(params.slug)
    
    if (!post) {
      return {
        title: 'Post Not Found',
        description: 'The requested blog post could not be found.',
      }
    }

    return {
      title: post.meta?.title || post.title,
      description: post.meta?.description || post.excerpt,
      keywords: post.meta?.keywords || post.tags?.map(t => t.name).join(', '),
      openGraph: {
        title: post.meta?.title || post.title,
        description: post.meta?.description || post.excerpt,
        type: 'article',
        images: post.meta?.ogImage ? [post.meta.ogImage.url] : post.featuredImage ? [post.featuredImage.url] : [],
        publishedTime: post.publishedDate,
        authors: post.author ? [post.author.name] : [],
        tags: post.tags?.map(t => t.name) || [],
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
    const posts = await api.posts.getAll({ limit: 100 })
    return posts.docs?.map((post) => ({
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
    const post = await api.posts.getBySlug(params.slug)
    
    if (!post) {
      notFound()
    }

    // Fetch related posts (same category or tags)
    const relatedPosts = await api.posts.getAll({
      limit: 3,
      where: {
        or: [
          { category: { equals: post.category?.id } },
          { tags: { in: post.tags?.map(t => t.id) || [] } }
        ],
        and: [
          { id: { not_equals: post.id } },
          { published: { equals: true } }
        ]
      }
    })

    // Calculate read time if not provided
    const estimatedReadTime = post.readTime || Math.ceil((post.content?.length || 0) / 200)

    return (
      <div className="min-h-screen bg-background">
        {/* Back Navigation */}
        <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" asChild className="gap-2">
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>

        <article className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Article Header */}
              <header className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  {post.category && (
                    <Badge variant="outline">
                      {post.category.name}
                    </Badge>
                  )}
                  <span className="text-sm text-muted-foreground">
                    {new Date(post.publishedDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                  {post.title}
                </h1>

                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Author and Meta Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {post.author && (
                      <div className="flex items-center gap-3">
                        {post.author.avatar && (
                          <div className="relative w-12 h-12 rounded-full overflow-hidden">
                            <Image
                              src={post.author.avatar.url}
                              alt={post.author.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <p className="font-medium">{post.author.name}</p>
                          {post.author.bio && (
                            <p className="text-sm text-muted-foreground">{post.author.bio}</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Bookmark className="h-4 w-4" />
                      Save
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Share2 className="h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>
              </header>

              {/* Featured Image */}
              {post.featuredImage && (
                <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden mb-8">
                  <Image
                    src={post.featuredImage.url}
                    alt={post.featuredImage.alt || post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              {/* Article Content */}
              <div className="prose prose-lg max-w-none mb-12">
                {/* Render the rich text content from Payload CMS */}
                {post.content ? (
                  <RichTextRenderer content={post.content} />
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">Content is being prepared...</p>
                  </div>
                )}
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag.id} variant="secondary" asChild>
                        <Link href={`/blog/tag/${tag.slug}`}>
                          {tag.name}
                        </Link>
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Article Footer */}
              <footer className="border-t pt-8">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span>Published {new Date(post.publishedDate).toLocaleDateString()}</span>
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
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              {/* Author Card */}
              {post.author && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">About the Author</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 mb-3">
                      {post.author.avatar && (
                        <div className="relative w-16 h-16 rounded-full overflow-hidden">
                          <Image
                            src={post.author.avatar.url}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold">{post.author.name}</h4>
                        {post.author.bio && (
                          <p className="text-sm text-muted-foreground">{post.author.bio}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Related Posts */}
              {relatedPosts.docs && relatedPosts.docs.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Related Posts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {relatedPosts.docs.map((relatedPost: RelatedPost) => (
                      <div key={relatedPost.id} className="group">
                        <Link href={`/blog/${relatedPost.slug}`} className="block">
                          <div className="flex gap-3">
                            {relatedPost.featuredImage && (
                              <div className="relative w-20 h-16 rounded overflow-hidden flex-shrink-0">
                                <Image
                                  src={relatedPost.featuredImage.url}
                                  alt={relatedPost.featuredImage.alt || relatedPost.title}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform"
                                />
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                                {relatedPost.title}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                {new Date(relatedPost.publishedDate).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* Newsletter Signup */}
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Stay Updated</CardTitle>
                  <CardDescription>
                    Get the latest articles and insights delivered to your inbox.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-sm border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button size="sm" className="w-full">
                    Subscribe
                  </Button>
                </CardContent>
              </Card>
            </aside>
          </div>
        </article>
      </div>
    )
  } catch (error) {
    console.error('Error fetching blog post:', error)
    notFound()
  }
}
