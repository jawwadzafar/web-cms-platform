import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Clock, User, ArrowRight, Search } from 'lucide-react'
import { api } from '@/lib/api-client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Blog - Company Name',
  description: 'Read our latest articles, insights, and industry updates. Stay informed with expert analysis and professional perspectives.',
  keywords: 'blog, articles, insights, industry news, professional updates',
  openGraph: {
    title: 'Blog - Company Name',
    description: 'Read our latest articles, insights, and industry updates.',
    type: 'website',
  },
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
  tags?: Array<{
    name: string
    slug: string
  }>
  author?: {
    name: string
    avatar?: {
      url: string
    }
  }
  publishedDate: string
  readTime?: number
}

interface Category {
  id: string
  name: string
  slug: string
  postCount: number
}

export default async function BlogPage() {
  try {
    // Fetch blog posts and categories
    const [postsResponse, categoriesResponse] = await Promise.all([
      api.posts.getAll({ limit: 50, sort: '-publishedDate' }),
      api.categories.getAll({ limit: 20 })
    ])

    const posts: BlogPost[] = postsResponse.data.docs || []
    const categories: Category[] = categoriesResponse.data.docs || []

    return (
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Our Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover insights, industry trends, and expert perspectives from our team of professionals.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search articles..."
                className="pl-10 pr-4 py-3 text-base"
              />
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              {/* Categories */}
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/blog/category/${category.slug}`}
                      className="flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors"
                    >
                      <span className="text-sm">{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.postCount}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest articles and insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <Input placeholder="Enter your email" className="text-sm" />
                  <Button size="sm" className="w-full">
                    Subscribe
                  </Button>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-3">
              {posts.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">📝</div>
                  <h3 className="text-xl font-semibold mb-2">No blog posts yet</h3>
                  <p className="text-muted-foreground mb-6">
                    Check back soon for our first articles, or create some content in the CMS admin panel.
                  </p>
                  <Button asChild>
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>
              ) : (
                <>
                  {/* Featured Post */}
                  {posts.length > 0 && (
                    <div className="mb-12">
                      <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
                      <Card className="overflow-hidden">
                        <div className="grid md:grid-cols-2">
                          {posts[0].featuredImage && (
                            <div className="relative h-64 md:h-full">
                              <Image
                                src={posts[0].featuredImage.url}
                                alt={posts[0].featuredImage.alt || posts[0].title}
                                fill
                                className="object-cover"
                              />
                            </div>
                          )}
                          <div className="p-6 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-3">
                              {posts[0].category && (
                                <Badge variant="outline">
                                  {posts[0].category.name}
                                </Badge>
                              )}
                              <span className="text-sm text-muted-foreground">
                                {new Date(posts[0].publishedDate).toLocaleDateString()}
                              </span>
                            </div>
                            <CardTitle className="text-2xl mb-3">
                              {posts[0].title}
                            </CardTitle>
                            <CardDescription className="text-base mb-4">
                              {posts[0].excerpt}
                            </CardDescription>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                              {posts[0].author && (
                                <div className="flex items-center gap-2">
                                  <User className="h-4 w-4" />
                                  <span>{posts[0].author.name}</span>
                                </div>
                              )}
                              {posts[0].readTime && (
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4" />
                                  <span>{posts[0].readTime} min read</span>
                                </div>
                              )}
                            </div>
                            <Button asChild>
                              <Link href={`/blog/${posts[0].slug}`}>
                                Read More <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </div>
                  )}

                  {/* All Posts Grid */}
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {posts.slice(1).map((post) => (
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
                                  <div className="flex items-center gap-1">
                                    <User className="h-3 w-3" />
                                    <span>{post.author.name}</span>
                                  </div>
                                )}
                                {post.readTime && (
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    <span>{post.readTime} min</span>
                                  </div>
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
                  </div>

                  {/* Load More */}
                  {posts.length >= 50 && (
                    <div className="text-center mt-12">
                      <Button variant="outline" size="lg">
                        Load More Articles
                      </Button>
                    </div>
                  )}
                </>
              )}
            </main>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error fetching blog data:', error)
    
    return (
      <div className="min-h-screen bg-background">
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Our Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover insights, industry trends, and expert perspectives from our team of professionals.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="text-center py-16">
            <div className="text-6xl mb-4">⚠️</div>
            <h3 className="text-xl font-semibold mb-2">Unable to load blog posts</h3>
            <p className="text-muted-foreground mb-6">
              There was an error connecting to the CMS. Please check your connection and try again.
            </p>
            <Button asChild>
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
