import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Clock, User, ArrowRight, Search, BookOpen, FileText } from 'lucide-react'
import { api } from '@/lib/api-client'
import { ModernButton } from '@/components/custom/modern-button'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Medical Blog - Sanimed International | Molecular Diagnostics & Healthcare Insights',
  description: 'Stay informed with the latest insights in molecular diagnostics, precision medicine, genetics, and clinical laboratory advances from Sanimed International experts.',
  keywords: 'medical blog, molecular diagnostics, precision medicine, genetics, clinical laboratory, healthcare insights, UAE medical news',
  openGraph: {
    title: 'Medical Blog - Sanimed International',
    description: 'Expert insights in molecular diagnostics, precision medicine, and healthcare innovation from Sanimed International.',
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
  status: 'draft' | 'published' | 'archived'
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
      api.posts.getPublished({ limit: 50, sort: '-publishedDate' }),
      api.categories.getAll({ limit: 20 })
    ])

    const posts: BlogPost[] = postsResponse.data.docs || []
    const categories: Category[] = categoriesResponse.data.docs || []

    return (
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-green-900 to-black opacity-90"></div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 75%, rgba(34, 197, 94, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`
            }}></div>
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-full backdrop-blur-sm mb-6">
                <BookOpen className="h-12 w-12 text-green-400" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
              Medical
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 font-extralight">
                Insights
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Stay informed with the latest advances in molecular diagnostics, precision medicine, genetics, 
              and clinical laboratory sciences from our team of medical experts and researchers.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  placeholder="Search medical articles and insights..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-400/50 focus:ring-2 focus:ring-green-400/20"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ModernButton variant="primary" size="lg" asChild>
                <Link href="#articles">Browse Articles</Link>
              </ModernButton>
              <ModernButton variant="outline" size="lg" asChild>
                <Link href="/contact">Subscribe</Link>
              </ModernButton>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-white" id="articles">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              {/* Medical Categories - Redesigned */}
              <div className="group relative">
                {/* 3D Border Effect */}
                <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-indigo-700 transform -rotate-1 rounded-2xl opacity-20 group-hover:opacity-30 transition-all duration-500 group-hover:-rotate-2"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-indigo-800 transform rotate-1 rounded-2xl opacity-30 group-hover:opacity-40 transition-all duration-500 group-hover:rotate-2"></div>
                
                {/* Main Container */}
                <div className="relative bg-white rounded-2xl shadow-xl p-6">
                  <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Medical Categories
                  </h3>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/blog/category/${category.slug}`}
                        className="group flex items-center justify-between p-3 rounded-xl hover:bg-blue-50 transition-all duration-200 border border-transparent hover:border-blue-200"
                      >
                        <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 transition-colors">
                          {category.name}
                        </span>
                        <Badge variant="outline" className="text-xs bg-blue-100 border-blue-200 text-blue-700 group-hover:bg-blue-200 transition-colors">
                          {category.postCount}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-3">
                {posts.length === 0 ? (
                  <div className="text-center py-20">
                    <div className="inline-flex items-center justify-center w-32 h-32 bg-gray-100 rounded-2xl mb-8">
                      <BookOpen className="h-16 w-16 text-gray-400" />
                    </div>
                    <h3 className="text-3xl font-light mb-6 text-gray-900">Medical Content Coming Soon</h3>
                    <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                      We're preparing exciting medical insights and diagnostic updates. Check back soon for the latest 
                      in molecular diagnostics and precision medicine, or contact our team for more information.
                    </p>
                    <ModernButton asChild>
                      <Link href="/contact">Get in Touch</Link>
                    </ModernButton>
                  </div>
                ) : (
                <>
                  {/* Featured Post */}
                  {posts.length > 0 && (
                    <div className="mb-12">
                      <h2 className="text-2xl font-bold mb-6">Featured Medical Insight</h2>
                      
                      <div className="group relative">
                        {/* 3D Border Effect */}
                        <div className="absolute -inset-3 bg-gradient-to-br from-green-500 to-emerald-700 transform -rotate-1 rounded-2xl opacity-20 group-hover:opacity-30 transition-all duration-500 group-hover:-rotate-2"></div>
                        <div className="absolute -inset-2 bg-gradient-to-br from-green-600 to-emerald-800 transform rotate-1 rounded-2xl opacity-30 group-hover:opacity-40 transition-all duration-500 group-hover:rotate-2"></div>
                        
                        {/* Main Card Container */}
                        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
                          <div className="grid md:grid-cols-2">
                            {/* Image - Touching Border */}
                            {posts[0].featuredImage && (
                              <div className="relative h-64 md:h-full">
                                <Image
                                  src={posts[0].featuredImage.url}
                                  alt={posts[0].featuredImage.alt || posts[0].title}
                                  fill
                                  className="object-cover"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                              </div>
                            )}
                            
                            {/* Content */}
                            <div className="p-8 flex flex-col justify-center">
                              <div className="flex items-center gap-2 mb-4 flex-wrap">
                                {posts[0].category && (
                                  <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-700">
                                    {posts[0].category.name}
                                  </Badge>
                                )}
                                <Badge variant={posts[0].status === 'published' ? 'default' : 'secondary'}>
                                  {posts[0].status === 'published' ? 'Published' : 'Draft'}
                                </Badge>
                                <span className="text-sm text-muted-foreground">
                                  {new Date(posts[0].publishedDate).toLocaleDateString()}
                                </span>
                              </div>
                              
                              <h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-green-700 transition-colors">
                                {posts[0].title}
                              </h3>
                              
                              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                {posts[0].excerpt}
                              </p>
                              
                              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
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
                              
                              <Link 
                                href={`/blog/${posts[0].slug}`}
                                className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-green-600 hover:bg-green-700 rounded-xl transition-all duration-200 group-hover:bg-green-700 group-hover:shadow-lg"
                              >
                                Read Full Article
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* All Posts Grid */}
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Latest Medical Research & Insights</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {posts.slice(1).map((post) => (
                        <div key={post.id} className="group relative">
                          {/* 3D Border Effect */}
                          <div className="absolute -inset-2 bg-gradient-to-br from-green-500 to-emerald-700 transform -rotate-1 rounded-2xl opacity-20 group-hover:opacity-30 transition-all duration-500 group-hover:-rotate-2"></div>
                          <div className="absolute -inset-1 bg-gradient-to-br from-green-600 to-emerald-800 transform rotate-1 rounded-2xl opacity-30 group-hover:opacity-40 transition-all duration-500 group-hover:rotate-2"></div>
                          
                          {/* Main Card Container */}
                          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                            {/* Image - Touching Border */}
                            {post.featuredImage && (
                              <div className="relative h-48 w-full">
                                <Image
                                  src={post.featuredImage.url}
                                  alt={post.featuredImage.alt || post.title}
                                  fill
                                  className="object-cover"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                              </div>
                            )}
                            
                            {/* Content */}
                            <div className="p-6">
                              {/* Meta Info */}
                              <div className="flex items-center gap-2 mb-3 flex-wrap">
                                {post.category && (
                                  <Badge variant="outline" className="text-xs bg-blue-50 border-blue-200 text-blue-700">
                                    {post.category.name}
                                  </Badge>
                                )}
                                <Badge variant={post.status === 'published' ? 'default' : 'secondary'} className="text-xs">
                                  {post.status === 'published' ? 'Published' : 'Draft'}
                                </Badge>
                                <span className="text-xs text-muted-foreground">
                                  {new Date(post.publishedDate).toLocaleDateString()}
                                </span>
                              </div>
                              
                              {/* Title */}
                              <h3 className="text-xl font-semibold mb-3 line-clamp-2 text-gray-900 group-hover:text-green-700 transition-colors">
                                {post.title}
                              </h3>
                              
                              {/* Excerpt */}
                              <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                                {post.excerpt}
                              </p>
                              
                              {/* Footer */}
                              <div className="flex items-center justify-between">
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
                                
                                {/* Read More Button */}
                                <Link 
                                  href={`/blog/${post.slug}`}
                                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-all duration-200 group-hover:bg-green-100"
                                >
                                  Read More
                                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Load More */}
                  {posts.length >= 50 && (
                    <div className="text-center mt-12">
                      <Button variant="outline" size="lg">
                        Load More Medical Content
                      </Button>
                    </div>
                  )}
                </>
              )}
              </main>
            </div>
          </div>
        </section>
      </div>
    )
  } catch (error) {
    console.error('Error fetching blog data:', error)
    
    return (
      <div className="min-h-screen bg-background">
        <section className="py-16 bg-gradient-to-br from-blue-50 via-background to-green-50">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <div className="text-6xl text-blue-600">🧬</div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Medical <span className="text-blue-600">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Stay informed with the latest advances in molecular diagnostics, precision medicine, genetics, 
              and clinical laboratory sciences from our team of medical experts and researchers.
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
