import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { api } from '@/lib/api-client'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

interface Tag {
  id: string
  name: string
  slug: string
  description?: string
}

interface BlogPost {
  id: string
  title: string
  excerpt: string
  slug: string
  featuredImage?: {
    url: string
    alt: string
  }
  category?: {
    name: string
    slug: string
  }
  author?: {
    name: string
  }
  publishedDate: string
  readTime?: number
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const tag = await api.tags.getBySlug(params.slug)
    
    if (!tag) {
      return {
        title: 'Tag Not Found',
        description: 'The requested tag could not be found.',
      }
    }

    return {
      title: `${tag.name} - Blog Tag`,
      description: tag.description || `Read all blog posts tagged with ${tag.name}.`,
      openGraph: {
        title: `${tag.name} - Blog Tag`,
        description: tag.description || `Read all blog posts tagged with ${tag.name}.`,
        type: 'website',
      },
    }
  } catch (error) {
    return {
      title: 'Blog Tag',
      description: 'Browse blog posts by tag.',
    }
  }
}

export async function generateStaticParams() {
  try {
    const tags = await api.tags.getAll({ limit: 100 })
    return tags.data.docs?.map((tag) => ({
      slug: tag.slug,
    })) || []
  } catch (error) {
    return []
  }
}

export default async function TagPage({ params }: { params: { slug: string } }) {
  try {
    // Fetch tag and posts
    const [tagResponse, postsResponse] = await Promise.all([
      api.tags.getBySlug(params.slug),
      api.posts.getAll({
        where: {
          tags: { slug: { equals: params.slug } },
          status: { equals: 'published' }
        },
        sort: '-publishedDate',
        limit: 50
      })
    ])

    const tag: Tag = tagResponse.data.docs[0]
    const posts: BlogPost[] = postsResponse.data.docs || []

    if (!tag) {
      notFound()
    }

    return (
      <div className="min-h-screen bg-background">
        {/* Tag Header */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-muted/30">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
              Tag
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              #{tag.name}
            </h1>
            {tag.description && (
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {tag.description}
              </p>
            )}
            <p className="text-lg text-muted-foreground mt-4">
              {posts.length} article{posts.length !== 1 ? 's' : ''} tagged with {tag.name}
            </p>
          </div>
        </section>

        {/* Posts Grid */}
        <div className="container mx-auto px-4 py-12">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🏷️</div>
              <h3 className="text-xl font-semibold mb-2">No posts with this tag yet</h3>
              <p className="text-muted-foreground mb-6">
                Check back soon for articles with this tag, or browse other tags.
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild>
                  <Link href="/blog">Browse All Posts</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {posts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    {post.featuredImage && (
                      <div className="relative h-48">
                        <Image
                          src={post.featuredImage.url}
                          alt={post.featuredImage.alt || post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 mb-2">
                        {post.category && (
                          <Badge variant="outline" className="text-xs">
                            {post.category.name}
                          </Badge>
                        )}
                        <span className="text-xs text-muted-foreground">
                          {new Date(post.publishedDate).toLocaleDateString()}
                        </span>
                      </div>
                      <CardTitle className="text-lg line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          {post.author && (
                            <span>{post.author.name}</span>
                          )}
                          {post.readTime && (
                            <span>{post.readTime} min read</span>
                          )}
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/blog/${post.slug}`}>
                            Read <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              {posts.length >= 50 && (
                <div className="text-center">
                  <Button variant="outline" size="lg">
                    Load More Articles
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error fetching tag data:', error)
    notFound()
  }
}
