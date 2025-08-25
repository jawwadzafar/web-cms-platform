import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { api } from '@/lib/api-client'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

interface Category {
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
  tags?: Array<{
    name: string
    slug: string
  }>
  author?: {
    name: string
  }
  publishedDate: string
  readTime?: number
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const category = await api.categories.getBySlug(params.slug)
    
    if (!category) {
      return {
        title: 'Category Not Found',
        description: 'The requested category could not be found.',
      }
    }

    return {
      title: `${category.name} - Blog Category`,
      description: category.description || `Read all blog posts in the ${category.name} category.`,
      openGraph: {
        title: `${category.name} - Blog Category`,
        description: category.description || `Read all blog posts in the ${category.name} category.`,
        type: 'website',
      },
    }
  } catch (error) {
    return {
      title: 'Blog Category',
      description: 'Browse blog posts by category.',
    }
  }
}

export async function generateStaticParams() {
  try {
    const categories = await api.categories.getAll({ limit: 50 })
    return categories.data.docs?.map((category) => ({
      slug: category.slug,
    })) || []
  } catch (error) {
    return []
  }
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  try {
    // Fetch category and posts
    const [categoryResponse, postsResponse] = await Promise.all([
      api.categories.getBySlug(params.slug),
      api.articles.getAll({
        where: {
          category: { slug: { equals: params.slug } },
          status: { equals: 'published' }
        },
        sort: '-publishedDate',
        limit: 50
      })
    ])

    const category: Category = categoryResponse.data.docs[0]
    const posts: BlogPost[] = postsResponse.data.docs || []

    if (!category) {
      notFound()
    }

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

        {/* Category Header */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-muted/30">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
              Category
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {category.name}
            </h1>
            {category.description && (
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {category.description}
              </p>
            )}
            <p className="text-lg text-muted-foreground mt-4">
              {posts.length} article{posts.length !== 1 ? 's' : ''} in this category
            </p>
          </div>
        </section>

        {/* Posts Grid */}
        <div className="container mx-auto px-4 py-12">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2">No posts in this category yet</h3>
              <p className="text-muted-foreground mb-6">
                Check back soon for articles in this category, or browse other categories.
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
    console.error('Error fetching category data:', error)
    notFound()
  }
}
